import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

enum ErrorStatus {
  Unauthorized = 401,
  Forbidden = 403,
  InternalServerError = 500,
}

export const baseURL: string = import.meta.env.VITE_API_URL;



const ConfigApi = axios.create({
  baseURL,
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
