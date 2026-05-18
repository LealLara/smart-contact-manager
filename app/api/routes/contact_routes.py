from fastapi import APIRouter

router = APIRouter()


@router.get("/contacts")
def get_contacts():

    return [
        {
            "id": 1,
            "name": "teste",
            "email": "teste@email.com"
        }
    ]