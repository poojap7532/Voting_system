import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

const CreateParty = () => {


  
  const [partyName, setPartyName] = useState('');

  const handleCreateParty = async () => {
    try {
      const response = await axios.post('http://13.127.211.205:8000/v1/party/create_party', {
        name: partyName
      });
      console.log(response.data);
      // Do something with the response if needed
    } catch (error) {
      console.error('Error creating party:', error);
    }
  };

  return (
    <div>

      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <form class="d-flex">
            <button class="btn btn-outline-success" type="submit">Add</button>
          </form>
        </div>
      </nav>


      <h2 class="election">Create Party</h2>
      <input
        type="text"
        placeholder="Enter party name"
        value={partyName}
        onChange={(e) => setPartyName(e.target.value)}
      /><br/><br/>
      <input type='text' placeholder="Enter short code"/><br/>
      <button  class="btn"onClick={handleCreateParty}>Create Party</button>
    </div>
  );
};

export default CreateParty;
