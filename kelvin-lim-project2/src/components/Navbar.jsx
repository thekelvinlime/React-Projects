import React from "react";
import { NavLink } from "react-router-dom";
import '../css/Navbar.css'

export default function Navbar() {
  return (
  <nav className="nav">
    <NavLink to="/" className="title">Kelvin's Wordle!</NavLink>
    <ul>
      <li>
        <NavLink to="/rules">Rules</NavLink>
      </li>
    </ul>
  </nav>
  )
}