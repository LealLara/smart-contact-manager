import api from "../api/api";


export async function loginUser(data) {

    const response = await api.post(
        "/login",
        data
    );

    return response.data;
}


export async function registerUser(data) {

    const response = await api.post(
        "/register",
        data
    );

    return response.data;
}