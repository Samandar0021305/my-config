import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from "axios";

const ConfigApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});


ConfigApi.interceptors.request.use(
  async (config: any) => {
    const access = localStorage.getItem('access');
    if (access) {
      config.headers = {
        Authorization: `Bearer ${access}`,
      };
    }
    return config;
  }
);

ConfigApi.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    const status = error.response?.status;
    if (status) {
      handleErrorResponse(status);
    }
    return Promise.reject(error);
  }
);

function handleErrorResponse(status: number): void {
  // Bu funksiya xatolikni qanday ishlab chiqishni o'z ichiga oladi
  console.error(`Xato: ${status}`);
}

export default ConfigApi;
