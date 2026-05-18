import { useEffect, useState } from "react";

import api from "../api/api";

import ContactList from "../components/ContactList";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

function Dashboard() {

    const navigate = useNavigate();

    const [contacts, setContacts] = useState([]);

    const [name, setName] = useState("");

    const [contact, setContact] = useState("");

    const [notes, setNotes] = useState("");

    async function loadContacts() {

        try {

            const response = await api.get("/contacts");

            setContacts(response.data);

        } catch {

            toast.info("Nenhum contato");
        }
    }

    async function createContact() {

        if (!name || !contact) {

            toast.error(
                "Preencha nome e contato"
            );

            return;
        }

        try {

            await api.post("/contacts", {

                name,

                contact,

                notes
            });

            toast.success(
                "Contato criado"
            );

            loadContacts();

            setName("");

            setContact("");

            setNotes("");

        } catch (error) {

            toast.error(
                error.response?.data?.detail ||
                "Erro ao criar contato"
            );
        }
    }

    async function logout() {

        localStorage.removeItem("token");

        toast.success("Até logo!");

        navigate("/login");
    }

    useEffect(() => {

        loadContacts();

    }, []);

    return (

        <div
            style={{

                minHeight:"100vh",

                padding:"40px",

                display:"flex",

                flexDirection:"column",

                gap:"30px"
            }}
        >

            <div
                style={{

                    display:"flex",

                    justifyContent:"space-between",

                    alignItems:"center"
                }}
            >

                <h1
                    style={{

                        fontSize:"42px",

                        fontWeight:"bold",

                        background:
                        "linear-gradient(to right,#60a5fa,#ffffff)",

                        WebkitBackgroundClip:"text",

                        WebkitTextFillColor:"transparent"
                    }}
                >
                    Smart Contact
                </h1>

                <button
                    onClick={logout}
                    style={{

                        padding:"12px 20px",

                        borderRadius:"16px",

                        border:"1px solid rgba(255,255,255,0.1)",

                        background:"rgba(15,23,42,0.6)",

                        color:"white",

                        cursor:"pointer",

                        backdropFilter:"blur(12px)",

                        boxShadow:
                        "0 0 20px rgba(59,130,246,0.15)"
                    }}
                >
                    Logout
                </button>
            </div>

            <div
                style={{

                    display:"flex",

                    flexDirection:"column",

                    gap:"18px",

                    padding:"30px",

                    borderRadius:"28px",

                    background:"rgba(15,23,42,0.55)",

                    backdropFilter:"blur(16px)",

                    border:
                    "1px solid rgba(255,255,255,0.08)",

                    boxShadow:
                    "0 0 40px rgba(59,130,246,0.15)"
                }}
            >

                <input
                    placeholder="Nome"

                    value={name}

                    onChange={(e)=>
                        setName(e.target.value)
                    }

                    style={inputStyle}
                />

                <input
                    placeholder="Contato"

                    value={contact}

                    onChange={(e)=>
                        setContact(e.target.value)
                    }

                    style={inputStyle}
                />

                <textarea
                    placeholder="Observações"

                    value={notes}

                    onChange={(e)=>
                        setNotes(e.target.value)
                    }

                    style={textareaStyle}
                />

                <button
                    onClick={createContact}

                    style={buttonStyle}
                >
                    Criar Contato
                </button>
            </div>

            <ContactList contacts={contacts} />

        </div>
    );
}

const inputStyle = {

    padding:"16px",

    borderRadius:"16px",

    border:"1px solid rgba(255,255,255,0.08)",

    background:"rgba(255,255,255,0.04)",

    color:"white",

    outline:"none",

    fontSize:"15px"
};

const textareaStyle = {

    ...inputStyle,

    minHeight:"120px",

    resize:"none"
};

const buttonStyle = {

    padding:"16px",

    borderRadius:"18px",

    border:"none",

    background:
    "linear-gradient(to right,#2563eb,#3b82f6)",

    color:"white",

    cursor:"pointer",

    fontWeight:"bold",

    fontSize:"15px",

    transition:"0.3s"
};

export default Dashboard;