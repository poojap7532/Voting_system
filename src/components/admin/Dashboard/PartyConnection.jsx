import React, { useState } from 'react';
import axios from 'axios';

const CreatePartyList = () => {
  const [partyListName, setPartyListName] = useState('');

  const handleCreatePartyList = async () => {
    try {
      const response = await axios.post('http://13.127.211.205:8000/v1/partylist/create', {
        name: partyListName
      });
      console.log(response.data);
      // Do something with the response if needed
    } catch (error) {
      console.error('Error creating party list:', error);
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


      <h2 class="election">Create PartyConnection List</h2>
      <input
        type="text"
        placeholder="Enter party list name"
        value={partyListName}
        onChange={(e) => setPartyListName(e.target.value)}
      /><br/>
      <button class="btn" onClick={handleCreatePartyList}>Create PartyConnection List</button>
    </div>
  );
};

export default CreatePartyList;
