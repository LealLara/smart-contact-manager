from sqlalchemy.orm import Session

from app.models.contact_model import Contact

from app.repositories.contact_repository import ContactRepository

from app.schemas.contact_schema import ContactCreate


class ContactService:

    def __init__(self):

        self.repository = ContactRepository()

    def create(
        self,
        db: Session,
        data: ContactCreate,
        user_id: int
    ):

        contact_exists = self.repository.get_by_contact(
            db,
            data.contact,
            user_id
        )

        if contact_exists:

            raise Exception(
                "Contato já cadastrado"
            )

        contact = Contact(

            name=data.name,

            contact=data.contact,

            notes=data.notes,

            user_id=user_id
        )

        return self.repository.create(
            db,
            contact
        )

    def get_all(
        self,
        db: Session,
        user_id: int
    ):

        return self.repository.get_all_by_user(
            db,
            user_id
        )