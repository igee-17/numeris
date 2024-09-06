import React from "react";

const Items: React.FC<ItemsProps> = ({ heading, text, amount, num, total }) => {
  return (
    <div className="h-[88px] w-full bg-white justify-start items-center gap-3 md:gap-6 inline-flex">
      <div className="grow shrink basis-0 e h-[88px] py-4 bg-white justify-start items-center gap-2.5 flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
          <h2 className="text-[#1f1f23] text-[10px] md:text-xs lg:text-base font-normal font-['Neue Haas Grotesk Text Pro']">
            {heading}
          </h2>
          {text && (
            <p className="self-stretch text-[#666f77] text-[10px] md:text-[13px] font-normal font-['Neue Haas Grotesk Text Pro']">
              {text}
            </p>
          )}
        </div>
      </div>
      <div className="justify-start  items-center gap-1 md:gap-2 lg:gap-4 flex">
        <div className="w-[20px] mb:w-[30px] md:w-[50px] lg:w-[75px] self-stretch py-4 bg-white justify-center items-center gap-2.5 flex">
          <p className="text-[#1f1f23] text-[10px] md:text-xs lg:text-base font-normal font-['Neue Haas Grotesk Text Pro']">
            {num}
          </p>
        </div>
        <div className="w-[50px] mb:w-[50px] md:w-[80px] lg:w-[113px] self-stretch py-4 bg-white justify-end items-center gap-2.5 flex">
          <p className="text-[#1f1f23] text-[10px] md:text-xs lg:text-base font-normal font-['Neue Haas Grotesk Text Pro']">
            {amount}
          </p>
        </div>
        <div className="w-[80px] mb:w-[100px] md:w-[150px] lg:w-[190px] self-stretch py-6 flex-col justify-center items-end gap-[23px] inline-flex">
          <p className="text-[#1f1f23] text-[10px] md:text-xs lg:text-base font-normal font-['Neue Haas Grotesk Text Pro']">
            {total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Items;
