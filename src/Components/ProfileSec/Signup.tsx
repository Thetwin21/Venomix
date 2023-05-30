import React from 'react'
import DropImg from './DropImg'

const Signup = () => {
  return (
    <div>
        <h3 className='text-[30px] text-[#100C0C] font-semibold'>About</h3>
        <div>
            <label htmlFor="photo">Upload Photo</label>
            <DropImg />
        </div>
    </div>
  )
}

export default Signup