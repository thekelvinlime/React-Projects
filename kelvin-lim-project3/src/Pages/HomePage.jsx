import Navbar from "../Components/Navbar";
import Feed from "../Components/UserFeed";
import { Axios } from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

export default function HomePage() {

  return (
    <div>
      <Navbar class="NotLoggedIn"/>
      <StatusUpdate/>
      <Feed/>
    </div>
  )
}