import React, { useState } from 'react';
import axios from 'axios';

const CreateVote = () => {
  const [voterId, setVoterId] = useState('');
  const [partyId, setPartyId] = useState('');

  const handleCreateVote = async () => {
    try {
      const response = await axios.post('http://13.127.211.205:8000/v1/vote/create', {
        voter_id: voterId,
        party_id: partyId
      });
      console.log(response.data);
      // Do something with the response if needed
    } catch (error) {
      console.error('Error creating vote:', error);
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

      <h2 class="election">Create Vote</h2>
      <input
        type="text"
        placeholder="Enter voter ID"
        value={voterId}
        onChange={(e) => setVoterId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter party ID"
        value={partyId}
        onChange={(e) => setPartyId(e.target.value)}
      /><br/>
      <button class="btn" onClick={handleCreateVote}>Create Vote</button>
    </div>
  );
};

export default CreateVote;
