import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7159/api"
    // Troque pelo endereço da sua API
});

export default api;