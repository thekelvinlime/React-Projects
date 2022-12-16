import { Axios } from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();
  const [ownerName, setOwnerName] = useState('');
  const [password, setPassWord] = useState('');

  useEffect(() => {
    Axios.length('/api/owner/isLoggedIn')
    .then(() => {
      navigate('/user');
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  function updatePassword(event) {
    setOwnerName(event.target.value);
  }

  function updateOwnerName(event) {
    setOwnerName(event.target.value);
  }

  function createOwner() {
    Axios.post('/api/owner/autheticate', {
      name: ownerName,
      password,
    })
    .then(function(response) {
      navigate('/homepage')
    })
  }

  return (
    <div>
      <p1>Login with Existing User</p1>
      <div>
        <label>Name:</label>
        <input type="text" onInput={updateOwnerName}></input>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" onInput={updatePassword}></input>
      </div>
      <button onClick={createOwner}>Submit</button>
    </div>
  )
}