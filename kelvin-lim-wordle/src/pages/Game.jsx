import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import GameBoard from "../components/GameBoard";
import RestartGameButton from "../components/RestartGameButton";
import Keyboard from "../components/Keyboard";
import { attemptTrackerContext } from "../components/AttemptTrackerProvider";
import { boardContext } from "../components/BoardProvider";
import { gameOverContext } from "../components/GameOverProvider";
import GameOver from "../components/GameOver";


function Game(props) {
  const difficulty = props.difficulty;
  const [currentAttempt, setCurrentAttempt] = useContext(attemptTrackerContext)
  const [gameBoard, setGameBoard] = useContext(boardContext);
  const [gameOver, setGameOver] = useContext(gameOverContext);

  // function onSelectLetter(key) {
  //   const newBoard= [...board];
  //   newBoard[currentAttempt.attempt][currentAttempt.letterPos] = key;
  //   setBoard(newBoard);
  //   setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1});
  //   console.log(board);
  // }

  // function onDelete() {
  //   if (currentAttempt.letterPos === 0) return;
  //   const newBoard= [...board];
  //   newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
  //   setBoard(newBoard);
  //   setCurrentAttempt({...currentAttempt, letterPos:currentAttempt.letterPos - 1});
  // }

  // function onEnter() {
  //   if (currentAttempt.letterPos !== board[0].length) return;
  //   setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPos: 0});
  // }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <GameBoard difficulty={difficulty} />
      </div>
      <div>
        {gameOver.gameOver ? <GameOver/> : <Keyboard difficulty={difficulty}/>}
      </div>
      <div>
        <RestartGameButton difficulty={difficulty} type={"button"+ difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}/>
      </div>
    </div>
  );
}

export default Game;
