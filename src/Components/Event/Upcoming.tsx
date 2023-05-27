import React from "react";
// import img1 from "../../assets/Rectangle 12 (1).svg";
import events from "./Events.json";

const Upcoming = () => {
  return (
    <div className="grid grid-auto-fit-lg gap-[29px] w-full mt-4">
      {events.map((event) => (
        <div className="flex flex-col bg-[#fff] rounded-t-2xl rounded-b-sm shadow-sm overflow-hidden">
          <div className="h-[197.11px] w-full gap-1 overflow-hidden rounded-t-lg">
            <img className="w-full object-fit" src={event.url} alt={event.url} />
          </div>
          <div className="flex px-[22px] py-[19px] gap-2">
            <span className="flex flex-col justify-start leading-6">
              <p className="text-[#3D37F1] font-bold text-[12px]">{event.date.month}</p>
              <h4 className="text-[29px] font-extrabold">{event.date.day}</h4>
            </span>
            <div className="flex-1">
              <p className="font-bold text-[16px] text-[#000000] leading-[24px]">
                {event.title}
              </p>
              <p className="leading-[21px] text-[14px] ">
                {event.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
