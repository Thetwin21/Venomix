import React from 'react'

const DashboardPanel = () => {
    return (
        <div>
            <div className='md:w-auto w-80 text-center flex flex-col justify-between mb-10 p-10 space-y-2 items-center rounded-md border-solid border-2 border-inherit'>
                <h1 className='text-black text-2xl font-semibold'>Create a New Event</h1>
                <p>You don't have any events yet. Let's create one!</p>
                <button className='rounded-[30px] bg-[#F5167E] font-light text-[#fff] px-10 py-1 text-[16px] cursor-pointer'>Create</button>
            </div>
            <div className='flex md:flex-row md:space-x-3 space-x-0 md:space-y-0 space-y-3 flex-col justify-between items-center'>
                <div className='md:w-auto w-80 text-center flex flex-col justify-center p-10 space-y-2 items-center rounded-md border-solid border-2 border-inherit'>
                    <h1 className='text-black text-2xl font-semibold'>$0</h1>
                    <p>This is your total revenue generated</p>
                    <button className='rounded-[30px] bg-[#F5167E] font-light text-[#fff] px-10 py-1 text-[16px] cursor-pointer'>Learn More</button>
                </div>
                <div className='md:w-auto w-80 flex flex-col justify-center p-10 space-y-2 items-center rounded-md border-solid border-2 border-inherit'>
                    <h1 className='text-black text-2xl font-semibold'>0.0k</h1>
                    <p>Total guests hosted</p>
                    <button className='rounded-[30px] bg-[#F5167E] font-light text-[#fff] px-10 py-1 text-[16px] cursor-pointer'>Learn More</button>
                </div>
            </div>
        </div>
    
  )
}

export default DashboardPanel