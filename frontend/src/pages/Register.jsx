import { motion } from "framer-motion";

import { Link } from "react-router-dom";


function Register() {

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

                initial={{ opacity: 0, scale: 0.9 }}

                animate={{ opacity: 1, scale: 1 }}

                style={{
                    background: "#111827",
                    padding: "40px",
                    borderRadius: "24px",
                    width: "420px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    boxShadow: "0 0 30px rgba(37,99,235,0.3)"
                }}
            >

                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "36px"
                    }}
                >
                    Cadastro
                </h1>

                <input
                    placeholder="Usuário"
                    style={inputStyle}
                />

                <input
                    placeholder="Email"
                    style={inputStyle}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    style={inputStyle}
                />

                <button style={buttonStyle}>
                    Criar Conta
                </button>

                <Link
                    to="/login"
                    style={{
                        textAlign: "center",
                        color: "#60a5fa"
                    }}
                >
                    Já possui conta?
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
    color: "white",
    fontSize: "16px"
};

const buttonStyle = {
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    background: "#2563eb",
    color: "white",
    fontSize: "18px"
};

export default Register;