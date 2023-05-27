import React from 'react'
import img1 from "../../assets/pablita-693.svg"
import img2 from "../../assets/pablita-251 1.svg"
import img3 from "../../assets/pablita-woman-10 1.svg"
import img4 from "../../assets/pablita-673 1.svg"

const ImgContainer = () => {
  return (
    <div className='overflow-x-hidden w-full flex gap-10 align-bottom'>
        <img src={img1} alt={img1} />
        <img src={img2} alt={img2} />
        <img src={img3} alt={img3} />
        <img src={img4} alt={img4} />
        <img src={img1} alt={img1} />
        <img src={img2} alt={img2} />
        <img src={img3} alt={img3} />
        <img src={img4} alt={img4} />
        <img src={img1} alt={img1} />
        <img src={img2} alt={img2} />
        <img src={img3} alt={img3} />
        <img src={img4} alt={img4} />
        <img src={img1} alt={img1} />
        <img src={img2} alt={img2} />
        <img src={img3} alt={img3} />
        <img src={img4} alt={img4} />
        
    </div>
  )
}

export default ImgContainer