import { useEffect, useState } from "react";

import api from "../api/api";

import ContactList from "../components/ContactList";


function Dashboard() {

    const [contacts, setContacts] = useState([]);

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");


    async function loadContacts() {

        const response = await api.get("/contacts");

        setContacts(response.data);
    }

    async function createContact() {

        await api.post("/contacts", {
            name,
            email
        });

        loadContacts();

        setName("");

        setEmail("");
    }

    useEffect(() => {

        loadContacts();

    }, []);

    return (

        <div
            style={{
                padding: "40px"
            }}
        >

            <h1
                style={{
                    marginBottom: "30px"
                }}
            >
                Seus Contatos
            </h1>

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "30px"
                }}
            >

                <input
                    placeholder="Nome"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <button onClick={createContact}>
                    Criar
                </button>

            </div>

            <ContactList contacts={contacts} />

        </div>
    );
}

export default Dashboard;