import {
    BrowserRouter,
    Routes,
    Route
}
from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";


import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Profile from "./pages/Profile";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/profile"
                    element={<Profile />}
                />

            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={2500}
                theme="dark"
            />

        </BrowserRouter>
    );
}

export default App;