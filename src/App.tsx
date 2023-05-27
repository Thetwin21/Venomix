import React from 'react';
import './App.css';
import EventContainer from './Components/Event/EventContainer';
import Mmaincontainer from './Components/Main/Maincontainer';
import MakeEvent from './Components/Event/MakeEvent';
import Brands from './Components/Brands/Brands';
import FooterContainer from './Components/Footer/FooterContainer';

function App() {
  return (
    <div className="bg-[#e2e0ff44] w-full overflow-hidden">
      <Mmaincontainer />
      <EventContainer />
      <MakeEvent />
      <Brands />
      <FooterContainer />
    </div>
  );
}

export default App;
