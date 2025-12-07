# TrustMyMessage - Deployment Guide

## 🔐 Environment Variables Setup

### For Emergent Deployment:

1. **Go to your deployment settings in Emergent**
2. **Add the following environment variable:**

```
OPENAI_API_KEY=your-actual-openai-api-key-here
```

3. **Your OpenAI API key** should be obtained from: https://platform.openai.com/api-keys

### Local Development:

1. Copy `.env.example` to `.env`:
   ```bash
   cp backend/.env.example backend/.env
   ```

2. Add your OpenAI API key to `backend/.env`:
   ```
   OPENAI_API_KEY=sk-proj-YOUR_ACTUAL_KEY_HERE
   ```

⚠️ **Never commit `.env` files to git!**

## 🚀 Deployment Steps

1. **Save to GitHub** (branch: main or create new branch)
2. **Set Environment Variable** in Emergent deployment settings
3. **Click Deploy** in Emergent interface
4. Your app will be live at: `your-app-name.emergent.host`

## 📝 Key Features

- ✅ Swedish landing page (Startsida)
- ✅ Message verification tool (Verifiera meddelande)
- ✅ AI fraud protection info (AI-bedrägeriskydd)
- ✅ Comprehensive blog guide (Hur känner man igen bedragare online? [2025-guide])
- ✅ OpenAI GPT-4o integration for scam detection
- ✅ MongoDB Atlas ready for production

## 🛠 Tech Stack

- **Frontend:** React 18.3, TailwindCSS, React Router
- **Backend:** FastAPI, Python
- **Database:** MongoDB (Atlas in production)
- **AI:** OpenAI GPT-4o
