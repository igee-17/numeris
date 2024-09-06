import Image from "next/image";
import React from "react";

const TopBanner = () => {
  return (
    <div className="h-fit lg:h-[291px] w-full p-8 bg-[#fcddec] rounded-[40px] flex-col justify-start items-start gap-4 md:gap-8 inline-flex">
      <div className="self-stretch justify-between md:flex-row flex-col gap-4 md:gap-0 items-start inline-flex">
        <div className="flex-col  justify-start items-start gap-2 md:gap-4 inline-flex">
          <h3 className="text-[#697497] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] uppercase tracking-wide">
            Sender
          </h3>
          <div className="justify-start lg:flex-row flex-col items-start gap-2 md:gap-4 inline-flex">
            <div className="w-[60px] h-[60px] p-2.5 bg-white rounded-2xl flex-col justify-center items-center gap-2.5 inline-flex">
              <Image
                src="/icons/invoiceSender.svg"
                width={42}
                height={26}
                alt="invoiceSender"
              />
            </div>
            <div className="flex-col justify-center items-start gap-1 md:gap-2 inline-flex">
              <p className="text-[#1f1f23] text-base font-medium font-['Neue Haas Grotesk Text Pro']">
                Fabulous Enterprise
              </p>
              <p className="text-[#697497] text-[10px] md:text-xs font-normal font-['Neue Haas Grotesk Text Pro']">
                +386 989 271 3115
              </p>
              <p className="text-[#697497] text-[10px] md:text-xs font-normal font-['Neue Haas Grotesk Text Pro'] leading-tight">
                1331 Hart Ridge Road 48436 Gaines, MI{" "}
              </p>
              <p className="text-[#697497] text-[10px] md:text-xs font-normal font-['Neue Haas Grotesk Text Pro'] leading-tight">
                info@fabulousenterise.co
              </p>
            </div>
          </div>
        </div>
        <div className="justify-start h-full  items-start  flex">
          <div className="h-full  flex-col justify-between lg:justify-start items-start gap-4 inline-flex">
            <h3 className="text-[#697497] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] uppercase tracking-wide">
              Customer
            </h3>
            <div className="justify-start items-start gap-6 inline-flex">
              <div className="flex-col justify-center items-start gap-1 md:gap-2 inline-flex">
                <p className="text-[#1f1f23] text-base font-medium font-['Neue Haas Grotesk Text Pro']">
                  Olaniyi Ojo Adewale
                </p>
                <p className="text-[#697497] text-[10px] md:text-xs font-normal font-['Neue Haas Grotesk Text Pro']">
                  +386 989 271 3115
                </p>
                <p className="text-[#697497] text-[10px] md:text-xs font-normal font-['Neue Haas Grotesk Text Pro'] leading-tight">
                  info@fabulousenterise.co
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch md:h-[67px] flex-col justify-start items-start gap-2 flex">
        <h3 className="text-[#697497] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] uppercase tracking-wide">
          Invoice details
        </h3>
        <div className="self-stretch justify-between items-start inline-flex md:flex-nowrap md:gap-0 gap-2 flex-wrap">
          <div className="w-[120px] flex-col justify-start items-start gap-1 inline-flex">
            <h4 className="text-[#666f77] text-[10px] font-normal font-['Neue Haas Grotesk Text Pro'] uppercase leading-tight tracking-wide">
              invoice no
            </h4>
            <p className="text-[#1f1f23] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] leading-tight">
              1023902390
            </p>
          </div>
          <div className="w-[120px] flex-col justify-start items-start gap-1 inline-flex">
            <h4 className="text-[#666f77] text-[10px] font-normal font-['Neue Haas Grotesk Text Pro'] uppercase leading-tight tracking-wide">
              Issue date
            </h4>
            <p className="text-[#1f1f23] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] leading-tight">
              March 30th, 2023
            </p>
          </div>
          <div className="w-[120px] flex-col justify-start items-start gap-1 inline-flex">
            <h4 className="text-[#666f77] text-[10px] font-normal font-['Neue Haas Grotesk Text Pro'] uppercase leading-tight tracking-wide">
              Due date
            </h4>
            <p className="text-[#1f1f23] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] leading-tight">
              May 19th, 2023
            </p>
          </div>
          <div className="w-[120px] flex-col justify-start items-start gap-1 inline-flex">
            <h4 className="text-[#666f77] text-[10px] font-normal font-['Neue Haas Grotesk Text Pro'] uppercase leading-tight tracking-wide">
              Billing currency
            </h4>
            <p className="text-[#1f1f23] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] leading-tight">
              USD ($)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
