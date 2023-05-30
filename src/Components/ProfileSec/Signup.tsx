import React from 'react'
import DropImg from './DropImg'
import Form from './Form';

const Signup = () => {
    const handleImageUpload = (file: File) => {
        // Handle the file upload here, for example, send it to a server or update state
        console.log('Uploaded file:', file);
      };
  return (
    <div>
        <h3 className='text-[30px] text-[#100C0C] font-semibold'>About</h3>
        <div>
            <label htmlFor="photo">Upload Photo</label>
            <DropImg onImageUpload={handleImageUpload} />
        </div>
        <Form />
    </div>
  )
}

export default Signup