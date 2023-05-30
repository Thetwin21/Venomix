import React from 'react'
import img1 from '../../assets/depositphotos_239668562-stock-illustration-foliage-your-brand-logo-vector 1.svg'
const numofImg = [1,2,3,4,5,6,7,8,9,10,11,12]
const BrandLogo = () => {
  return (
    <div className='self-center w-full flex flex-row-7 flex-wrap  lg:max-w-[900px] mt-16 gap-7 gap-y-4 justify-center align-middle'>
      {numofImg.map(img => (
        <div key={img} className='w-24 h-16'>
          <img src={img1} alt={img1} className='object-cover w-full h-full' />

        </div>

      ))}
        
    </div>
  )
}

export default BrandLogo