# app.py
from fastapi import FastAPI, Form
import requests

app = FastAPI()

@app.get("/")
def root():
    return {"message": "✅ AI Video Analyzer backend is running!"}

@app.post("/analyze_video/")
async def analyze_video(video_url: str = Form(...)):
    # contoh hasil analisis dummy
    result = {
        "video_url": video_url,
        "summary": "Video membahas AI video analysis",
        "duration": "12:35",
        "keywords": ["AI", "video", "automation"]
    }

    # kirim hasil ke webhook n8n
    webhook_url = "http://localhost:5678/webhook/video_analysis"
    requests.post(webhook_url, json=result)

    return {"message": "✅ Analysis sent to n8n!", "result": result}
