import React, { createContext, useState } from "react";
import { hardBoardDefault, normalBoardDefault } from "./Words";

export const boardContext = createContext();

export default function BoardProvider(props) {

  const [board, setBoard] = useState(normalBoardDefault);

  return (
    <boardContext.Provider value={[board, setBoard]}>
      {props.children}
    </boardContext.Provider>
  )
}