from sqlalchemy.orm import Session

from app.models.contact_model import Contact


class ContactRepository:

    def create(
        self,
        db: Session,
        contact: Contact
    ):

        db.add(contact)

        db.commit()

        db.refresh(contact)

        return contact

    def get_all_by_user(
        self,
        db: Session,
        user_id: int
    ):

        return db.query(Contact).filter(
            Contact.user_id == user_id
        ).all()

    def get_by_contact(
        self,
        db: Session,
        contact_value: str,
        user_id: int
    ):

        return db.query(Contact).filter(
            Contact.contact == contact_value,
            Contact.user_id == user_id
        ).first()