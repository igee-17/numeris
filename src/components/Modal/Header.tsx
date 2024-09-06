import React from "react";

const Header = () => {
  return (
    <div className="flex items-center mb:flex-nowrap flex-wrap  justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-[#1f1f23] text-[10px] text-base mb:text-xl md:text-2xl lg:text-[32px] font-bold font-['Neue Haas Grotesk Text Pro']">
          Invoice - 1023494 - 2304{" "}
          <p className="text-[#697497] text-[10px] md:text-base font-normal font-['Neue Haas Grotesk Text Pro']">
            View the details and activity of this invoice
          </p>
        </h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
        <button className="w-fit lg:w-[260px] h-[40px] md:h-[68px] px-1 py-1 md:py-2 bg-white rounded-[20px] md:rounded-[40px] border border-[#e3e5ef] justify-center items-center gap-2 inline-flex">
          <span className="text-[#003eff] text-[10px] md:text-base font-medium font-['Neue Haas Grotesk Text Pro'] uppercase tracking-tight">
            Download as pdf
          </span>
        </button>
        <button className="lg:w-[230px] h-[40px] md:h-[68px] px-2 md:px-6 lg:px-10 py-2 bg-[#003eff] rounded-[20px] md:rounded-[40px] justify-center items-center gap-2 inline-flex">
          <span className="text-[10px] text-white md:text-base  font-medium font-['Neue Haas Grotesk Text Pro'] uppercase tracking-tight">
            Send invoice
          </span>
        </button>
        <button className="h-[40px] md:h-[68px] px-6 py-2 bg-white rounded-[20px] md:rounded-[40px] border border-[#e3e5ef] justify-center items-center gap-2 inline-flex">
          <span className="text-[#373a47] text-[10px] md:text-base font-medium font-['Neue Haas Grotesk Text Pro'] uppercase leading-none tracking-wide">
            More
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
