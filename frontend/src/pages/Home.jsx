import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { Phone } from "lucide-react";


function Home() {

    return (

        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "30px"
            }}
        >

            <motion.div

                animate={{
                    y: [0, -15, 0]
                }}

                transition={{
                    duration: 3,
                    repeat: Infinity
                }}

                style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    background: "#1d4ed8",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 0 40px #2563eb"
                }}
            >

                <Phone size={90} />

            </motion.div>

            <div
                style={{
                    textAlign: "center"
                }}
            >

                <h1
                    style={{
                        fontSize: "52px",
                        marginBottom: "15px"
                    }}
                >
                    Smart Contact Manager
                </h1>

                <p
                    style={{
                        color: "#94a3b8",
                        fontSize: "20px"
                    }}
                >
                    Organize seus contatos de forma inteligente
                </p>

            </div>

            <div
                style={{
                    display: "flex",
                    gap: "20px"
                }}
            >

                <Link to="/login">

                    <button
                        style={{
                            padding: "14px 30px",
                            border: "none",
                            borderRadius: "12px",
                            background: "#2563eb",
                            color: "white",
                            fontSize: "18px"
                        }}
                    >
                        Login
                    </button>

                </Link>

                <Link to="/register">

                    <button
                        style={{
                            padding: "14px 30px",
                            borderRadius: "12px",
                            border: "1px solid #2563eb",
                            background: "transparent",
                            color: "white",
                            fontSize: "18px"
                        }}
                    >
                        Cadastro
                    </button>

                </Link>

            </div>

        </div>
    );
}

export default Home;