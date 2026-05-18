import ContactCard from "./ContactCard";

function ContactList({ contacts }) {

    if (!contacts.length) {

        return (

            <div
                style={{

                    opacity:0.7
                }}
            >
                Nenhum contato encontrado
            </div>
        );
    }

    return (

        <div
            style={{

                display:"grid",

                gridTemplateColumns:
                "repeat(auto-fill,minmax(300px,1fr))",

                gap:"20px"
            }}
        >

            {contacts.map((contact)=>(

                <ContactCard
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </div>
    );
}

export default ContactList;