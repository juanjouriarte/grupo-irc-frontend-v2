import React from 'react';
import Navbar from './Navbar';
import HistoricalTable from '../game/HistoricalTable';
import './MainPage.css';

export default function MainPage(){
    return(
        <>
            <Navbar/>
            <h1>Holdem-Irc</h1>
            <p className='poker-explanation'>Texas Hold'em es un emocionante juego de cartas que combina la estrategia, 
                la habilidad y la suerte. El objetivo del juego es ganar el bote, que se 
                forma con las apuestas realizadas por los jugadores. El juego comienza con 
                la repartición de dos cartas boca abajo a cada jugador, seguido por una ronda 
                de apuestas. Luego, se revelan tres cartas comunitarias en la mesa, llamadas el 
                flop, seguido por otra ronda de apuestas. A continuación, se revela una cuarta 
                carta comunitaria, llamada el turn, y se lleva a cabo otra ronda de apuestas. 
                Finalmente, se revela la quinta y última carta comunitaria, llamada el river, y 
                se realiza la última ronda de apuestas. El jugador con la mejor mano de cinco cartas, 
                usando cualquier combinación de sus dos cartas privadas y las cinco cartas comunitarias, 
                gana el bote. Con habilidad para la estrategia, la capacidad de leer a tus oponentes y la 
                suerte en las cartas, cualquier jugador puede tener éxito en Texas Hold'em.</p>
            <h2>Partidas para unirse</h2>
            <HistoricalTable/>
        </>
    )
}