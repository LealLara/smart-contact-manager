from fastapi import Depends
from fastapi import HTTPException

from fastapi.security import HTTPBearer
from fastapi.security import HTTPAuthorizationCredentials

from sqlalchemy.orm import Session

from jose import jwt
from jose import JWTError

from app.core.database import SessionLocal

from app.models.user_model import User

from app.core.security import SECRET_KEY
from app.core.security import ALGORITHM

security = HTTPBearer()


def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()


def get_current_user(

    credentials: HTTPAuthorizationCredentials = Depends(security),

    db: Session = Depends(get_db)

):

    token = credentials.credentials

    try:

        payload = jwt.decode(

            token,

            SECRET_KEY,

            algorithms=[ALGORITHM]
        )

        email = payload.get("sub")

        if not email:

            raise HTTPException(

                status_code=401,

                detail="Token inválido"
            )

        user = db.query(User).filter(
            User.email == email
        ).first()

        if not user:

            raise HTTPException(

                status_code=401,

                detail="Usuário não encontrado"
            )

        return user

    except JWTError:

        raise HTTPException(

            status_code=401,

            detail="Token inválido"
        )
        