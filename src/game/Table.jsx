import React from 'react';
import './Table.css'; 
import Card from './Card';
import { useEffect, createContext, useState } from 'react';

export const GameContext = createContext(0);


function Table1() {

    const [countCards, setCountCards] = useState(0);

    const cards =[
        {id : 1, imgSrc: '/assets/SVG-cards-1.3/7_of_spades.svg'},
        {id : 2, imgSrc: '/assets/SVG-cards-1.3/10_of_hearts.svg'}

    ]

  return (
    <div className="table1">
      <img src='/assets/poker-assets/tablero.svg' className="table-img" alt="table"/>
      <div className="table1 player-row">
        {cards.map(card=> (
                <Card key={card.id} imgSrc={card.imgSrc} id={card.id}/>
            ))}
      </div>
    </div>
  );
}

function Table2() {

  const [countCards, setCountCards] = useState(0);

  const cards =[
      {id : 1, imgSrc: '/assets/SVG-cards-1.3/2_of_clubs.svg'},
      {id : 2, imgSrc: '/assets/SVG-cards-1.3/10_of_diamonds.svg'},
      {id : 3, imgSrc: '/assets/SVG-cards-1.3/6_of_spades.svg'},
      {id : 4, imgSrc: '/assets/SVG-cards-1.3/backcard.svg'},
      {id : 5, imgSrc: '/assets/SVG-cards-1.3/backcard.svg'}
  ]

return (
  <div className="table2">
    <img src='/assets/poker-assets/tablero.svg' className="table-img" alt="table"/>
    <div className="table2-row">
      {cards.map(card=> (
              <Card key={card.id} imgSrc={card.imgSrc} id={card.id} />
          ))}
    </div>
    <div className = "table2 player-row">
      <img src='/assets/SVG-cards-1.3/7_of_spades.svg' className="card"/>
      <img src='/assets/SVG-cards-1.3/10_of_hearts.svg' className="card"/>
    </div>
  </div>
);
}

function Table3() {

  const [countCards, setCountCards] = useState(0);


  const cards =[
      {id : 1, imgSrc: '/assets/SVG-cards-1.3/10_of_spades.svg'},
      {id : 2, imgSrc: '/assets/SVG-cards-1.3/backcard.svg'},
  ]

return (
  <div className="table2">
    <img src='/assets/poker-assets/tablero.svg' className="table-img" alt="table"/>
    <div className="table2-row">
      <img src='/assets/SVG-cards-1.3/2_of_clubs.svg' className="card"/>
      <img src='/assets/SVG-cards-1.3/10_of_diamonds.svg' className="card"/>
      <img src='/assets/SVG-cards-1.3/6_of_spades.svg' className="card"/>
      {cards.map(card=> (
              <Card key={card.id} imgSrc={card.imgSrc} id={card.id} />
          ))}
    </div>
    <div className = "table1-row">
      <img src='/assets/SVG-cards-1.3/7_of_spades.svg' className="card"/>
      <img src='/assets/SVG-cards-1.3/10_of_hearts.svg' className="card"/>
    </div>
  </div>
);
}

function Table4() {

  const [countCards, setCountCards] = useState(0);


  const cards =[
      {id : 1, imgSrc: '/assets/SVG-cards-1.3/king_of_spades.svg'},
  ]

return (
  <div className="table2">
    <img src='/assets/poker-assets/tablero.svg' className="table-img" alt="table"/>
    <div className="table2-row">
      <img src='/assets/SVG-cards-1.3/2_of_clubs.svg' className="card"/>
      <img src='/assets/SVG-cards-1.3/10_of_diamonds.svg' className="card"/>
      <img src='/assets/SVG-cards-1.3/6_of_spades.svg' className="card"/>
      <img src='/assets/SVG-cards-1.3/10_of_spades.svg' className="card"/>
      {cards.map(card=> (
              <Card key={card.id} imgSrc={card.imgSrc} id={card.id} />
          ))}
    </div>
    <div className = "table1-row">
      <img src='/assets/SVG-cards-1.3/7_of_spades.svg' className="card"/>
      <img src='/assets/SVG-cards-1.3/10_of_hearts.svg' className="card"/>
    </div>
  </div>
);
}

export {Table2, Table1, Table3, Table4};