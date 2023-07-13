import { useState } from "react"
import Navbar from "../common/Navbar"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import API_URL from "../config";

export default function UserWelcome() {

  const [nombre, setNombre] = useState(null);
  const [password, setPassword] = useState(null);
  const [mail, setMail] = useState(null);
  const [username, setUsername] = useState(null);
  const [error, setError] = useState(null);


  function handleChangeName(nombre) {
    setNombre(nombre);
  }

  function handleChangePassword(password) {
    setPassword(password);
  }

  function handleChangeMail(mail) {
    setMail(mail);
  }

  function handleChangeUsername(username) {
    setUsername(username);
  }


  async function handleSubmit() {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, {
        name: nombre,
        username: username,
        mail: mail,
        password: password,
      });
      const { access_token, user_id } = response.data;

      // Store the JWT and user ID in local storage
      localStorage.setItem("jwt", access_token);
      localStorage.setItem("user_id", user_id);
      localStorage.setItem("username", username);

      navigate("/");
    } catch (error) {
      setError("Usuario o contraseña incorrectos");
    }
  }
    

  return (
    <>
    <Navbar/>
      <div className="login-container">
        <p>Bienveni@, { username }!</p>
        <h2>Ingresa tu nombre de usuario</h2>
        <input className="input-field"
          onChange={e => handleChangeUsername(e.target.value)}
        />
        <h2>Ingresa tu nombre</h2>
        <input className="input-field"
          onChange={e => handleChangeName(e.target.value)}
        />
        <h2>Ingresa tu clave</h2>
        <input type="password" className="input-field"
          onChange={e => handleChangePassword(e.target.value)}
        />
        <h2>Ingresa tu mail</h2>
        <input className="input-field"
          onChange={e => handleChangeMail(e.target.value)}
        />
        <button className="login-button" onClick={handleSubmit}>Registrarse</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </>
  )
}
