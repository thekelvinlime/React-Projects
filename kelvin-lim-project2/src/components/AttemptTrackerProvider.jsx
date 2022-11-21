import React, { createContext, useState } from "react";

export const attemptTrackerContext = createContext();

export default function AttemptTrackerProvider(props) {

  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPos: 0});

  return (
    <attemptTrackerContext.Provider value={[currentAttempt, setCurrentAttempt]}>
      {props.children}
    </attemptTrackerContext.Provider>
  )
}