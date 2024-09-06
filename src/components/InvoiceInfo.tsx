import Image from "next/image";
import React from "react";

const InvoiceInfo: React.FC<InvoiceInfo> = ({
  heading,
  color,
  total,
  decimal,
  amount,
}) => {
  return (
    <div className="w-[246px] h-[204px] px-10 py-8 bg-white rounded-3xl flex-col justify-center items-start gap-4 inline-flex">
      <div className="w-10 h-10 justify-center items-center inline-flex">
        <Image src={"/icons/menubig.svg"} height={40} width={40} alt="menu" />
      </div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <span className="text-[#697497] text-xs font-normal font-neue uppercase leading-tight tracking-wide">
            {heading}
          </span>
          <div
            className="px-4 py-3 min-w-[47px] rounded-3xl justify-start items-center gap-2.5 flex"
            style={{ backgroundColor: color }}
          >
            <span className="text-[#373a47] text-sm font-medium font-neue">
              {total}
            </span>
          </div>
        </div>
        <div className="w-[175px] items-end inline-flex">
          <span className="text-[#1f1f23] inline-flex leading-[28px] text-[28px] font-medium font-neue">
            {amount}
          </span>
          <span className="w-6  text-[#697497]  text-sm font-medium font-neue">
            {decimal}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceInfo;
