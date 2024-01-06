import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_KEY,
    timeout: 5000,
});
axiosInstance.interceptors.request.use(
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

export default axiosInstance;
