import React from "react";

const OverflowBg = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start space-x-3 px-5 py-[30px] text-[#fff] rounded-2xl bg-[#242565] w-[70%] self-center md:relative absolute md:bottom-40 bottom-32 shadow-[0px_10px_rgba(61, 55, 241, 0.25)] ">
      <div className="flex flex-col">
        <p>Search Event</p>
        <div className="border-b-[1px] border-[#7778B0] pb-1">
          <h4 className="font-bold">Event Name</h4>
        </div>
      </div>
      <br />
      <div className="flex flex-col">
        <p>Place</p>
        <div className="border-b-[1px] border-[#7778B0] pb-1">
          <h4 className="font-bold">Location</h4>
        </div>
      </div>
      <br />
      <div className="flex flex-col">
        <p>Time</p>
        <div className="border-b-[1px] border-[#7778B0] pb-1">
          <h4 className="font-bold"> Any date</h4>
        </div>
      </div>
    </div>
  );
};

export default OverflowBg;
