import axios from "axios";

const instance = axios.create({
  baseURL: "https://wineme-api.vercel.app/api/wines",
  headers: {
    "Content-type": "application/json",
  },
});

// Interceptor para agregar el token automáticamente
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;