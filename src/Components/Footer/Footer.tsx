import React from "react";

const Footer = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-5 md:gap-6 justify-between mb-[69px]">
      <div className="">
        <p className="text-[#F3F3F3] text-[14px] font-light">
          Venomix is a global self-service ticketing platform for live
          experiences that allows anyone to create, share, find and attend
          events that fuel their passions and enrich their lives.
        </p>
      </div>
      <div className="flex gap-4 justify-around align-middle mt-2">
        <div className="flex flex-col gap-[24px]">
          <h4 className="text-[16px] lg:text-[18px] text-[#fff] font-semibold">
            Plan Events
          </h4>
          <ul className="text-[#F3F3F3] text-[14px]">
            <li>
              <a href="">Create and Set Up</a>
            </li>
            <li>
              <a href="">Sell Tickets</a>
            </li>
            <li>
              <a href="">Online RSVP </a>
            </li>
            <li>
              <a href="">Online Events</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[24px]">
          <h4 className="text-[16px] lg:text-[18px] text-[#fff] font-semibold">
            Venomix
          </h4>
          <ul className="text-[#F3F3F3] text-[14px]">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-[18px] text-[#fff] ">Stay in the loop</h2>
        <p className="text-[#F3F3F3] text-[14px] mt-[20px] font-light">
          Join our mailing list to stay in the loop with our newest for Event
          and concert
        </p>
        <div className="max-w-[362px] mt-[24px]">
          <div className="rounded-[50px] bg-[#fff] flex justify-between py-1 px-1.5 overflow-hidden">
            <label htmlFor="email">
              <input
                className="border-none outline-none indent-4 h-full w-fit text-[13px] "
                type="email"
                placeholder="Enter your email address.."
              />
            </label>
            <button className="rounded-[50px] text-[#fff] border-none bg-[#F5167E] p-3">
              Subscibe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
