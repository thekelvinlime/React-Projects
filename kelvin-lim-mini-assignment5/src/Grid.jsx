import React, { useState } from "react";
import CellButton from "./CellButton";
import Result from "./Result";
import "./Grid.css";

export default function Grid() {
  const [cellState1, setCellState1] = useState("white");
  const [cellState2, setCellState2] = useState("white");
  const [cellState3, setCellState3] = useState("white");
  const [cellState4, setCellState4] = useState("white");

  const [count, setCount] = useState(0);
  // const[gridState1, setGridState1] = useState('white');
  // const[gridState2, setGridState2] = useState('white');
  // const[gridState3, setGridState3] = useState('white');
  // const[gridState4, setGridState4] = useState('white');

  function onClickChangeColor1() {
    if (cellState1 === "white") {
      setCellState1("black");
      setCount(count + 1);
    } else if (cellState1 === "black") {
      setCellState1("white");
      setCount(count - 1);
    }
  }

  function onClickChangeColor2() {
    if (cellState2 === "white") {
      setCellState2("black");
      setCount(count + 1);
    } else if (cellState2 === "black") {
      setCellState2("white");
      setCount(count - 1);
    }
  }

  function onClickChangeColor3() {
    if (cellState3 === "white") {
      setCellState3("black");
      setCount(count + 1);
    } else if (cellState3 === "black") {
      setCellState3("white");
      setCount(count - 1);
    }
  }

  function onClickChangeColor4() {
    if (cellState4 === "white") {
      setCellState4("black");
      setCount(count + 1);
    } else if (cellState4 === "black") {
      setCellState4("white");
      setCount(count - 1);
    }
  }

  return (
    <div>
      <div>
        Count: <Result count={count} />
      </div>
      <div className="grid">
        <div>
          <CellButton color={cellState1} onClickFunc={onClickChangeColor1} />
        </div>
        <div>
          <CellButton color={cellState2} onClickFunc={onClickChangeColor2} />
        </div>
        <div>
          <CellButton color={cellState3} onClickFunc={onClickChangeColor3} />
        </div>
        <div>
          <CellButton color={cellState4} onClickFunc={onClickChangeColor4} />
        </div>
      </div>
    </div>
  );
}
