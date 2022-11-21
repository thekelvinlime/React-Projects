import React, { createContext, useState } from "react";

export const gameOverContext = createContext();

export default function GameOverProvider(props) {

  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false});

  return (
    <gameOverContext.Provider value={[gameOver, setGameOver]}>
      {props.children}
    </gameOverContext.Provider>
  )
}