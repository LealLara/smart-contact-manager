from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.core.database import get_db

from app.schemas.user_schema import UserCreate
from app.schemas.user_schema import UserResponse

from app.services.auth_service import AuthService

router = APIRouter()

service = AuthService()


@router.post(
    "/register",
    response_model=UserResponse
)
def register(
    data: UserCreate,
    db: Session = Depends(get_db)
):

    try:
        return service.register(
            db,
            data
        )

    except Exception as error:

        raise HTTPException(
            status_code=400,
            detail=str(error)
        )