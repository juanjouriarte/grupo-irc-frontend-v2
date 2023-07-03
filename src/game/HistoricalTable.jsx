import React from 'react';
import './HistoricalTable.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL  from '../config';

const HistoricalTable = () => {
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    axios.get(`${API_URL}/game/tables/show`)
    .then(response => {
      setGames(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);


  return (
    <div className='info-table'>
      <table className='table-historica'>
        <thead>
          <tr className='column-names'>
            <th>Id Game</th>
            <th>Cantidad Jugadores</th>
            <th>Etapa</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody className='data-tables'>
          {games.map(game => (
            <tr key={game.gameId}>
              <td>{game.gameId}</td>
              <td>{game.cantJugadores}</td>
              <td>{"En Espera"}</td>
              {/* <td><button className='btn btn-primary'>Unirse</button></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricalTable;