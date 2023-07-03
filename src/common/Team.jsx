import React from "react"
import Navbar from "./Navbar"
import "./Team.css"

export default function Team(){
    return(
        <>
            <Navbar/>
            <div>
            <h2>Conoce a nuestro equipo:</h2>
            <div className="person-wrapper">
                <div className="person-card">
                    <img src='../public/assets/logo-zehnder.jpeg' alt="foto_perfil"/>
                <h3>Tomas Zehnder Novoa</h3>
                    <p>Estudiante de Ingenieria Industrial en Computacion, disfruta de los deportes y los jugegos, de ahi su motivacion por crear una pagina unica de holdem texas.</p>
                </div>
                <div className="person-card">
                    <img src='../public/assets/logo-juanjo.png' alt="foto_perfil"/>
                    <h3>Juan Jose Uriarte</h3>
                    <p>Estudiante de Ingenieria Industrial en Computacion, 
                        disfruta de juegos como el rugby. Y es originario de rancagua.
                        De ahi nace el famoso IRC, club de rugby originario de rancagua.</p>
                </div>
            </div>
            </div>
            </>
    )
}