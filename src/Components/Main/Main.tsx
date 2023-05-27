import React from "react";
import ImgContainer from "./ImgContainer";
import OverflowBg from "./OverflowBg";

const Main = () => {
  return (
    <div className="w-screen h-full flex flex-col">
      <div className="flex flex-col justify-center align-middle h-96 gap-[9px] align-middle justify-center text-center">
        <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-[#242565] font-bold">
          Exclusive Events , Priceless Moments on Web3
        </h1>
        <h2 className="lg:text-5xl md:text-3xl sm:text-2xl text-[#242565] font-medium font-semibold">
          Built On Venom
        </h2>
      </div>
      <ImgContainer />
      <OverflowBg />
    </div>
  );
};

export default Main;
