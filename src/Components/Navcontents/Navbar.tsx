import React from "react";
import logo from "../../assets/Venomix2 1.svg";

const Navbar = () => {
  return (
    <nav className="relative container flex items-center justify-between mx-auto p-6">
      <div className="flex items-center justify-center align-middle">
        <img src={logo} alt={logo} />
      </div>
      <div className="flex gap-4">
        <ul className="flex gap-[58px] ">
          <li className=" ">
            <a
              className="text-sm cursor-pointer hover:text-[#242565] hover:font-semibold"
              href="#"
            >
              Create Events
            </a>
          </li>
          <li className="">
            <a
              className="text-sm cursor-pointer hover:text-[#242565] hover:font-semibold"
              href="#"
            >
              Your Tickets
            </a>
          </li>
          <li className="">
            <a
              className="text-sm cursor-pointer hover:text-[#242565] hover:font-semibold"
              href="#"
            >
              Contacts
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
