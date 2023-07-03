import './Card.css'
import React, {createContext, useState, useEffect} from 'react';
import { GameContext } from './Table';

export default function Card({id, imgSrc}) {
    const defaultCard = '../public/assets/SVG-cards-1.3/backcard.svg'
    const [showImage, setShowImage] = useState(true);
  
    useEffect(() => {
      setShowImage(true);
    }, [id]);
    
  
    return (
      <div className="card">
        <img src={showImage ? imgSrc : defaultCard} className="img" alt="card"/>
      </div>
    )
}

  