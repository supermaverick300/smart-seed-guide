from fastapi import FastAPI
from app.database.connection import Base, engine
from app import models  # triggers app/models/__init__.py, registers all 4 models

app = FastAPI()

Base.metadata.create_all(bind=engine)