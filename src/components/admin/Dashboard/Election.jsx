import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

const CreateElection = () => {

  const [electionName, setElectionName] = useState([]);
  const [electionData, setelectionData] = useState({})

  function handleElection(e) {
    setelectionData({ ...electionData, [e.target.name]: e.target.value })
  }


  const handleCreateElection = async () => {
    try {
      const res = await axios.post('http://13.127.211.205:8000/v1/election/create', electionData);
      // console.log(response.data);
      setElectionName(res.data)

      // Do something with the response if needed
    } catch (error) {
      console.error('Error creating election:', error);
    }
  };

  const handleElectionlist = async () => {
    try {
      const res = await axios.post('http://13.127.211.205:8000/v1/election/create', electionData);
      // console.log(response.data);
      setElectionName(res.data)

      // Do something with the response if needed
    } catch (error) {
      console.error('Error creating election:', error);
    }
  };



  console.log(electionName, "electionName");


  return (
    <div>

      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <form class="d-flex">
            <button class="btn btn-outline-success" type="submit">Add</button>
          </form>
        </div>
      </nav>
      <h2 class="election">Create Election</h2>

      <input name="election_name" type='text' onChange={handleElection} />
      <input type="date" name='date' class="date " onChange={handleElection}></input><br />
      <button class="btn" onClick={handleCreateElection}>Create Election</button>
      
      <h1>{electionData.election_Name}</h1>
    </div>







  );
};

export default CreateElection;
