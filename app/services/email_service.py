from fastapi_mail import FastMail
from fastapi_mail import MessageSchema

from app.core.email_config import conf


async def send_welcome_email(email: str):

    message = MessageSchema(

        subject="Bem-vindo ao Smart Contact Manager",

        recipients=[email],

        body="""
Conta criada com sucesso!
Bem-vindo ao Smart Contact Manager.
""",

        subtype="plain"
    )

    fm = FastMail(conf)

    await fm.send_message(message)