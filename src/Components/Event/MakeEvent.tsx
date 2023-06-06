import React from 'react'
import img1 from '../../assets/image 3.svg'

const MakeEvent = () => {
  return (
    <div className='w-full grid grid-cols-2 bg-[#EEE1FF] min-h-[252px] lg:px-[100px] max-h-[252px]'>
        <div className='align-bottom self-end h-full w-full overflow-visible relative '>
            <img className='absolute bottom-0 self-center' src={img1} alt="" />
        </div>
        <div className='w-full h-full flex flex-col align-middle justify-center'>
            <h2 className='text-[#000000] font-bold text-[30px] lg:text-[34px]'>Make your own Event</h2>
            <p className='text-[16px] lg:text-[18px] lg:max-w-[60%] mb-[21px]'>Create your web3 event on a secured decentralised platform</p>
            <div className=''>
                <button className='rounded-[50px] text-[16px] font-bold text-[#ffffff] px-[45px] py-3 self-center cursor-pointer bg-[#F5167E]'>Create Events</button>
            </div>
        </div>
        
    </div>
  )
}

export default MakeEvent