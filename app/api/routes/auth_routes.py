from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.core.database import get_db

from app.schemas.user_schema import UserCreate
from app.schemas.user_schema import UserResponse

from app.services.auth_service import AuthService
from app.schemas.auth_schema import LoginRequest

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
        
@router.post("/login")
def login(
    data: LoginRequest,
    db: Session = Depends(get_db)
):

    token = service.login(
        db,
        data.email,
        data.password
    )

    if not token:

        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    return {
        "access_token": token
    }