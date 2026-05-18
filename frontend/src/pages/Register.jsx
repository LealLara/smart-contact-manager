import { useState } from "react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";


function Register() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    async function handleRegister() {

        try {

            await registerUser({
                username,
                email,
                password
            });

            alert("Conta criada!");

            navigate("/login");

        } catch (error) {

            alert("Erro ao cadastrar");
        }
    }

    return (

        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <motion.div

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                style={{
                    background: "#111827",
                    padding: "40px",
                    borderRadius: "24px",
                    width: "420px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}
            >

                <h1>Cadastro</h1>

                <input
                    placeholder="Usuário"
                    style={inputStyle}
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />

                <input
                    placeholder="Email"
                    style={inputStyle}
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Senha"
                    style={inputStyle}
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <button
                    style={buttonStyle}
                    onClick={handleRegister}
                >
                    Criar Conta
                </button>

            </motion.div>

        </div>
    );
}

const inputStyle = {
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "#1f2937",
    color: "white"
};

const buttonStyle = {
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    background: "#2563eb",
    color: "white"
};

export default Register;