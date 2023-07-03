import {PokerTable} from "./PokerTable"
import './Game.css'
import Navbar from "../common/Navbar"
import { useState, useEffect } from "react"
import theGambler from  '../../public/assets/music/Dreams -The Cooltrane Quartet.mp3'
import { FaPlay, FaPause } from 'react-icons/fa';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { useRef } from 'react';
import axios from "axios";
import API_URL from "../config"

export default function Game() {
    const [value,onChange]=useState(1);
    const [started, setStarted] = useState(false);
    const [stage , setStage] = useState('preflop');
    const [playerTurn, setPlayerTurn] = useState(0);
    const [minBet, setMinBet] = useState(0);
    const [maxBet, setMaxBet] = useState(600)
    const [winners, setWinners] = useState([])
    const [winnersChips, setWinnersChips] = useState(0)

    const isHost = localStorage.getItem('isHost');
    const gameId = localStorage.getItem('gameId');
    const userId = localStorage.getItem('user_id');

    const pollingInterval = 1000;

    // Make polling of the player turn
    useEffect(() => {
        const interval = setInterval(() => {
            if (gameId && userId) {
                axios.get(`${API_URL}/game/turn/${userId}/${gameId}`)
                .then(response => {
                    setPlayerTurn(response.data.User.id);
                    setMinBet(response.data.maxBet);
                    if (response.data.chips < 600) {
                        setMaxBet(response.data.chips);
                    } else {
                        setMaxBet(600);
                    }
                    setWinners(response.data.winners);
                    setWinnersChips(response.data.winnersChips);
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }, pollingInterval);
        return () => clearInterval(interval);
    }, []);

    useEffect(()=>{
        const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(value / 4)}px`;
      }
    })
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleTogglePlay = () => {
        const audioElement = audioRef.current;
        if (isPlaying) {
            audioElement.pause();
            }
        else {
            audioElement.play();
            }
        setIsPlaying(!isPlaying);
    };

    async function sendStarted() {
        try {
            const response = await axios.post(`${API_URL}/game/start/${localStorage.getItem("user_id")}/${localStorage.getItem("gameId")}`, {
            });
            const { token } = response.data; // No se porque guardamos este
            setStarted(true);
        } catch (error) {
            console.log("No ha podido empezar")
        }
    }

    async function sendFold() {
        try {
            const response = await axios.post(`${API_URL}/game/retire/${localStorage.getItem("user_id")}/${localStorage.getItem("gameId")}`, {
            });
            if (response.data.winnerUser) {
                setWinners(response.data.winnerUser);
            }
            const { token } = response.data; // No se porque guardamos este
        } catch (error) {
            console.log("No ha podido retirarse")
        }
    }

    async function sendCheck() {
        try {
            const response = await axios.post(`${API_URL}/game/bet/${localStorage.getItem("user_id")}/${localStorage.getItem("gameId")}/0/bet`, {
            });
            if (response.data.winnerUser) {
                setWinners(response.data.winnerUser);
            }
            const { token } = response.data; // No se porque guardamos este
        } catch (error) {
            console.log("No ha podido hacer check")
        }
    }

    async function sendCall(value) {
        try {
            const response = await axios.post(`${API_URL}/game/bet/${localStorage.getItem("user_id")}/${localStorage.getItem("gameId")}/${value}/call`, {
            });
            const { token } = response.data; // No se porque guardamos este
            if (response.data.winnerUser) {
                setWinners(response.data.winnerUser);
            }
        } catch (error) {
            console.log("No ha podido hacer call")
        }
    }

    async function sendBet(value) {
        try {
            const response = await axios.post(`${API_URL}/game/bet/${localStorage.getItem("user_id")}/${localStorage.getItem("gameId")}/${value}/bet`, {
            });
            const { token } = response.data; // No se porque guardamos este
            if (response.data.winnerUser) {
                setWinners(response.data.winnerUser);
            }
        } catch (error) {
            console.log("No ha podido hacer bet")
        }
    }

    axios.get(`${API_URL}/game/table/${localStorage.getItem("gameId")}`)
    .then((response) => {
        setStage(response.data.stage);
    })
    .catch((error) => {
        console.log(error);
    });



    return (
        <>
        <Navbar/>
        <div className="game-box">
            <h2>Game Session: Nº {`${gameId}`}</h2>
            <div className="game-box winner-data">
                <p>Winner</p>
                {winners.map((winner) => {
                    return (
                        <div className="winner">
                            <p>{winner.name}</p>
                            <p>Fichas Ganadas: {winnersChips}</p>
                        </div>
                    )
                })}
            </div>
            <div className="game box start-box">
                {isHost === 'true' && !started && stage === 'start' && <button className="start-button" onClick={sendStarted}>Start</button>}
            </div>
            <PokerTable />
            <div className="game-buttons">
                {playerTurn == userId && stage !== 'start' && <button className="game-button" onClick={sendFold}>Fold</button>}
                {playerTurn == userId && stage !== 'start' && <button className="game-button" onClick={sendCheck}>Check</button>}
                {playerTurn == userId && stage !== 'start' && <button className="game-button" onClick={() => sendCall(minBet)}>Call</button>}
                {playerTurn == userId && stage !== 'start' && <button className="game-button" onClick={() => sendBet(value)}>Bet</button>}
            </div>
            <div className="slider-parent">
                {playerTurn == userId && stage !== 'start' && <input type="range" min={minBet} max={maxBet} value={value} onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                    }}
                    />}
                {playerTurn == userId && stage !== 'start' && <div className="slider-parent buble">
                    {value}
                </div>}
            </div>
            <div className="game-box-turn">
                {playerTurn == userId && stage !== 'start' && <p>Tu turno</p>}
                {playerTurn != userId && stage !== 'start' && <p>Esperando a otros jugadores</p>}
                {stage === 'start' && <p>Esperando a que empiece la partida</p>}
            </div>
            <div className="game-box music-player">
                <button className="play-button" onClick={handleTogglePlay}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <audio ref={audioRef} controls src={theGambler} autoPlay={isPlaying} loop={isPlaying} />
            </div>
            {/* <div className="shop-box">
                <button className="shop-button"><AiOutlineShoppingCart/></button>
            </div> */}
            {/* <div className="shop-container">
                <div className="shop-item">
                    <img src="src/assets/avatars/default.jpeg" alt="item"/>
                    <p>Item 1</p>
                    <p>Price: 100</p>
                    <button className="shop-button">Buy</button>
                </div>
            </div> */}
        </div>
        </>
    )
}
