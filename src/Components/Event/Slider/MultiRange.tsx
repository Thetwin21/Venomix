import React, { useCallback, useEffect, useRef, useState } from "react";
// type rangeNum = {
//   min: number,
//   max: number,
//   onChange: any
// }

const MultiRangeSlider = () => {
//   const min = prop.min
// const max = prop.max
//   const [minVal, setMinVal] = useState(min);
//   const [maxVal, setMaxVal] = useState(max);
//   const minValRef: React.MutableRefObject<any> = useRef();
//   const maxValRef: React.MutableRefObject<any> = useRef();
//   const rangeValRef:  React.MutableRefObject<any> = useRef();
// getting percentage value of the range price values

// const getPercent = useCallback(
//   (value: number) => Math.random(((value - min) / (max - min)) * 100),
//   [min ,max]
// )
  // setting range width to decrease from the right
//   useEffect(() => {
//     if(maxValRef.current){
//       const minPercent = getPercent(minVal)
//       const maxPercent = getPercent(+maxValRef.current.value)

//       if(rangeValRef.current){
//         rangeValRef.current.style.left = `${minPercent}`
//         rangeValRef.current.style.width = `${maxPercent - minPercent}%`
//       }
//     }
//   }, [minVal, getPercent])

  // setting range width to increase from the left
//   useEffect(() => {
//     if(minValRef.current){
//       const maxPercent = getPercent(maxVal)
//       const minPercent = getPercent(+minValRef.current.value)

//       if(rangeValRef.current){
//         // rangeValRef.current.style.left = `${maxPercent}`
//         rangeValRef.current.style.width = `${maxPercent - minPercent}%`
//       }
//     }
//   }, [minVal, getPercent])
  


//  get min and max value 
// useEffect(() => {
//   prop.onChange({min: maxVal, max: maxVal})

// }, [minVal, maxVal])



  return (
    <div className="flex ">
       {/* <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(e) => {
          const value = Math.min(+e.target.value, maxVal - 1)
          setMinVal(value)
          e.target.value = value.toString()
        }}
        className="thumb z-[3]"
        name=""
        id=""
      /> */}
      {/* <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(e) => {
          const value = Math.max(+e.target.value, minVal - 1)
          setMinVal(value)
          e.target.value = value.toString()
        }}
        className="thumb z-[4]"
        name=""
        id=""
      /> */}
      {/* <div className="relative w-52"> */}
        {/* <div className="absolute h-2 rounded w-full bg-[#505050] z-[1]" /> */}
        {/* range value */}
        {/* <div ref={rangeValRef} className="absolute h-2 rounded bg-[#505050]" /> */}
        {/* <div className="absolute left-2 text-xs mt-4">{minVal}</div> */}
        {/* <div className="absolute right-2 text-xs mt-4">{maxVal}</div> */}
      {/* </div> */}
    </div>
  );
};

export default MultiRangeSlider;
