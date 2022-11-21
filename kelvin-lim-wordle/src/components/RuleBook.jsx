import React from "react";
import "../css/RuleBook.css";

export default function RuleBook() {
  return (
    <div>
      <h1>Rules and How to Play:</h1>
      <ul className="list">
        <li>Pick a game mode</li>
        <li>
          Normal Mode creates a word that is 6 letters long, and you must guess
          the word in 6 attempts.
        </li>
        <li>
          Hard Mode creates a word that is 7 letters long, and you must guess
          the word in only 5 attempts.
        </li>
        <li>Use the keyboard to type a word</li>
        <li>Press 'ENTER' to submit an attempt</li>
        <li>You can only submit attempts that have the correct word length.</li>
        <li>Press 'DELETE' to remove an letters on your current attempt</li>
      </ul>

      <div className="board">
        <h2>Examples:</h2>
        <div className="row">
          <div className="letter" id="correct">
            L
          </div>
          <div className="letter">E</div>
          <div className="letter">T</div>
          <div className="letter">T</div>
          <div className="letter">E</div>
          <div className="letter">R</div>
        </div>
        "L" is in the word and in the correct spot
        <div className="row">
          <div className="letter">F</div>
          <div className="letter" id="almost">
            L
          </div>
          <div className="letter">O</div>
          <div className="letter">W</div>
          <div className="letter">E</div>
          <div className="letter">R</div>
        </div>
        "L" is in the word but in the wrong spot
        <div className="row">
          <div className="letter">B</div>
          <div className="letter">U</div>
          <div className="letter" id="error">
            R
          </div>
          <div className="letter">G</div>
          <div className="letter">E</div>
          <div className="letter">R</div>
        </div>
        "R" is not in the word in any spot Have fun!
      </div>
    </div>
  );
}
