import React from 'react';
import './App.css';
import LandingPg from './Components/LandingPg';
import {Routes, Route} from "react-router-dom"
import CreateProfile from './Components/ProfileSec/CreateProfile';
import Dashboard from './Components/Dashboard/Dashboard';
import BasicInfo from './Components/Finance/BasicInfo';
import Details from './Components/Finance/Details';
import Tickets from './Components/Finance/Tickets';

function App() {
  return (
    <div className="w-full overflow-hidden">
      
      <Routes>
        <Route path='/' element={<LandingPg />} />
        <Route path='/create-profile' element={<CreateProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/basic-info' element={<BasicInfo />} />
        <Route path='/details' element={<Details />} />
        <Route path='/tickets' element={<Tickets />} />
      </Routes>
     
    </div>
  );
}

export default App;
