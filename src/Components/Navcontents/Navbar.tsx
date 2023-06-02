import React from "react";
import logo from "../../assets/Venomix2 1.svg";

const Navbar = () => {
  return (
    <nav className="relative container flex flex-row justify-between items-center mx-auto p-6">
      <img src={logo} alt={logo} width={150} height={150} className="lg:hidden block" />
      <img src={logo} alt={logo} className="lg:block hidden"/>
      <div className="flex flex-row justify-between items-center space-x-6">
        <a
              className="text-sm cursor-pointer hover:text-[#242565] hover:font-semibold"
              href="/create-profile"
            >
              Create Events
        </a>
        <a
              className="text-sm cursor-pointer hover:text-[#242565] hover:font-semibold"
              href="#"
            >
              Your Tickets
        </a>
        <a
              className="text-sm cursor-pointer hover:text-[#242565] hover:font-semibold"
              href="#"
            >
              Contacts
            </a>
      </div>
    </nav>
  );
};

export default Navbar;
