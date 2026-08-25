from fastapi import FastAPI

app = FastAPI(
    title="Smart Seed Selector API",
    description="Backend API for the Smart Seed Selector System",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "Smart Seed Selector API is running!"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }