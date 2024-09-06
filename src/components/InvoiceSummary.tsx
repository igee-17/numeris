import { invoicesInfo } from "@/utils/data";
import React from "react";
import InvoiceInfo from "./InvoiceInfo";

const InvoiceSummary = () => {
  return (
    <>
      <div className="mt-10 flex mb:flex-row flex-col md:items-center justify-between gap-2 max-w-max">
        <p className="text-[#1f1f23] text-[32px] font-medium font-['Neue Haas Grotesk Text Pro']">
          Invoice
        </p>
        <div className="flex mb:flex-nowrap flex-wrap items-center gap-4 md:gap-8">
          <button className="w-[150px] md:w-[200px] lg:w-[252px] h-[48px] md:h-[68px] py-1 md:py-2 bg-white rounded-[40px] border border-[#e3e5ef] justify-center items-center gap-2 inline-flex">
            <span className="text-[#697497] text-[12px] md:text-sm font-medium font-['Neue Haas Grotesk Text Pro'] uppercase tracking-tight">
              see what’s new
            </span>
          </button>
          <button className="w-24 md:w-40 lg:w-60 h-[48px] md:h-[68px] px-10 py-2 bg-[#003eff] rounded-[20px] md:rounded-[40px] justify-center items-center gap-2 inline-flex">
            <span className="text-white text-base font-medium font-['Neue Haas Grotesk Text Pro'] uppercase tracking-tight">
              Create
            </span>
          </button>
        </div>
      </div>
      <div className="flex gap-8 mt-10 overflow-x-scroll">
        {invoicesInfo.map((item, index) => (
          <InvoiceInfo key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default InvoiceSummary;
