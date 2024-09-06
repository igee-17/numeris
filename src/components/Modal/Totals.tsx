import React from "react";

const Totals = () => {
  return (
    <div className="w-full flex lg:pl-[175px] justify-end  items-end ">
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 w-full">
        <div className="flex items-center justify-between">
          <p className="text-[#b7bdcf] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] uppercase">
            Subtotal
          </p>
          <p className="text-right text-[#373a47] text-sm md:text-base lg:text-xl font-normal font-['Neue Haas Grotesk Text Pro'] tracking-wide">
            $6,697,200.00
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#b7bdcf] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] uppercase">
            Discount (2.5%)
          </p>
          <p className="text-right text-[#373a47] text-xs md:text-base lg:text-xl font-normal font-['Neue Haas Grotesk Text Pro'] tracking-wide">
            $167,430.00
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="h-10 md:h-[68px]  flex items-center text-[#373a47] text-base md:text-lg font-medium font-['Neue Haas Grotesk Text Pro'] uppercase leading-normal">
            Total amount due
          </p>
          <p className="h-10 md:h-[68px]  text-right flex items-center text-[#373a47] text-[17px] md:text-[25px] font-bold font-['Neue Haas Grotesk Text Pro'] tracking-wide leading-normal">
            $6,529,770.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Totals;
