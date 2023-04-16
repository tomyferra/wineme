import axios from "axios";

export default axios.create({
  baseURL: "https://wineme-api.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});