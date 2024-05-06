import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/admin/Header/Navbar';
import Login from './components/admin/Login/Login';
import { Dashboard } from './components/admin/Dashboard/Dashboard';
import Election from './components/admin/Dashboard/Election';
import Party from './components/admin/Dashboard/Party';
import PartyConnection from './components/admin/Dashboard/PartyConnection';
import User from './components/admin/Dashboard/User';




function App() {

  const role = 'admin'

  if (role === 'admin') {

  }
  return (
    <>
      <div>
        {/* <Login /> */}
        {/* <Navbar />
        <Election />
        <Party/>
        <PartyConnection/>
        <User/> */} *
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Dashboard" exact element={<Dashboard />} />
              <Route path="/Election" exact element={<Election />} />
              <Route path="/Party" exact element={<Party />} />
              <Route path="/Partyconnection" exact element={<PartyConnection />} />
              <Route path="/User" exact element={<User />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;





