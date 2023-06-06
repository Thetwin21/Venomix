import React from 'react'
import Main from './Main'
import Navbar from '../Navcontents/Navbar.js'

const Maincontainer = () => {
  return (
    <div className='w-full bg-[#fff]'>
        <Navbar />
        <Main />
    </div>
  )
}

export default Maincontainer