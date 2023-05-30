import React from 'react';
import './App.css';
import LandingPg from './Components/LandingPg';
import {Routes, Route} from "react-router-dom"
import CreateProfile from './Components/ProfileSec/CreateProfile';

function App() {
  return (
    <div className="">
      
      <Routes>
        <Route path='/' element={<LandingPg />} />
        <Route path='/create-profile' element={<CreateProfile />} />

      </Routes>
     
    </div>
  );
}

export default App;
