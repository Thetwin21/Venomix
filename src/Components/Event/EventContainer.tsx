import React from "react";
import SearchEvents from "./SearchEvents";
import Upcoming from "./Upcoming";

const EventContainer = () => {
  return (
    <div className="lg:px-[177px] md:px-[150px] sm:px-[50px] mt-48 w-full px-6 ">
      <SearchEvents />
      <Upcoming />
      <div className="w-full flex justify-center align-middle bg-transparent my-[63px]">
        <button className="rounded-[50px] text-[16px] font-bold text-[#3D37F1] border-[#3D37F1] border-[1.5px] border-solid px-[45px] py-3 bg-transparent self-center cursor-pointer">
          Load More
        </button>
      </div>
    </div>
  );
};

export default EventContainer;
