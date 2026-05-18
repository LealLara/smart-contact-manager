from sqlalchemy.orm import Session

from app.core.security import hash_password
from app.core.security import verify_password
from app.core.security import create_access_token
from app.models.user_model import User
from app.repositories.user_repository import UserRepository
from app.schemas.user_schema import UserCreate
from app.services.email_service import send_welcome_email


class AuthService:

    def __init__(self):

        self.repository = UserRepository()

    def register(
        self,
        db: Session,
        data: UserCreate
    ):

        user_exists = self.repository.get_by_email(
            db,
            data.email
        )

        if user_exists:
            raise Exception("User already exists")

        user = User(
            username=data.username,
            email=data.email,
            hashed_password=hash_password(
                data.password
            )
        )
       
       # send_welcome_email(user.email)

        return self.repository.create(
            db,
            user
        )

    def login(
        self,
        db: Session,
        email: str,
        password: str
    ):

        user = self.repository.get_by_email(
            db,
            email
        )

        if not user:
            return None

        if not verify_password(
            password,
            user.hashed_password
        ):
            return None

        token = create_access_token(
            {"sub": user.email}
        )

        return token