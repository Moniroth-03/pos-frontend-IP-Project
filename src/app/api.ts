import env from "@/environments/environment";
import axios from "axios";


const axiosPrivate = axios.create({
    baseURL: env.api_url,
    headers:{'Content-Type':'application/json'},
    withCredentials: true
});

axiosPrivate.interceptors.request.use(
    (config)=>{
        const token = JSON.parse(localStorage.getItem('token'));
        // console.log(token)
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

//handling refresh token
axiosPrivate.interceptors.response.use(res => res, async error => {
    // const ogReq = error.config;
    if ( error.response.status === 401){
        localStorage.removeItem('token');
         // Redirect to login page
        window.location.href = '/login';

    }
    return Promise.reject(error);
})

export default axiosPrivate;