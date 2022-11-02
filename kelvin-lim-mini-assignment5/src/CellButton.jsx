import React from "react";
import './CellButton.css'

export default function CellButton(props) {
  const onClickFunc = props.onClickFunc;
  const color = props.color;

  return (
    <button style={{backgroundColor:color}} onClick={onClickFunc}>
    </button>
  )
}