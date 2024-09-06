import Image from "next/image";
import React from "react";

const Reminders = () => {
  return (
    <div className="w-full h-24 mt-8 p-3 md:p-6 rounded-3xl border border-[#e3e5ef] justify-start items-center gap-6 inline-flex">
      <div className="text-[#666f77] text-xs font-normal font-['Neue Haas Grotesk Text Pro'] uppercase leading-none tracking-wide">
        Reminders
      </div>
      <div className="w-full overflow-x-scroll justify-start items-center lg:items-start gap-3 flex">
        <div className="min-w-max px-2 md:px-4 py-1 md:py-3 bg-[#e6fff0] rounded-3xl border justify-start items-center gap-2.5 flex">
          <div className="text-[#373a47] text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro']">
            14 days before due date
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <Image src={"/icons/tick.svg"} width={24} height={24} alt="tick" />
          </div>
        </div>
        <div className="min-w-max px-2 md:px-4 py-1 md:py-3 bg-[#e6fff0] rounded-3xl border justify-start items-center gap-2.5 flex">
          <div className="text-[#373a47] text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro']">
            7 days before due date
          </div>
          <div className="w-6 h-6 justify-center items-center flex">
            <Image src={"/icons/tick.svg"} width={24} height={24} alt="tick" />
          </div>
        </div>
        <div className="min-w-max px-2 py-1 md:p-4 bg-white rounded-3xl border border-[#e3e5ef] justify-start items-center gap-2.5 flex">
          <div className="text-[#373a47] text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro']">
            3 days before due date
          </div>
        </div>
        <div className="min-w-max px-2 py-1 md:p-4 bg-white rounded-3xl border border-[#e3e5ef] justify-start items-center gap-2.5 flex">
          <div className="text-[#373a47] text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro']">
            24 hrs before due date
          </div>
        </div>
        <div className="min-w-max px-2 py-1 md:p-4 bg-white rounded-3xl border border-[#e3e5ef] justify-start items-center gap-2.5 flex">
          <div className="text-[#373a47] text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro']">
            On the due date
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
