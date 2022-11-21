import React, { useCallback, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/StartGameButton.css";
import { genWord } from "./SecretWordGenerator";
import { gameContext } from "./GameProvider";
import { boardContext } from "./BoardProvider";
import { attemptTrackerContext } from "./AttemptTrackerProvider";
import { normalBoardDefault, hardBoardDefault } from "./Words";

export default function RestartGameButton(props) {
  const difficulty = props.difficulty;
  const className = props.type;
  const [globalWord, setGlobalWord] = useContext(gameContext);
  const [board, setBoard] = useContext(boardContext);
  const [currentAttempt, setCurrentAttempt] = useContext(attemptTrackerContext);
  const navigate = useNavigate();
  const onClickFunc = () => {
    if (difficulty === "normal") {
      const newBoard = [
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
      ];
      setBoard(newBoard);
      console.log(board);
    } else if (difficulty === "hard") {
      const newBoard = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
      ];
      setBoard(newBoard);
      console.log(board);
    }
    setCurrentAttempt({attempt: 0, letterPos: 0});
    navigate("", { replace: true });
  }

  return (
    <button
      className={className}
      onClick={() => {
        setGlobalWord(genWord(difficulty));
        onClickFunc();
      }}
    >
      Restart
    </button>
  );
}
