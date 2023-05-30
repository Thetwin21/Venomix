import React from "react";
import EventContainer from "./Event/EventContainer";
import MakeEvent from "./Event/MakeEvent";
import Brands from "./Brands/Brands";
import FooterContainer from "./Footer/FooterContainer";
import Maincontainer from "./Main/Maincontainer";

const LandingPg = () => {
  return (
    <div className="bg-[#e2e0ff44] w-full overflow-hidden">
      <Maincontainer />
      <EventContainer />
      <MakeEvent />
      <Brands />
      <FooterContainer />
    </div>
  );
};

export default LandingPg;
