import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const loclocApi = axios.create({
    baseURL: API_BASE_URL,
});

export const getPlaces = async (size = 100) => {
    const response = await loclocApi.get(import.meta.env.VITE_DB_URL, {
        params: {
            size,
        },
    });

    return response.data;
};
