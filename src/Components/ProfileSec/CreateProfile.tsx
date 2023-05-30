import React from "react";
import Navbar from "../Navcontents/Navbar";
import Signup from "./Signup";
import FooterContainer from "../Footer/FooterContainer";

const CreateProfile = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full px-11">
        <div className="w-full h-72 flex justify-center text-center items-center">
          <h2 className="font-bold text-[50px] text-[#100C0C] ">
            Create your Venomix Host Identity
          </h2>
        </div>
        <Signup />
      </div>
      <FooterContainer />
    </div>
  );
};

export default CreateProfile;
