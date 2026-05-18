from pydantic import BaseModel


class ContactCreate(BaseModel):
    name: str
    email: str | None = None
    phone: str | None = None


class ContactResponse(BaseModel):
    id: int
    name: str
    email: str | None
    phone: str | None
    favorite: bool

    class Config:
        from_attributes = True