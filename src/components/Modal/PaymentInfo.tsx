import React from "react";

const PaymentInfo = () => {
  return (
    <div className="md:h-[151px] w-full px-2 md:px-4 lg:px-6 py-2 md:py-4 rounded-3xl border border-[#e3e5ef] flex-col justify-start items-start gap-2 inline-flex">
      <h2 className="text-[#697497] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] uppercase tracking-wide">
        Payment information
      </h2>
      <div className="self-stretch md:flex-row flex-col md:gap-0 gap-4 justify-between items-start inline-flex">
        <div className="md:w-[100px] w-20 lg:w-[120px] flex-col justify-start items-start gap-1 inline-flex">
          <h3 className="text-[rgb(102,111,119)] text-[8px] md:text-[9px] lg:text-[10px] font-normal font-['Neue Haas Grotesk Text Pro'] uppercase leading-tight tracking-wide">
            Account name
          </h3>
          <p className="text-[#1f1f23] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] leading-tight">
            1023902390
          </p>
        </div>
        <div className="md:w-[100px] w-20 lg:w-[120px] flex-col justify-start items-start gap-1 inline-flex">
          <h3 className="text-[#666f77] text-[8px] md:text-[9px] lg:text-[10px] font-normal font-['Neue Haas Grotesk Text Pro'] uppercase leading-tight tracking-wide">
            account number
          </h3>
          <p className="text-[#1f1f23] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] leading-tight">
            March 30th, 2023
          </p>
        </div>
        <div className="md:w-[100px] w-20 lg:w-[120px] flex-col justify-start items-start gap-1 inline-flex">
          <h3 className="text-[#666f77] text-[8px] md:text-[9px] lg:text-[10px] font-normal font-['Neue Haas Grotesk Text Pro'] uppercase leading-tight tracking-wide">
            Ach routing no
          </h3>
          <p className="text-[#1f1f23] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] leading-tight">
            May 19th, 2023
          </p>
        </div>
        <div className="md:w-[100px] w-20 lg:w-[120px] flex-col justify-start items-start gap-1 inline-flex">
          <h3 className="text-[#666f77] text-[8px] md:text-[9px] lg:text-[10px] font-normal font-['Neue Haas Grotesk Text Pro'] uppercase leading-tight tracking-wide">
            Bank Name
          </h3>
          <p className="text-[#1f1f23] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] leading-tight">
            USD ($)
          </p>
        </div>
      </div>
      <div className="self-stretch md:flex-row flex-col justify-start items-start gap-4 md:gap-[46px] inline-flex">
        <div className="md:w-[100px] w-20 lg:w-[120px] flex-col justify-start items-start gap-1 inline-flex">
          <h3 className="text-[#666f77] text-[8px] md:text-[9px] lg:text-[10px] font-normal font-['Neue Haas Grotesk Text Pro'] uppercase leading-tight tracking-wide">
            bank address
          </h3>
          <p className="text-[#1f1f23] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] leading-tight">
            1023902390
          </p>
        </div>
        <div className="md:w-[100px] w-20 lg:w-[120px] flex-col justify-start items-start gap-1 inline-flex">
          <h3 className="text-[#666f77] text-[8px] md:text-[9px] lg:text-[10px] font-normal font-['Neue Haas Grotesk Text Pro'] uppercase leading-tight tracking-wide">
            account number
          </h3>
          <p className="text-[#1f1f23] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] leading-tight">
            March 30th, 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
