from pydantic import BaseModel
from datetime import datetime


class ContactCreate(BaseModel):

    name: str

    contact: str

    notes: str | None = None


class ContactResponse(BaseModel):

    id: int

    name: str

    contact: str

    notes: str | None

    created_at: datetime

    user_id: int

    class Config:

        from_attributes = True