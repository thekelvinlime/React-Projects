import React, { useContext } from "react";
import { boardContext } from "./BoardProvider";
import { gameContext } from "./GameProvider";
import { attemptTrackerContext } from "./AttemptTrackerProvider";
import '../css/LetterBox.css'

export default function LetterBox(props) {
  const index = Number(props.index);
  const attempt = Number(props.attempt);
  //const [board, setBoard] = useContext(boardContext);
  const board = props.board;
  const [globalWord, setGlobalWord] = useContext(gameContext);
  const [currentAttempt, setCurrentAttempt] = useContext(attemptTrackerContext);
  const letter = board[attempt][index];

  const correct = globalWord[index] === letter;
  //create a global dictionary to access to see count??????????????
  const almost = !correct && letter !== '' && globalWord.includes(letter);

  const letterState = 
    currentAttempt.attempt > attempt &&
    (correct ? "correct" : almost ? "almost" : "error");

  return (
    <div className="letter" id={letterState}>{letter}</div>
  )
}