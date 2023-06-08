import React from 'react'
import { Link } from "react-router-dom"

const BaicInfoForm = () => {
  return (
    <div className='container w-80 md:w-auto mx-auto'>
          <div className='mb-[20px]'>
            <span className='flex flex-col space-y-1 mt-6'>
                <p className='text-black text-xl font-semibold'>Basic Info</p>
                <p>Name your event and tell event-goers why they should come. Add details that highlight <br /> what makes it unique.</p>
            </span>
            <div className='flex flex-col space-y-2 mt-5'>
                <h4 className='font-bold'>Event Title</h4>
                <input type="text" className='rounded w-full p-4 indent-2 border outline-none border-[#020000]' name="eventTitle" placeholder='Enter a clear and descriptive Title for the Event' id="eventTitle" />
              </div>
              <div className='flex flex-col space-y-2 mt-5'>
                <h4 className='font-bold'>Enter Venue</h4>
                <input type="text" className='rounded w-full p-4 indent-2 border outline-none border-[#020000]' name="eventVenue" placeholder='Search for a venue or address' id="eventVenue" />
              </div>
              <div className='flex flex-col space-y-2 mt-5'>
                  <h4 className='font-bold'>Date and Time</h4>
                  <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                  <div className='flex flex-row space-x-2 mt-5'>
                      <input type="date" className='rounded w-full p-4 indent-2 border outline-none border-[#020000]' name="eventDate" id="eventDate" />
                      <input type="time" className='rounded w-full p-4 indent-2 border outline-none border-[#020000]' name="eventTime" id="eventTime" />
                  </div>
                
            </div>
            <div className='w-full flex items-center justify-end my-5'>
                <Link to="/details" className='font-medium hover:cursor-pointer hover:font-bold rounded-[30px] bg-[#F5167E] font-light text-[#fff] px-10 py-2 text-[16px]'>Save and Continue</Link>
              </div>
              
        </div>
    </div>
  )
}

export default BaicInfoForm