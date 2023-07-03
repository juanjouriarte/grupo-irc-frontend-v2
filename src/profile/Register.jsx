import { useState } from "react"
import Navbar from "../common/Navbar"

export default function UserWelcome() {

  const [nombre, setNombre] = useState(null);

  function handleChange(nombre) {
    setNombre(nombre);
  }

  return (
    <>
    <Navbar/>
      <h2>Ingresa tu nombre de usuario</h2>
      <input
        onChange={e => handleChange(e.target.value)}
      />
      <p>Bienveni@, { nombre }!</p>
      <h2>Ingresa tu clave</h2>
      <input type="password"/>
      <h2>Ingresa tu mail</h2>
      <input/>
      <h2>Ingresa tu fecha de nacimiento</h2>
      <input type='date'/>
    </>
  )
}
