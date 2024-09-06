import Image from "next/image";
import React from "react";

const InvoiceActivity = () => {
  return (
    <div className="flex w-full overflow-x-scroll  flex-col gap-6">
      <h2 className="text-[#1f1f23] text-xl font-medium font-['Inter']">
        Invoice Activity
      </h2>

      <div className="h-[106px] justify-start items-start gap-4 inline-flex">
        <div className="relative w-12 h-12 rounded-[30px] justify-center items-center  flex">
          <Image
            className="rounded-full object-cover"
            src="/person.svg"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            sizes="100vw"
            alt="person"
          />
          <div className="absolute top-[100%] left-0 w-full flex justify-center">
            <span className="inline-flex h-[91px] w-[0px] border border-[#e3e5ef]"></span>
          </div>
        </div>
        <div className=" md:w-[385px] flex-col justify-start items-start gap-1 inline-flex">
          <p className="text-black text-lg font-medium font-['Neue Haas Grotesk Text Pro']">
            You{" "}
          </p>
          <p className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
            Today, 12:20 PM
          </p>
          <div className="w-full min-h-[54px] p-4 bg-[#f6f8fa] rounded-2xl  justify-start items-start ">
            <span className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              Created invoice {""}
            </span>
            <span className="text-[#1f1f23] text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              00239434/Olaniyi Ojo Adewale
            </span>
          </div>
        </div>
      </div>

      <div className=" justify-start items-start gap-4 inline-flex">
        <div className="relative z-10 w-12 h-12 rounded-[30px] justify-center items-center  flex">
          <Image
            className="rounded-full object-cover"
            src="/person.svg"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            sizes="100vw"
            alt="person"
          />
          <div className="absolute top-[100%] left-0 w-full flex justify-center">
            <span className="inline-flex h-[111px] w-[0px] border border-[#e3e5ef]"></span>
          </div>
        </div>
        <div className=" md:w-[385px] flex-col justify-start items-start gap-1 inline-flex">
          <p className="text-black text-lg font-medium font-['Neue Haas Grotesk Text Pro']">
            You{" "}
          </p>
          <div className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
            Today, 12:20 PM
          </div>
          <div className=" w-full min-h-[54px] p-4 bg-[#f6f8fa] rounded-2xl  justify-start items-start  ">
            <span className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              Sent invoice{" "}
            </span>
            <span className="text-[#1f1f23] text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              00239434/Olaniyi Ojo Adewale{" "}
            </span>
            <span className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              to{" "}
            </span>
            <br />
            <span className="text-[#1f1f23] text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              Olaniyi Ojo Adewale
            </span>
          </div>
        </div>
      </div>

      <div className=" justify-start items-start gap-4 inline-flex">
        <div className="relative z-10 w-12 h-12 rounded-[30px] justify-center items-center  flex">
          <Image
            className="rounded-full object-cover"
            src="/person.svg"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            sizes="100vw"
            alt="person"
          />
          <div className="absolute top-[100%] left-0 w-full flex justify-center">
            <span className="inline-flex h-[111px] w-[0px] border border-[#e3e5ef]"></span>
          </div>
        </div>
        <div className=" md:w-[385px] flex-col justify-start items-start gap-1 inline-flex">
          <p className="text-black text-lg font-medium font-['Neue Haas Grotesk Text Pro']">
            Payment Confirmed
          </p>
          <div className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
            Today, 12:20 PM
          </div>
          <div className=" w-full min-h-[54px] p-4 bg-[#f6f8fa] rounded-2xl  justify-start items-start  ">
            <span className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              You manually confirmed a partial payment of
            </span>
            <br />
            <span className="text-[#373B47] font-bold text-xs md:text-sm font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              $503,000.00
            </span>
          </div>
        </div>
      </div>
      <div className=" justify-start items-start gap-4 inline-flex">
        <div className="relative z-10 w-12 h-12 rounded-[30px] justify-center items-center  flex">
          <Image
            className="rounded-full object-cover"
            src="/person.svg"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            sizes="100vw"
            alt="person"
          />
          <div className="absolute top-[100%] left-0 w-full flex justify-center">
            <span className="inline-flex h-[111px] w-[0px] border border-[#e3e5ef]"></span>
          </div>
        </div>
        <div className=" md:w-[385px] flex-col justify-start items-start gap-1 inline-flex">
          <p className="text-black text-lg font-medium font-['Neue Haas Grotesk Text Pro']">
            Payment Confirmed
          </p>
          <div className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
            Today, 12:20 PM
          </div>
          <div className=" w-full min-h-[54px] p-4 bg-[#f6f8fa] rounded-2xl  justify-start items-start  ">
            <span className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              You manually confirmed a full payment of
            </span>
            <br />
            <span className="text-[#373B47] font-bold text-xs md:text-sm  font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              $6,000,000.00
            </span>
          </div>
        </div>
      </div>
      <div className=" justify-start items-start gap-4 inline-flex">
        <div className="relative z-10 w-12 h-12 rounded-[30px] justify-center items-center  flex">
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
        <div className=" md:w-[385px] flex-col justify-start items-start gap-1 inline-flex">
          <p className="text-black text-lg font-medium font-['Neue Haas Grotesk Text Pro']">
            You{" "}
          </p>
          <div className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
            Today, 12:20 PM
          </div>
          <div className=" w-full min-h-[54px] p-4 bg-[#f6f8fa] rounded-2xl  justify-start items-start  ">
            <span className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              Sent invoice{" "}
            </span>
            <span className="text-[#1f1f23] text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              00239434/Olaniyi Ojo Adewale{" "}
            </span>
            <span className="text-[#697497] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              to{" "}
            </span>
            <br />
            <span className="text-[#1f1f23] text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight">
              Olaniyi Ojo Adewale
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceActivity;
