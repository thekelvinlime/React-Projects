import React, { useContext } from "react";
import { gameOverContext } from "./GameOverProvider";
import { gameContext } from "./GameProvider";
import "../css/GameOver.css";

export default function GameOver() {
  const [gameOver, setGameOver] = useContext(gameOverContext);
  const [globalWord, setGlobalWord] = useContext(gameContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You correctly guessed the word!"
          : "Unfortunately, you did not guess the correct word..."}
      </h3>
      <h2>Correct Word: {globalWord}</h2>
    </div>
  );
}
