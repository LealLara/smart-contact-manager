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
                border: "1px solid #1e3a8a",
                backdropFilter:"blur(10px)",
                background:"rgba(17,24,39,0.7)",
                boxShadow:"0 0 20px rgba(37,99,235,0.2)"
            }}
            
        >

            <h2>{contact.name}</h2>

            <p>{contact.email}</p>

            <p>{contact.phone}</p>

        </div>
    );
}

export default ContactCard;