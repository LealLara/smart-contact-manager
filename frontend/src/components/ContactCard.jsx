function ContactCard({ contact }) {

    return (

        <div
            style={{
                background: "#111827",
                padding: "20px",
                borderRadius: "18px",
                width: "300px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                border: "1px solid #1e3a8a"
            }}
        >

            <h2>{contact.name}</h2>

            <p>{contact.email}</p>

            <p>{contact.phone}</p>

        </div>
    );
}

export default ContactCard;