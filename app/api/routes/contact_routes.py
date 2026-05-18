from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.core.database import SessionLocal

from app.schemas.contact_schema import ContactCreate
from app.schemas.contact_schema import ContactResponse

from app.services.contact_service import ContactService

from app.core.auth_bearer import get_current_user


router = APIRouter()

service = ContactService()


def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()


@router.post(
    "/contacts",
    response_model=ContactResponse
)
def create_contact(
    data: ContactCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    try:

        return service.create(
            db,
            data,
            current_user.id
        )

    except Exception as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )


@router.get(
    "/contacts",
    response_model=list[ContactResponse]
)
def get_contacts(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    return service.get_all(
        db,
        current_user.id
    )