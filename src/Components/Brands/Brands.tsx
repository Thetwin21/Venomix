import React from "react";
import BrandLogo from "./BrandLogo";

const Brands = () => {
  return (
    <div className="w-full my-[172px] px-[100px] lg:px-[120px] sm:px-[60px] flex flex-col align-middle justify-center ">
      <div className="w-full flex flex-col justify-center align-middle text-center gap-y-[24px]">
        <h2 className="font-bold lg:text-[40px] text-[#242565]">
          Join these brands
        </h2>
        <p className="text-[16px] lg:text-[18px] text-[#6A6A6A] text-center">
          We've had the pleasure of working with industry-defining brands. These
          are just some of them.
        </p>
      </div>
      <BrandLogo />
    </div>
  );
};

export default Brands;
