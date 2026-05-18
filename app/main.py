from fastapi import FastAPI

from app.core.database import Base
from app.core.database import engine

from app.api.routes.auth_routes import router as auth_router

from app.models.user_model import User
from app.models.contact_model import Contact

from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.contact_routes import router as contact_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)

app.include_router(contact_router)
@app.get("/")
def root():
    return {"message": "Smart Contact Manager API"}