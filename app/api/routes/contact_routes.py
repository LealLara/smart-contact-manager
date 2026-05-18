from fastapi import APIRouter

router = APIRouter()

contacts = []


@router.get("/contacts")
def get_contacts():

    return contacts


@router.post("/contacts")
def create_contact(contact: dict):

    contact["id"] = len(contacts) + 1

    contacts.append(contact)

    return contact