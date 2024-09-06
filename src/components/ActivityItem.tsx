import Image from "next/image";
import React from "react";

const ActivityItem = () => {
  return (
    <div className="h-32 justify-start items-start gap-4 inline-flex">
      <div className="w-full max-w-12 h-full max-h-12  rounded-[30px] justify-center items-center gap-[7.50px] flex">
        <Image
          className="rounded-full object-cover"
          src="/person.svg"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          sizes="100vw"
          alt="person"
        />
      </div>
      <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1 inline-flex">
        <p className="text-black text-base md:text-lg font-medium font-['Neue Haas Grotesk Text Pro']">
          Invoice creation
        </p>
        <div className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
          Yesterday, 12:05 PM
        </div>
        <div className="self-stretch h-[76px] p-4 bg-[#f6f8fa] rounded-2xl flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch">
            <span className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              Created invoice{" "}
            </span>
            <span className="text-[#1f1f23] text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              00239434/Olaniyi Ojo Adewale
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
