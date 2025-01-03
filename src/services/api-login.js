import axios from "axios";

// Leer variables de entorno
const loginUrl = process.env.REACT_APP_API_LOGIN_URL;
const email = process.env.REACT_APP_API_USER_EMAIL;
const password = process.env.REACT_APP_API_USER_PASSWORD;

const login = async () => {
  try {
    const response = await axios.post(
      loginUrl,
      { email: email, password: password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const token = response.data.token;

    // Guardar el token en localStorage
    localStorage.setItem("authToken", token);
    return token;
  } catch (error) {
    console.error("Error al hacer login:", error.message);
    throw error;
  }
};

export default login;