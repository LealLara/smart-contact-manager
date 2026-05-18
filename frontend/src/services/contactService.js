import api from "../api/api";

export const getContacts = async () => {

    const response = await api.get("/contacts");

    return response.data;
};