from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey

from datetime import datetime

from app.core.database import Base


class Contact(Base):

    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    contact = Column(String, nullable=False)

    notes = Column(String, nullable=True)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )