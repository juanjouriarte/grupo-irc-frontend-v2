import {Table1, Table2, Table3, Table4} from "./Table"
import './Instructions.css'
import Navbar from "../common/Navbar"

export default function Instructions() {
    return (
        <>
        <Navbar/>
        <div className="instruction-box">
            <h2>Instrucciones</h2>
            <Table1/>
            <p>
            Por lo general, el reparto de cartas en Texas Hold'em se realiza en cuatro etapas, lo que da lugar a la formación gradual de la combinación de cinco cartas que se usan para determinar el ganador. Cada etapa del reparto de cartas está diseñada para agregar más emoción y oportunidades de apuestas al juego. A continuación se detallan las cuatro etapas de reparto de cartas en Texas Hold'em.

            La primera etapa de reparto de cartas se llama "Preflop". Durante esta etapa, cada jugador recibe dos cartas boca abajo, conocidas como "cartas de mano". Los jugadores tienen la oportunidad de ver sus cartas y decidir si quieren continuar en la mano o retirarse. Además, los jugadores pueden hacer sus primeras apuestas durante esta etapa.
            </p>
            <Table2/>
            <p>
            La segunda etapa de reparto de cartas se llama "Flop". Durante esta etapa, se reparten tres cartas boca arriba en la mesa, conocidas como "cartas comunitarias". Estas cartas pueden ser utilizadas por cualquier jugador para formar su combinación de cinco cartas. Después del flop, se realiza una ronda de apuestas. 
            </p>
            <Table3/>
            <p>
            La tercera etapa de reparto de cartas se llama "Turn". Durante esta etapa, se reparte una cuarta carta comunitaria boca arriba en la mesa. Los jugadores pueden utilizar esta carta para mejorar su combinación de cinco cartas. Después del turn, se realiza otra ronda de apuestas. 
            </p>
            <Table4/>
            <p>
            La cuarta y última etapa de reparto de cartas se llama "River". Durante esta etapa, se reparte la quinta y última carta comunitaria boca arriba en la mesa. Los jugadores pueden utilizar esta carta para mejorar su combinación de cinco cartas. Después del river, se realiza la última ronda de apuestas.
            </p>
        </div>
        </>
    )
}
