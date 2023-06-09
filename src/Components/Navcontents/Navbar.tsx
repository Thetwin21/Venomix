import { Link } from "react-router-dom";
import logo from "../../assets/Venomix2 1.svg";
import ConnectWallet from "../ConnectWallet";
import { VenomConnect } from "venom-connect";


type Props = {
  venomConnect: VenomConnect | undefined;
};

const Navbar = ({venomConnect}: Props) => {

  const login = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };


  const openNav = () => {
    const bars: any = document.querySelector("#bars");
    const close: any = document.querySelector("#close");
    const mobileNav: any = document.querySelector("#mobileNav");
    bars.classList.add("hidden");
    close.classList.remove("hidden");
    mobileNav.classList.remove("hidden");
  };
  const closeNav = () => {
    const bars: any = document.querySelector("#bars");
    const close: any = document.querySelector("#close");
    const mobileNav: any = document.querySelector("#mobileNav");
    bars.classList.remove("hidden");
    close.classList.add("hidden");
    mobileNav.classList.add("hidden");
  };
  return (
    <div className="bg-white px-10 py-3 relative z-20 shadow">
      <div className="flex flex-row justify-between items-center lg:flex">
        <img src={logo} alt="" className="w-auto h-14" />
        <div className="lg:flex hidden flex-row justify-between items-center space-x-10">
  
          <ConnectWallet>    
          <a className="btn hover:cursor-pointer font-medium hover:font-bold" onClick={login}>
            Create Events
        </a></ConnectWallet>
          <Link to="" className="hover:cursor-pointer font-medium hover:font-bold">
            Your Tickets
          </Link>
          <Link to="" className="hover:cursor-pointer font-medium hover:font-bold">
            Contacts
          </Link>
        
        </div>
        <div className="lg:hidden block text-customDarkBlue">
          <i className="la la-bars la-2x" id="bars" onClick={openNav}></i>
          <i
            className="la la-times la-2x hidden"
            id="close"
            onClick={closeNav}
          ></i>
        </div>
      </div>
      <div
        className="flex flex-col justify-between items-start space-y-5 mt-10 hidden"
        id="mobileNav"
      >
            <ConnectWallet>    
          <a className="btn hover:cursor-pointer font-medium hover:font-bold" onClick={login}>
          Create Event
        </a></ConnectWallet>
        <Link to="" className="hover:cursor-pointer font-medium hover:font-bold">
          Your Tickets
        </Link>
        <Link to="" className="hover:cursor-pointer font-medium hover:font-bold">
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
