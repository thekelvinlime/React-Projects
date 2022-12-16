import React, { useEffect, useState } from "react";
import Axios from 'axios';
// A StatusUpdate is clickeable and will redirect to the user's page. 
// It is composed of:
//  - username
//  - timestamp
//  - text content

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