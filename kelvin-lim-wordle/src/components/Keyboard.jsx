import React, { useCallback, useContext, useEffect, useState } from "react";
import Key from './Key';
import '../css/Keyboard.css'

export default function Keyboard(props) {
  //const [board, setBoard] = useContext(boardContext);
  //const [currentAttempt, setCurrentAttempt] = useContext(atttemptTrackerContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const difficulty = props.difficulty;

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => {
          return <Key value={key} difficulty={difficulty} />;
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <Key value={key} difficulty={difficulty}/>;
        })}
      </div>
      <div className="line3">
      <Key value="ENTER" difficulty={difficulty} bigKey={true}/>
        {keys3.map((key) => {
          return <Key value={key} difficulty={difficulty}/>;
        })}
      <Key value="DELETE" difficulty={difficulty} bigKey={true}/>
      </div>
    </div>
  );
}
