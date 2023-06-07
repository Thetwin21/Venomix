import React from 'react'
import Navbar from "../Navcontents/Navbar.js";
import DashboardNav from "./DashboardNav.js"
import DashboardPanel from "./DashboardPanel.js"
import FooterContainer from "../Footer/FooterContainer";

const Dashboard = () => {
  return (
    <div>
          <Navbar />
          <div className="container mx-auto mt-10">
              <h1 className='text-black text-2xl font-semibold text-center'>Explore your Venomix Dashboard</h1>
          </div>
          <div className="flex md:flex-row flex-col justify-between md:space-x-32 space-x-0 items-center mt-10">
              <DashboardNav />
              <DashboardPanel />
              <p></p>
          </div>
          <br />
          <FooterContainer />
    </div>
  )
}

export default Dashboard