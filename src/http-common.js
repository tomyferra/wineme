import axios from "axios";

export default axios.create({
  baseURL: "http://wineme-api.onrender.com/api/wines",
  headers: {
    "Content-type": "application/json"
  }
});