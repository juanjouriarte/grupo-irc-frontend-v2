import React from 'react';
import './Player.css'; 
import Card from './Card';
import { useEffect, createContext, useState } from 'react';



export default function Player({id, username, avatarImgSrc, money, cards ,bet}) {


    return (
        <>
        <div className="player-card-row">
          {cards.map((card, index)=> (
                    <Card key={index} imgSrc={`/assets/SVG-cards-1.3/${card}`} id={index}/>
                ))}
        </div>
        <div className="player-avatar">
          <div className='player-avatar player-name'>
            <p>{username}</p>
          </div>
          <img src={avatarImgSrc} className="player-avatar-img" alt='player avatar image'/>
        </div>
        <div className="player-stats">
          <div className='player-stats player-money'>
            <img src='/assets/poker-assets/chip.svg' className="chip-img" alt='chip'/>
            <p>${money}</p>
          </div>
          <div className='player-stats player-bet'>
            <img src='/assets/poker-assets/bet.svg' className="bet-img" alt='bet chips'/>
            <p>Bet: ${bet}</p>
          </div>
        </div>
        </>
)};