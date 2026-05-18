import { useEffect, useState } from "react";

import api from "../api/api";

import ContactList from "../components/ContactList";

import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

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

    async function logout(){

        localStorage.removeItem("token");
        toast.success("Logout realizado");
        navigate("/login");
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


            <button
                onClick={logout}
                style={{
                padding:"12px 20px",
                border:"none",
                borderRadius:"12px",
                background:"#dc2626",
                color:"white",
                cursor:"pointer"
            }}>Sair</button> 
    
        </div>

        
    );
}

export default Dashboard;