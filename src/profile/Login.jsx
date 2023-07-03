import React, { useState } from "react";
import Navbar from "../common/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import API_URL from "../config";

export default function UserWelcome() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChangeNombre(event) {
    setNombre(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  async function handleLogin() {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        username: nombre,
        password: password,
      });
      const { access_token, user_id } = response.data;

      // Store the JWT and user ID in local storage
      localStorage.setItem("jwt", access_token);
      localStorage.setItem("user_id", user_id);
      localStorage.setItem("username", nombre);

      navigate("/");
    } catch (error) {
      setError("Usuario o contraseña incorrectos");
    }
  }

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h2>Ingresa tu nombre de usuario</h2>
        <input className="input-field" onChange={handleChangeNombre} value={nombre} />
        <h2>Ingresa tu clave</h2>
        <input className="input-field" type="password" onChange={handleChangePassword} value={password} />
        <button className="login-button" onClick={handleLogin}>Iniciar sesión</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </>
  );
}
