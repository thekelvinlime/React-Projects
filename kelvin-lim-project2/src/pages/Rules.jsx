import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import RuleBook from "../components/RuleBook";

function Rules() {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <RuleBook />
      </div>
    </div>
  )
}

export default Rules;