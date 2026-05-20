import axios from "axios";

const apiPort = "3000"

const localAPI = `http://localhost:${apiPort}/produtos`

export async function getProdutos() { 
    const response = await axios.get(localAPI);
    return response.data;
}
const externalAPI = null

const api = axios.create({
    baseURL: localAPI
})
export default api