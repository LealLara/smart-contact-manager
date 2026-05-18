from fastapi import FastAPI

from app.core.database import Base
from app.core.database import engine

from app.api.routes.auth_routes import router as auth_router

from app.models.user_model import User
from app.models.contact_model import Contact

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth_router)


@app.get("/")
def root():
    return {"message": "Smart Contact Manager API"}