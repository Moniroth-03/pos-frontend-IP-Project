import env from "@/environments/environment";
import axios from "axios";

const getToken = () => {
  const storage = JSON.parse(localStorage.getItem('user')) || null;
  return storage.token;
};

const axiosPrivate = axios.create({
    baseURL: env.api_url,
    headers:{'Content-Type':'application/json'},
    withCredentials: true
});

axiosPrivate.interceptors.request.use(
    (config)=>{
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosPrivate;