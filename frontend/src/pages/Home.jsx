import { useEffect, useState } from "react";

import { getContacts } from "../services/contactService";


function Home() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {

        loadContacts();

    }, []);


    async function loadContacts() {

        try {

            const data = await getContacts();

            setContacts(data);

        } catch (error) {

            console.log(error);
        }
    }

    return (

        <div>

            <h1>Smart Contact Manager</h1>

            {
                contacts.map(contact => (

                    <div key={contact.id}>

                        <h3>{contact.name}</h3>

                        <p>{contact.email}</p>

                    </div>
                ))
            }

        </div>
    );
}

export default Home;
