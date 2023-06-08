import React from 'react'
import Navbar from "../Navcontents/Navbar.js";
import FooterContainer from "../Footer/FooterContainer";
import DashboardNav from "..//Dashboard/DashboardNav.js"
import TicketsForm from "./TicketsForm.js"

const Tickets = () => {
  return (
      <div>
          <Navbar />
          <div className="container mx-auto mt-10">
              <h1 className='text-black text-2xl font-semibold text-center'>Your Event</h1>
          </div>
          <div className="flex md:flex-row flex-col justify-between md:space-x-32 space-x-0 items-center mt-10">
              <DashboardNav />
              <TicketsForm />
              <p></p>
          </div>
          <br />
          <FooterContainer />
    </div>
  )
}

export default Tickets