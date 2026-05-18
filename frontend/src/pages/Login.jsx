import { useState } from "react";

import { motion } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    async function handleLogin() {

        try {

            const response = await loginUser({
                email,
                password
            });

            localStorage.setItem(
                "token",
                response.access_token
            );

            navigate("/dashboard");

        } catch (error) {

            alert("Login inválido");
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
                    width: "400px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}
            >

                <h1>Login</h1>

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
                    onClick={handleLogin}
                >
                    Entrar
                </button>

                <Link to="/register">
                    Criar conta
                </Link>

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

export default Login;