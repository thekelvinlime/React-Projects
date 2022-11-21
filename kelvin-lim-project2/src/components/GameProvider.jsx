import React, { createContext, useState } from "react";

export const gameContext = createContext();

export default function GameProvider(props) {
  const [globalWord, setGlobalWord] = useState("");

  return (
    <gameContext.Provider value={[globalWord, setGlobalWord]}>
      {props.children}
    </gameContext.Provider>
  );
}
