import { createContext, useState } from "react";

export const appContext = createContext();

export default function AppProvider(props) {
  const [logInStatus, setLogInStatus] = useState(false);

  
  return (
    <appContext.Provider value={{logInStatus, setLogInStatus}}>
      {props.children}
    </appContext.Provider>
  )
}