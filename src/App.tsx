import React from 'react';
import './App.css';
import LandingPg from './Components/LandingPg';
import {Routes, Route} from "react-router-dom"
import CreateProfile from './Components/ProfileSec/CreateProfile';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="w-full overflow-hidden">
      
      <Routes>
        <Route path='/' element={<LandingPg />} />
        <Route path='/create-profile' element={<CreateProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
     
    </div>
  );
}

export default App;
