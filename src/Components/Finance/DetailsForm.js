import React from 'react'
import DropImg from './DropImg'

import { Link } from "react-router-dom"

const DetailsForm = () => {
    const handleImageUpload = (file: File) => {
        // Handle the file upload here, for example, send it to a server or update state
        console.log('Uploaded file:', file);
    }
  return (
    <div className='container w-80 md:w-auto mx-auto'>
          <div>
            <span className='flex flex-col space-y-1 mt-6 mb-5'>
                <p className='text-black text-xl font-semibold'>Event Media</p>
                <p>Add photos to show what your event will be about. You can upload up to 10 images.</p>
            </span>
            <div>
                <label htmlFor="photo">Upload Photo</label>
                <DropImg onImageUpload={handleImageUpload} />
            </div>
              <div className='flex flex-col space-y-2 mt-5'>
                  <h4 className='font-bold'>Event Summary</h4>
                  <p>Draw attention to your event with a succinct description. This will be visible to attendees at the top of your event page. (Maximum 140 characters)</p>
                <input type="text" className='rounded w-full p-4 indent-2 border outline-none border-[#020000]' name="eventSummary" id="eventSummary" />
              </div>
              <div className='flex flex-col space-y-2 mt-5'>
                  <h4 className='font-bold'>Description</h4>
                  <p>Add more details to your event like your schedule, sponsors, or featured guests.</p>
                <input type="text" className='rounded w-full p-4 indent-2 border outline-none border-[#020000]' name="eventDescription" id="eventDescription" />
              </div>
            <div className='w-full flex items-center justify-end my-5'>
                <Link to="/tickets" className='font-medium hover:cursor-pointer hover:font-bold rounded-[30px] bg-[#F5167E] font-light text-[#fff] px-10 py-2 text-[16px]'>Save and Continue</Link>
              </div>
              
        </div>
    </div>
  )
}

export default DetailsForm