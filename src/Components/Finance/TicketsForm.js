import React from 'react'
import DropImg from './DropImg'

import { Link } from "react-router-dom"

const TicketsForm = () => {
    const handleImageUpload = (file: File) => {
        // Handle the file upload here, for example, send it to a server or update state
        console.log('Uploaded file:', file);
    }
  return (
    <div className='container w-80 md:w-auto mx-auto'>
          <div>
            <span className='flex flex-col space-y-1 mt-6 mb-5'>
                <p className='text-black text-xl font-semibold'>Create your Tickets</p>
                <p>Upload your tickets, this would be minted as NFT to your guests wallets</p>
            </span>
            <div>
                <label htmlFor="photo">Upload Photo</label>
                <DropImg onImageUpload={handleImageUpload} />
            </div>
              <div className='flex flex-col space-y-2 mt-5'>
                  <h4 className='font-bold'>Select the Ticket Type</h4>
                  <p>Upload your tickets, this would be minted as NFT to your guests wallets</p>
                  <select className='rounded w-full p-4 indent-2 border outline-none border-[#020000]' name="ticketType" id="ticketType">
                      <option value="paid">Paid</option>
                  </select>
              </div>
              <div className='flex flex-col space-y-2 mt-5'>
                  <h4 className='font-bold'>Ticket Price</h4>
                  <p>Please input the ticket price value in Venom Token</p>
                  <div className='flex flex-row space-x-2 mt-5'>
                      <input type="text" className='rounded w-full p-4 indent-2 border outline-none border-[#020000]' name="ticketPrice" id="ticketPrice" />
                      <h4 className='font-bold p-4'>$VENOM</h4>
                  </div>
              </div>
            <div className='w-full flex flex-col justify-between items-center my-10'>
                <Link className='font-medium hover:cursor-pointer hover:font-bold rounded-[30px] bg-[#F5167E] font-light text-[#fff] px-10 py-2 text-[16px]'>Publish</Link>
              </div>
              
        </div>
    </div>
  )
}

export default TicketsForm