function ContactCard({ contact }) {

    return (

        <div
            style={{

                padding:"24px",

                borderRadius:"24px",

                background:"rgba(15,23,42,0.55)",

                backdropFilter:"blur(14px)",

                border:
                "1px solid rgba(255,255,255,0.08)",

                boxShadow:
                "0 0 30px rgba(59,130,246,0.12)",

                display:"flex",

                flexDirection:"column",

                gap:"10px"
            }}
        >

            <h2>{contact.name}</h2>

            <p>{contact.contact}</p>

            {contact.notes && (

                <p
                    style={{
                        opacity:0.7
                    }}
                >
                    {contact.notes}
                </p>
            )}

            <small
                style={{
                    opacity:0.5
                }}
            >
                {new Date(
                    contact.created_at
                ).toLocaleDateString()}
            </small>

        </div>
    );
}

export default ContactCard;