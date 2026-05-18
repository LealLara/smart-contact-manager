import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/global.css";

import SpaceParticles from "./components/SpaceParticles";

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <SpaceParticles />

        <div className="space-glow"></div>

        <App />

    </React.StrictMode>
);