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
import json
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent


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


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class AnalyzeRequest(BaseModel):
    imageBase64: str

class ScamAnalysisResponse(BaseModel):
    moneyRequest: bool
    loveBombing: bool
    urgency: bool
    avoidance: bool
    inconsistencies: List[str]
    commonPhrasesCount: int
    redFlags: List[str]
    explanation: str
    recommendation: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/analyze", response_model=ScamAnalysisResponse)
async def analyze_message(request: AnalyzeRequest):
    """
    Analyze a message screenshot for scam indicators using AI.
    Accepts base64 encoded image and returns detailed scam analysis.
    """
    try:
        # Get API key from environment
        api_key = os.environ.get('EMERGENT_LLM_KEY')
        if not api_key:
            raise HTTPException(status_code=500, detail="API key not configured")
        
        # Create LLM chat instance with gpt-4o-mini
        chat = LlmChat(
            api_key=api_key,
            session_id=f"scam-analysis-{uuid.uuid4()}",
            system_message="""You are TrustMyMsg, an AI assistant that detects scam signals in chat screenshots.

Return JSON ONLY with:
{
  "moneyRequest": boolean,
  "loveBombing": boolean,
  "urgency": boolean,
  "avoidance": boolean,
  "inconsistencies": ["array of notes"],
  "commonPhrasesCount": number,
  "redFlags": ["descriptions"],
  "explanation": "short text",
  "recommendation": "short text"
}"""
        ).with_model("openai", "gpt-4o-mini")
        
        # Create image content from base64
        image_content = ImageContent(image_base64=request.imageBase64)
        
        # Create user message with image
        user_message = UserMessage(
            text="Analyze this chat screenshot and return JSON.",
            file_contents=[image_content]
        )
        
        # Send message and get response
        response = await chat.send_message(user_message)
        
        # Parse JSON response
        # Extract JSON from response (handle markdown code blocks)
        response_text = response.strip()
        if response_text.startswith("```json"):
            response_text = response_text.split("```json")[1].split("```")[0].strip()
        elif response_text.startswith("```"):
            response_text = response_text.split("```")[1].split("```")[0].strip()
        
        analysis_data = json.loads(response_text)
        
        # Return structured response
        return ScamAnalysisResponse(**analysis_data)
        
    except json.JSONDecodeError as e:
        logger.error(f"Failed to parse AI response: {e}")
        raise HTTPException(status_code=500, detail="Failed to parse analysis results")
    except Exception as e:
        logger.error(f"Analysis error: {e}")
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()