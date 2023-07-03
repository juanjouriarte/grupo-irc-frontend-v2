import React from 'react';
import './PokerTable.css'; 
import Card from './Card';
import { useEffect, useState } from 'react';
import Player from './Player';
import axios from 'axios';
import API_URL from '../config';


const pollingInterval = 1000;


export function PokerTable() {

    const [players, setPlayers] = useState([]);
    const [cardsShow, setTableCards] = useState(["backcard.svg", "backcard.svg", "backcard.svg", "backcard.svg", "backcard.svg"]);
    const [tableBet, setTableBet] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          const gameId = localStorage.getItem('gameId');
          const userId = localStorage.getItem('user_id');
          if (gameId && userId) {
            axios.get(`${API_URL}/game/show/${userId}/${gameId}`)
            .then(response => {
                setPlayers(response.data.players);
                setTableCards(response.data.cardsShow);
                setTableBet(response.data.table.totalBet);
            })
            .catch(error => {
                console.log(error);
            });
          }
        }, pollingInterval);
        return () => clearInterval(interval);
    }, []);



  return (
    <div className="poker-table">
      <img src='../src/assets/poker-assets/tablero.svg' className="table-img" alt="table"/>
      <div className="poker-table casino-card-row">
        {cardsShow.map((card, index)=> (
            <Card key={index} imgSrc={`../src/assets/SVG-cards-1.3/${card}`} id={index}/>
        ))}
      </div>
      <div className='poker-table money-bag'>
        <img src='../src/assets/poker-assets/money-bag.svg' className="money-bag-img" alt="money-bag"/>
        <p className="money-bag-text">${tableBet}</p>
      </div>
      {players.map((player, index) => (
          <div className={`poker-table p${player.posSession}-wrap`}>
            <Player key={index} id={player.posSession} username={player.username} avatarImgSrc={player.avatar} money={player.chips} cards={player.cards} bet={player.bet}/>
          </div>
      ))}
    </div>
  );
}