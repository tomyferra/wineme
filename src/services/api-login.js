import axios from "axios";

// Leer variables de entorno
const loginUrl = process.env.REACT_APP_API_LOGIN_URL;

async function login(email, password) {
  try {
    const response = await axios.post(loginUrl, { email, password });
    const token = response.data.token;
    sessionStorage.setItem("token", token); // Guardar el token en sessionStorage

    return true; // Login exitoso
  } catch (error) {
    console.error("Error en el login:", error);
    return false; // Login fallido
  }
}

export default login;