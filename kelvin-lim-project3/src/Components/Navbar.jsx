import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { appContext } from "../AppProvider";
// A Navbar is a header that contains a link to the homepage
// LoggedIn version has:
//  - button with username that redirects to user settings page
//  - button to create a new entry
//  - button to log out
// Default version has:
//  - link to login or signup

export default function Navbar() {
  const [logInStatus, setLogInStatus] = useContext(appContext);
  if (logInStatus) {
    return (
      <nav className="nav">
        <NavLink to="/" className="title">Twitter Clone</NavLink>
        <ul>
          <li>
            <NavLink to="/owner">User</NavLink>
          </li>
          <li>
            <NavLink to="/homepage">Logout</NavLink>
          </li>
        </ul>
      </nav>
      )
  }
  return (
    <nav className="nav">
      <NavLink to="/" className="title">Twitter Clone</NavLink>
      <ul>
        <li>
          <NavLink to="/homepage">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login/Signup</NavLink>
        </li>
      </ul>
    </nav>
    )
}