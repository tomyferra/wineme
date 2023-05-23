import axios from "axios";

export default axios.create({
  //baseURL: "https://wineme-api.onrender.com/api/wines",
  baseURL: "https://wineme-api.vercel.app/api/wines",
  headers: {
    "Content-type": "application/json"
  }
});