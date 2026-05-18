from fastapi_mail import ConnectionConfig

conf = ConnectionConfig(

    MAIL_USERNAME="SEU_EMAIL",

    MAIL_PASSWORD="SUA_SENHA_APP",

    MAIL_FROM="SEU_EMAIL",

    MAIL_PORT=587,

    MAIL_SERVER="smtp.gmail.com",

    MAIL_STARTTLS=True,

    MAIL_SSL_TLS=False,

    USE_CREDENTIALS=True
)