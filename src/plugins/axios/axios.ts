import axios from "axios";
import { ErrorStatus } from "@/utils/enums"
const request = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    timeout: 5000,
  });
  
  request.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const status = error.response?.status;
        if (status) {
            handleErrorResponse(status);
        }
        return Promise.reject(error);
    }
);

async function handleErrorResponse(status: ErrorStatus) {
    // bu yer xali to'liq emas
    console.log(status);
    
    // if (status == ErrorStatus.Unauthorized) {
    //     const {data} = await request.get(`/site/token_refresh`);        
    //     localStorage.setItem('token', data?.token);
    // }
}

export default request