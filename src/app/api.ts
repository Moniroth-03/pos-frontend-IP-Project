import env from "@/environments/environment";
import axios from "axios";

const axiosPrivate = axios.create({
    baseURL: env.api_url,
    headers:{'Content-Type':'application/json'},
    withCredentials: true
});

export default axiosPrivate;