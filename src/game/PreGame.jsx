import React, { useState } from "react";
import Navbar from "../common/Navbar";
import "./PreGame.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_URL from "../config";

export default function PreGame() {
  const [gameId, setGameId] = useState("");
  const [joinGame, setJoinGame] = useState(false);
  const navigate = useNavigate();

  async function handleCreateGame() {
    if (localStorage.getItem("user_id")) {
        try {
            console.log("Entramos a crear game")
            const response = await axios.post(`${API_URL}/game/create/${localStorage.getItem("user_id")}`, {
            });

            const { gameId } = response.data;
      
            // Store the JWT in local storage
            localStorage.setItem("gameId", gameId);
            localStorage.setItem("isHost", true);
            
            // Move to the game page
            navigate("/Game");
          } catch (error) {
            console.log(error.message);
          }
    console.log("Create Game");
  }
}

  async function handleJoinGame() {
    if (gameId) {
        try {
            const response = await axios.post(`${API_URL}/game/join/${localStorage.getItem("user_id")}/${gameId}`, {
              userId: localStorage.getItem("user_id"),
            });
            const { token } = response.data; // No se porque guardamos este

      
            // Store the JWT in local storage
            localStorage.setItem("jwt", token);
            localStorage.setItem("gameId", gameId);
            localStorage.setItem("isHost", false);
            
            navigate("/Game");
          } catch (error) {
            console.log(error.message);
          }
      console.log(`Join Game with ID: ${gameId}`);
    } else {
      console.log("Please enter a valid game ID");
    }
  }

  return (
    <>
      <Navbar />
      <div className="pre-game-container">
        <h2>Create or Join a Game</h2>
        <div className="game-options">
          <button className="create-game-btn" onClick={handleCreateGame}>
            Create Game
          </button>
          <div className="join-game-container">
            <button className="join-game-btn" onClick={() => setJoinGame(!joinGame)}>
              {joinGame ? "Cancel" : "Join Game"}
            </button>
            {joinGame && (
              <>
                <input
                  type="text"
                  placeholder="Enter Game ID"
                  value={gameId}
                  onChange={(e) => setGameId(e.target.value)}
                />
                <button className="submit-btn" onClick={handleJoinGame}>
                  Join
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
