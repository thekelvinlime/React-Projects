import React, { useContext, useState } from "react";
import { gameContext } from "./GameProvider";
import { boardContext } from "./BoardProvider";
import "../css/GameBoard.css"
import HardBoard from "./HardBoard";
import NormalBoard from "./NormalBoard"
import { hardBoardDefault, normalBoardDefault } from "./Words";

export default function GameBoard(props) {
  const [globalWord, setGlobalWord] = useContext(gameContext);
  const [board, setBoard] = useContext(boardContext);
  const difficulty = props.difficulty;

  console.log(difficulty);
  console.log(globalWord);
  if (difficulty === "hard") {
    setBoard(hardBoardDefault);
    return (
      <HardBoard />
    );
  }

  if (difficulty === "normal") {
    return (
      <NormalBoard />
    );
  }
}
