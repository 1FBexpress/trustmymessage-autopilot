from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from emergentintegrations.llm.chat import LlmChat, UserMessage

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Define Models
class Website(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    domain: str
    main_language: str
    target_country: str
    business_type: str
    main_goals: str
    primary_services: List[str]
    current_stage: int = 1
    site_age: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class WebsiteCreate(BaseModel):
    name: str
    domain: str
    main_language: str = "en"
    target_country: str
    business_type: str
    main_goals: str
    primary_services: List[str]
    site_age: Optional[str] = None

class WebsiteUpdate(BaseModel):
    name: Optional[str] = None
    domain: Optional[str] = None
    main_language: Optional[str] = None
    target_country: Optional[str] = None
    business_type: Optional[str] = None
    main_goals: Optional[str] = None
    primary_services: Optional[List[str]] = None
    current_stage: Optional[int] = None
    site_age: Optional[str] = None

class Snapshot(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    website_id: str
    snapshot_type: str  # "Stage Run", "Page Optimization", "Weekly Report"
    summary: str
    full_output: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StageRunRequest(BaseModel):
    website_id: str

class PageOptimizationRequest(BaseModel):
    website_id: str
    page_url: Optional[str] = None
    page_type: str  # Home, Service, Blog, Landing, Other
    page_content: Optional[str] = None

class ReportRequest(BaseModel):
    website_id: str

class ProductionModeRequest(BaseModel):
    website_id: str
    auto_apply: bool = False

class ApplyProductionPackageRequest(BaseModel):
    snapshot_id: str

# Stage definitions
STAGES = {
    1: {
        "name": "Foundation",
        "description": "Establish core SEO fundamentals: keyword research, site structure, technical setup",
        "tasks": [
            "Complete keyword research and mapping",
            "Audit current site structure",
            "Ensure proper indexing (robots.txt, sitemap.xml)",
            "Set up Google Search Console and Analytics",
            "Optimize site speed and mobile responsiveness"
        ]
    },
    2: {
        "name": "On-page Optimization",
        "description": "Optimize existing pages with target keywords, meta tags, and content structure",
        "tasks": [
            "Optimize title tags and meta descriptions",
            "Improve heading structure (H1, H2, H3)",
            "Enhance internal linking",
            "Add schema markup for key pages",
            "Optimize images (alt text, compression)"
        ]
    },
    3: {
        "name": "Content Expansion",
        "description": "Create new high-quality content targeting strategic keywords",
        "tasks": [
            "Develop content calendar",
            "Create pillar pages for main topics",
            "Publish supporting blog posts",
            "Add FAQ sections to key pages",
            "Create location or service-specific pages"
        ]
    },
    4: {
        "name": "Authority & Links",
        "description": "Build domain authority through quality backlinks and brand mentions",
        "tasks": [
            "Develop link building strategy",
            "Create linkable assets (guides, tools, infographics)",
            "Reach out for guest posting opportunities",
            "Build local citations (if applicable)",
            "Monitor and disavow toxic backlinks"
        ]
    }
}

# Initialize SEO Brain
async def get_seo_brain(language: str = "en"):
    system_message = f"""
## IDENTITY & EXPERTISE
You are a highly specialized SEO consultant with 25 years of experience, focused on practical, executable strategy. Your goal is to optimize ONE website at a time, using the provided context.

## OPERATING RULES
1. Context-Aware: You always receive the full ACTIVE WEBSITE PROFILE and the current STAGE as context for every query.
2. No Live Data: You NEVER claim to have live ranking, traffic, or backlink data. All timeline and competition remarks are ESTIMATES.
3. Actionable Output: Your primary directive is to produce practical, copy-paste-ready results. Use appropriate code blocks (html, json) for tags and structured data.
4. Language Match: Output language MUST match the target language specified in the Website Profile. Current language: {language}
"""
    
    chat = LlmChat(
        api_key=os.environ['OPENAI_API_KEY'],
        session_id=str(uuid.uuid4()),
        system_message=system_message
    )
    chat.with_model("openai", "gpt-5.1")
    return chat

# Routes
@api_router.get("/")
async def root():
    return {"message": "SEO Autopilot Lab API"}

@api_router.post("/websites", response_model=Website)
async def create_website(input: WebsiteCreate):
    website_dict = input.model_dump()
    website_obj = Website(**website_dict)
    
    doc = website_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.websites.insert_one(doc)
    return website_obj

@api_router.get("/websites", response_model=List[Website])
async def get_websites():
    websites = await db.websites.find({}, {"_id": 0}).to_list(1000)
    
    for website in websites:
        if isinstance(website['created_at'], str):
            website['created_at'] = datetime.fromisoformat(website['created_at'])
    
    return websites

@api_router.get("/websites/{website_id}", response_model=Website)
async def get_website(website_id: str):
    website = await db.websites.find_one({"id": website_id}, {"_id": 0})
    
    if not website:
        raise HTTPException(status_code=404, detail="Website not found")
    
    if isinstance(website['created_at'], str):
        website['created_at'] = datetime.fromisoformat(website['created_at'])
    
    return website

@api_router.put("/websites/{website_id}", response_model=Website)
async def update_website(website_id: str, input: WebsiteUpdate):
    update_data = {k: v for k, v in input.model_dump().items() if v is not None}
    
    if not update_data:
        raise HTTPException(status_code=400, detail="No fields to update")
    
    result = await db.websites.update_one(
        {"id": website_id},
        {"$set": update_data}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Website not found")
    
    return await get_website(website_id)

@api_router.delete("/websites/{website_id}")
async def delete_website(website_id: str):
    result = await db.websites.delete_one({"id": website_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Website not found")
    
    await db.snapshots.delete_many({"website_id": website_id})
    
    return {"message": "Website deleted successfully"}

@api_router.get("/snapshots/{website_id}", response_model=List[Snapshot])
async def get_snapshots(website_id: str):
    snapshots = await db.snapshots.find(
        {"website_id": website_id},
        {"_id": 0}
    ).sort("created_at", -1).to_list(1000)
    
    for snapshot in snapshots:
        if isinstance(snapshot['created_at'], str):
            snapshot['created_at'] = datetime.fromisoformat(snapshot['created_at'])
    
    return snapshots

@api_router.post("/seo/stage-run")
async def run_stage_autopilot(input: StageRunRequest):
    website = await db.websites.find_one({"id": input.website_id}, {"_id": 0})
    
    if not website:
        raise HTTPException(status_code=404, detail="Website not found")
    
    stage_info = STAGES.get(website['current_stage'], STAGES[1])
    
    chat = await get_seo_brain(website['main_language'])
    
    prompt = f"""
## TRIGGER: STAGE RUN (Strategic Planning)

### ACTIVE WEBSITE PROFILE:
- Name: {website['name']}
- Domain: {website['domain']}
- Main Language: {website['main_language']}
- Target Country/Market: {website['target_country']}
- Business Type: {website['business_type']}
- Main Goals: {website['main_goals']}
- Primary Services/Offers: {', '.join(website['primary_services'])}
- Site Age: {website.get('site_age', 'Not specified')}

### CURRENT STAGE:
- Stage {website['current_stage']}: {stage_info['name']}
- Focus: {stage_info['description']}

Generate a strategic plan to move this website forward within the current Stage.

**Output Format (Strict):**
* **Stage Focus:** (Current Stage Name: Short description of its focus)
* **Top 10 Tasks:** A prioritized bullet list of 10 concrete, high-impact tasks for this stage.
* **Keyword Universe:** 10–30 keywords and phrases, clearly grouped into 3–5 thematic clusters relevant to the business type and goals.
* **Key Page Optimization (3–7 examples):** For important implied pages (Home, key Service pages):
    * **Page:** [Page Name]
    * **Primary Keyword:** [Best keyword]
    * `<title>`: [Suggested Title Tag - <60 characters]
    * `meta description`: [Suggested Meta Description - <155 characters]
* **New Content Ideas (3–5):** 3-5 high-potential content ideas (Blog, Landing Pages, etc.) with a compelling title and a 1-sentence description of the target audience/intent.
"""
    
    user_message = UserMessage(text=prompt)
    response = await chat.send_message(user_message)
    
    summary = f"Stage {website['current_stage']} ({stage_info['name']}) strategic plan generated"
    
    snapshot_dict = {
        "website_id": input.website_id,
        "snapshot_type": "Stage Run",
        "summary": summary,
        "full_output": response
    }
    snapshot_obj = Snapshot(**snapshot_dict)
    
    doc = snapshot_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.snapshots.insert_one(doc)
    
    return {
        "snapshot": snapshot_obj,
        "output": response
    }

@api_router.post("/seo/optimize-page")
async def optimize_page(input: PageOptimizationRequest):
    website = await db.websites.find_one({"id": input.website_id}, {"_id": 0})
    
    if not website:
        raise HTTPException(status_code=404, detail="Website not found")
    
    chat = await get_seo_brain(website['main_language'])
    
    prompt = f"""
## TRIGGER: PAGE OPTIMIZATION (Tactical Implementation)

### ACTIVE WEBSITE PROFILE:
- Name: {website['name']}
- Domain: {website['domain']}
- Main Language: {website['main_language']}
- Target Country/Market: {website['target_country']}
- Business Type: {website['business_type']}
- Main Goals: {website['main_goals']}
- Primary Services/Offers: {', '.join(website['primary_services'])}

### PAGE INFO:
- Page URL: {input.page_url or 'Not provided'}
- Page Type: {input.page_type}
- Current Content: {input.page_content or 'Not provided - please create suggested outline'}

Optimize this specific page based on the website profile and page information.

**Output Format (Strict):**
* **Inferred Search Intent:** [Short summary, e.g., "Transactional: User wants to book a service."]
* **Target Keywords:**
    * **Main Keyword:** [Primary focus term]
    * **Related Phrases:** (3–7 semantically related keywords)
* **Core Snippet Tags:**
    * `<title>`: [Copy-paste-ready title in `html` block]
    * `meta description`: [Copy-paste-ready meta in `html` block]
    * `<h1>`: [Copy-paste-ready H1 in `html` block]
* **Suggested Outline:** 3–6 critical `<h2>` or `<h3>` headings to cover the topic fully.
* **FAQ Block (Optional):** 3–5 Question/Answer pairs that address common user queries, suitable for structured data (schema).
"""
    
    user_message = UserMessage(text=prompt)
    response = await chat.send_message(user_message)
    
    summary = f"Page optimization for {input.page_type} page completed"
    
    snapshot_dict = {
        "website_id": input.website_id,
        "snapshot_type": "Page Optimization",
        "summary": summary,
        "full_output": response
    }
    snapshot_obj = Snapshot(**snapshot_dict)
    
    doc = snapshot_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.snapshots.insert_one(doc)
    
    return {
        "snapshot": snapshot_obj,
        "output": response
    }

@api_router.post("/seo/generate-report")
async def generate_report(input: ReportRequest):
    website = await db.websites.find_one({"id": input.website_id}, {"_id": 0})
    
    if not website:
        raise HTTPException(status_code=404, detail="Website not found")
    
    recent_snapshots = await db.snapshots.find(
        {"website_id": input.website_id},
        {"_id": 0}
    ).sort("created_at", -1).limit(4).to_list(4)
    
    if not recent_snapshots:
        raise HTTPException(status_code=400, detail="No snapshots available for this website")
    
    chat = await get_seo_brain(website['main_language'])
    
    stage_info = STAGES.get(website['current_stage'], STAGES[1])
    
    snapshots_context = "\n\n".join([
        f"### Snapshot {i+1} ({s['snapshot_type']}) - {s['created_at']}\n{s['summary']}\n{s['full_output'][:500]}..."
        for i, s in enumerate(recent_snapshots)
    ])
    
    prompt = f"""
## TRIGGER: GENERATE LATEST REPORT (Historical Summary)

### ACTIVE WEBSITE PROFILE:
- Name: {website['name']}
- Domain: {website['domain']}
- Main Language: {website['main_language']}
- Target Country/Market: {website['target_country']}
- Business Type: {website['business_type']}
- Main Goals: {website['main_goals']}
- Primary Services/Offers: {', '.join(website['primary_services'])}
- Current Stage: Stage {website['current_stage']} - {stage_info['name']}

### RECENT ACTIVITY (Last 2-4 Snapshots):
{snapshots_context}

Summarize the last 2-4 snapshots to provide a weekly-style status update.

**Output Format (Strict - Use Headings):**
* **## 📊 Weekly SEO Status Report**
* **### 1. Where We Are Now**
    * **Current Stage:** [Current Stage Name]
    * **Progress Summary:** (1-2 sentences summarizing the last period's recommendations/focus)
* **### 2. What Was Recommended**
    * (Bullet list of the 3-5 most critical keywords/tasks from the recent snapshots.)
* **### 3. Next Concrete Steps**
    * (3–5 highly specific actions the user should take this week/next based on the latest plan.)
"""
    
    user_message = UserMessage(text=prompt)
    response = await chat.send_message(user_message)
    
    summary = f"Weekly SEO status report generated"
    
    snapshot_dict = {
        "website_id": input.website_id,
        "snapshot_type": "Weekly Report",
        "summary": summary,
        "full_output": response
    }
    snapshot_obj = Snapshot(**snapshot_dict)
    
    doc = snapshot_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.snapshots.insert_one(doc)
    
    return {
        "snapshot": snapshot_obj,
        "output": response
    }

@api_router.post("/seo/production-mode")
async def run_production_mode(input: ProductionModeRequest):
    website = await db.websites.find_one({"id": input.website_id}, {"_id": 0})
    
    if not website:
        raise HTTPException(status_code=404, detail="Website not found")
    
    stage_info = STAGES.get(website['current_stage'], STAGES[1])
    
    chat = await get_seo_brain(website['main_language'])
    
    prompt = f"""
## TRIGGER: AUTOPILOT PRODUCTION MODE (Full Automation Output)

### ACTIVE WEBSITE PROFILE:
- Name: {website['name']}
- Domain: {website['domain']}
- Main Language: {website['main_language']}
- Target Country/Market: {website['target_country']}
- Business Type: {website['business_type']}
- Main Goals: {website['main_goals']}
- Primary Services/Offers: {', '.join(website['primary_services'])}
- Site Age: {website.get('site_age', 'Not specified')}

### CURRENT STAGE:
- Stage {website['current_stage']}: {stage_info['name']}
- Focus: {stage_info['description']}

---

**GOAL:**
Automatically generate ALL publish-ready SEO assets for the current STAGE with no manual planning required.

**OUTPUT FORMAT (STRICT):**

## ✅ AUTOPILOT PRODUCTION PACKAGE

### 1. READY-TO-PUBLISH PAGE BLOCKS (1–3 pages)
For each page:
- Page Name
- Target Keyword
- URL Slug
- FULL HTML STRUCTURE:
  - <title>
  - <meta description>
  - <h1>
  - 4–6 <h2>
  - Full SEO-optimized body text (700–1200 words)
  - Call-to-action block at the end

All text must be FINAL COPY, not placeholders.

---

### 2. SCHEMA MARKUP (JSON-LD)
For each generated page:
- Provide valid Schema.org JSON-LD in `json` block
- Use:
  - WebPage
  - Service
  - FAQPage (if applicable)

---

### 3. INTERNAL LINKING MAP
- A table:
  - From Page → To Page → Anchor Text

---

### 4. WEEKLY AUTOPILOT DEPLOYMENT PLAN
- Day 1: What to publish
- Day 3: What to update
- Day 5: What to interlink
- Day 7: What to review

---

### 5. RANKING EXPECTATION (ESTIMATE)
- What keyword groups may start moving in:
  - 30 days
  - 60 days
  - 90 days

**DISCLAIMER:** Clearly mark as ESTIMATE only.

**RULES:**
- Everything must be COPY–PASTE READY.
- NO placeholders.
- NO generic advice.
- NO "you should consider."
- Assume the user wants to deploy this immediately.
- Write in {website['main_language']} language.

---

### 6. FILE UPDATE PLAN
After generating all content above, provide exact file-writing instructions:

## 🔧 FILE UPDATE PLAN

For each page generated:
- **File Path:** Full path (e.g., `/app/frontend/public/index.html`)
- **Action:** CREATE or OVERWRITE
- **Content:** Full HTML document in a code block with language hint (```html)

For sitemap:
- **File Path:** `/app/frontend/public/sitemap.xml`
- **Action:** PATCH
- **Content:** XML entries to add

RULES for FILE UPDATE PLAN:
- Provide COMPLETE HTML documents, not fragments
- Include all DOCTYPE, head, and body tags
- Inject JSON-LD schema into each page's <head>
- Include internal links in the HTML where specified
- All paths must be absolute from project root
- Every file must be ready to write without modification
"""
    
    user_message = UserMessage(text=prompt)
    response = await chat.send_message(user_message)
    
    summary = f"Production Mode: Complete ready-to-publish SEO package for Stage {website['current_stage']} ({stage_info['name']})"
    
    snapshot_dict = {
        "website_id": input.website_id,
        "snapshot_type": "Autopilot Production Package",
        "summary": summary,
        "full_output": response
    }
    snapshot_obj = Snapshot(**snapshot_dict)
    
    doc = snapshot_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.snapshots.insert_one(doc)
    
    return {
        "snapshot": snapshot_obj,
        "output": response
    }

@api_router.get("/stages")
async def get_stages():
    return STAGES

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
