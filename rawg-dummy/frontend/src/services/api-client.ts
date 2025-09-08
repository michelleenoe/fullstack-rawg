import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: import.meta.env.RAWG_API_KEY,
    },
});
export default apiClient;