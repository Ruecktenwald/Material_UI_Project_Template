import axios from "axios";

// Use the base URL from the environment variable
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchTableData = (endpoint, params = {}) => {
    return axios.get(`${apiBaseUrl}${endpoint}`, { params });
};
