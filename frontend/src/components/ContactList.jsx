import ContactCard from "./ContactCard";


function ContactList({ contacts }) {

    return (

        <div
            style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap"
            }}
        >

            {
                contacts.map(contact => (

                    <ContactCard
                        key={contact.id}
                        contact={contact}
                    />
                ))
            }

        </div>
    );
}

export default ContactList;