import React from "react";

const OverflowBg = () => {
  return (
    <div className="grid grid-flow-col gap-40 px-[48px] py-[30px] text-[#fff] align-middle rounded-2xl bg-[#242565] lg:h-[140px] md:h-[120px] sm:h-[100px] w-[70%] self-center absolute bottom-[-10%] shadow-[0px_10px_rgba(61, 55, 241, 0.25)] ">
      <div className="flex flex-col gap-y-[11px]">
        <p>Search Event</p>
        <div className="border-b-[1px] border-[#7778B0] pb-1">
          <h4 className="font-bold">Event Name</h4>
        </div>
      </div>
      <div className="flex flex-col gap-y-[11px]">
        <p>Place</p>
        <div className="border-b-[1px] border-[#7778B0] pb-1">
          <h4 className="font-bold">Location</h4>
        </div>
      </div>
      <div className="flex flex-col gap-y-[11px]">
        <p>Time</p>
        <div className="border-b-[1px] border-[#7778B0] pb-1">
          <h4 className="font-bold"> Any date</h4>
        </div>
      </div>
    </div>
  );
};

export default OverflowBg;
