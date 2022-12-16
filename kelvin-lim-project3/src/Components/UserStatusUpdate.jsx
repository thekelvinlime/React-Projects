// a UserStatusUpdate is a unique field that can only be seen and accessed
// if a user is logged in. It is a dynamic field that be modified by the user
// to create a new post/status update for that user only. Other users' updates
// cannot be modified
import React, { useEffect, useState } from "react";
import Axios from 'axios';

export default function StatusUpdate() {
  const params = useParams();
  const [username, setUsername] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [textContent, setTextContent] = useState('');

  useEffect(function() {
    let statusUpdate = params.statusUpdate;
    Axios.get('http://localhost:8000/api/pokemon/' + pokemonId)
      .then(function(response) {
        const statusUpdate = response.data;
        const username = statusUpdate.username;
        const timestamp = statusUpdate.username;
        const textContent = statusUpdate.statusUpdate;
        setUsername(username);
        setTimestamp(timestamp);
        setTextContent(textContent);
      })
  }, [])
  
  return (
    <div>
      
    </div>
  )
}