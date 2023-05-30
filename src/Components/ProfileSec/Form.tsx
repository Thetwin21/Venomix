import React from 'react'

const Form = () => {
  return (
    <div className='mb-[20px]'>
        <span className='flex flex-col space-y-1 mt-6'>
            <label htmlFor="name">Organizer Name</label>
            <input className='rounded p-2 indent-2 border border-[#020000] outline-none w-[400px]' type="text" name="" id="name" />
        </span>
        <span className='flex flex-col space-y-1 mt-6'>
            <label htmlFor="website">Website</label>
            <input className='rounded p-2 indent-2 border border-[#020000] outline-none w-[400px]' type="text" name="" id="website" />
        </span>
        <span className='flex flex-col space-y-1 mt-6'>
            <p>Page URL</p>
            <p>Customizing your URL can help attendees find you when searching for your events. The URL can only contain letters, numbers, dashes, and underscores.</p>
            <a href="#" className='text-red-600 font-light'>www.venomix.net/host/12093838478</a>
        </span>
        <span className='flex flex-col space-y-1 mt-6'>
            <label htmlFor="bio">Organizer Bio</label>
            <textarea className='rounded h-[411px] w-[100%] p-4 indent-2 border outline-none border-[#020000]' draggable={false} name="" id="bio" cols={30} rows={10}></textarea>
        </span>
        <div className='flex flex-col space-y-2'>
            <h4>Add Socials</h4>
            <input type="text" className='rounded w-[400px] p-4 indent-2 border outline-none border-[#020000]' name="" placeholder='Twitter' id="twitter" />
            <input type="text" className='rounded w-[400px] p-4 indent-2 border outline-none border-[#020000]' name="" placeholder='Facebook' id="facebook" />
            <input type="text" className='rounded w-[400px] p-4 indent-2 border outline-none border-[#020000]' name="" placeholder='LinkedIn' id="linkedin" />
        </div>
        <div className='w-full flex items-center justify-end my-2'>
            <button className='rounded-[30px] bg-[#F5167E] font-light text-[#fff] px-10 py-2 text-[16px] cursor-pointer'>Save</button>
        </div>
    </div>
  )
}

export default Form