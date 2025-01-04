import axios from "axios";

const http = axios.create({
  baseURL: "https://wineme-api.vercel.app/api/wines",
  headers: {
    "Content-type": "application/json",
  },
});

// Interceptor para agregar el token a cada solicitud
http.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    else{
      console.log("no token en interceptor")
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default http;