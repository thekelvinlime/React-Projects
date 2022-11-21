import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import StartGameButton from "../components/StartGameButton";
import "../css/Home.css";

function Home() {
  return (
    <div className='home'>
      <div>
        <Navbar />
      </div>
      <div>
        <h1>Select your Game Mode</h1>
      </div>
      <div className="grid">
        <StartGameButton difficulty="normal" type="buttonNormal" />
        <StartGameButton difficulty="hard" type="buttonHard" />
      </div>
    </div>
  );
}

export default Home;
