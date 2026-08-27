from fastapi import FastAPI
from sqlalchemy import text
from app.database.connection import engine

app = FastAPI(
    title="Smart Seed Selector API",
    description="Backend API for the Smart Seed Selector System",
    version="1.0.0"
)

@app.get("/")
def root():
    return {"message": "Smart Seed Selector API is running!"}

@app.get("/health")
def health_check():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "status": "healthy",
            "database": "connected"
        }

    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "disconnected",
            "error": str(e)
        }