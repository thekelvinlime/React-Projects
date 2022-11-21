import React, { useContext } from "react";
import '../css/Key.css'
import { boardContext } from "./BoardProvider";
import { attemptTrackerContext } from "./AttemptTrackerProvider";
import { gameContext } from "./GameProvider";
import { gameOverContext } from "./GameOverProvider";

export default function Key(props) {
  const key = props.value;
  const difficulty = props.difficulty;
  const bigKey = props.bigKey;

  const [board, setBoard] = useContext(boardContext);
  const [globalWord, setGlobalWord] = useContext(gameContext);
  const [currentAttempt, setCurrentAttempt] = useContext(attemptTrackerContext);
  const [gameOver, setGameOver] = useContext(gameOverContext);
  let charLimit = 0;
  let maxAttempts = 0;
  if (difficulty === 'normal') {
    charLimit = 6;
    maxAttempts = 6;
  } else if (difficulty === 'hard') {
    charLimit = 7;
    maxAttempts = 5;
  }

  function selectLetter() {
    console.log(board);
    console.log(charLimit);
    console.log(currentAttempt);
    if (key === "ENTER") {
      if (currentAttempt.letterPos < charLimit) {
        alert("Word is too short!")
        return;
      }
      let currentWord = "";
      for (let i = 0; i < charLimit; i++) {
        currentWord += board[currentAttempt.attempt][i];
      }
      setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPos: 0});
      if (currentWord === globalWord) {
        setGameOver({gameOver: true, guessedWord: true});
        return;
      }
      if (currentAttempt.attempt >= maxAttempts-1) {
        setGameOver({gameOver: true, guessedWord: false})
        return;
      }
    } else if (key === "DELETE") {
      if (currentAttempt.letterPos === 0) return;
      const newBoard= [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
      setBoard(newBoard);
      setCurrentAttempt({...currentAttempt, letterPos:currentAttempt.letterPos - 1});
    } else {
      if(currentAttempt.letterPos > charLimit-1) return;
      const newBoard= [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPos] = key;
      setBoard(newBoard);
      setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1});
    }
  }

  return (
    <span className={"key" + difficulty} id={bigKey && "big"} onClick={selectLetter}>{key}</span>
    //<span className={"key" + difficulty} id={bigKey && "big"}>{key}</span>
  )
}