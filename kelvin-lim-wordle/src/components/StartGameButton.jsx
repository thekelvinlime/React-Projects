import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/StartGameButton.css";
import { genWord } from "./SecretWordGenerator";
import { gameContext } from "./GameProvider";

export default function StartGameButton(props) {
  const difficulty = props.difficulty;
  const className = props.type;
  const [globalWord, setGlobalWord] = useContext(gameContext);
  const navigate = useNavigate();
  const onClickFunc = () => navigate("game/" + difficulty, { replace: true });
  return (
    <button
      className={className}
      onClick={() => {
        setGlobalWord(genWord(difficulty));
        onClickFunc();
      }}
    >
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </button>
  );
}
