import React, { useContext } from "react";
import LetterBox from "./LetterBox";
import "../css/GameBoard.css"
import { boardContext } from "./BoardProvider";

export default function NormalBoard() {
  const [board, setBoard] = useContext(boardContext);
  console.log(board)
  return (
    <div className="board">
        <div className="row">
          <LetterBox index={0} attempt={0} board={board}/>
          <LetterBox index={1} attempt={0} board={board}/>
          <LetterBox index={2} attempt={0} board={board}/>
          <LetterBox index={3} attempt={0} board={board}/>
          <LetterBox index={4} attempt={0} board={board}/>
          <LetterBox index={5} attempt={0} board={board}/>
        </div>
        <div className="row">
          <LetterBox index={0} attempt={1} board={board}/>
          <LetterBox index={1} attempt={1} board={board}/>
          <LetterBox index={2} attempt={1} board={board}/>
          <LetterBox index={3} attempt={1} board={board}/>
          <LetterBox index={4} attempt={1} board={board}/>
          <LetterBox index={5} attempt={1} board={board}/>
        </div>
        <div className="row">
          <LetterBox index={0} attempt={2} board={board} />
          <LetterBox index={1} attempt={2} board={board} />
          <LetterBox index={2} attempt={2} board={board} />
          <LetterBox index={3} attempt={2} board={board} />
          <LetterBox index={4} attempt={2} board={board} />
          <LetterBox index={5} attempt={2} board={board} />
        </div>
        <div className="row">
          <LetterBox index={0} attempt={3} board={board} />
          <LetterBox index={1} attempt={3} board={board} />
          <LetterBox index={2} attempt={3} board={board} />
          <LetterBox index={3} attempt={3} board={board} />
          <LetterBox index={4} attempt={3} board={board} />
          <LetterBox index={5} attempt={3} board={board} />
        </div>
        <div className="row">
          <LetterBox index={0} attempt={4} board={board} />
          <LetterBox index={1} attempt={4} board={board} />
          <LetterBox index={2} attempt={4} board={board} />
          <LetterBox index={3} attempt={4} board={board} />
          <LetterBox index={4} attempt={4} board={board} />
          <LetterBox index={5} attempt={4} board={board} />
        </div>
        <div className="row">
          <LetterBox index={0} attempt={5} board={board} />
          <LetterBox index={1} attempt={5} board={board} />
          <LetterBox index={2} attempt={5} board={board} />
          <LetterBox index={3} attempt={5} board={board} />
          <LetterBox index={4} attempt={5} board={board} />
          <LetterBox index={5} attempt={5} board={board} />
        </div>
      </div>
    );
}