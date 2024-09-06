import { invoiceActions } from "@/utils/data";
import Image from "next/image";
import React, { useState } from "react";

const InvoiceActions = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="mt-10 ">
      <h2 className="text-[#1f1f23] mb-6 text-xl font-medium font-['Neue Haas Grotesk Text Pro']">
        Invoice Actions
      </h2>

      <div className="w-full flex gap-4 md:gap-8 overflow-x-scroll">
        {invoiceActions.map((item, index) => (
          <button
            onClick={() => setActive(item.id)}
            className={`min-w-[339px] h-[217px] px-4 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8 rounded-3xl flex-col justify-center items-start gap-4 inline-flex ${
              active === item.id ? "bg-primaryBlue" : "bg-white"
            }`}
          >
            <div className="w-full max-w-20 h-full max-h-20 justify-center items-center inline-flex">
              <Image
                src={`/icons/${item.icon}.svg`}
                height={0}
                width={0}
                alt={item.heading}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className=" h-[57px] flex-col justify-start items-start gap-2 flex">
              <span
                className={`text-base md:text-[18px] lg:text-[22px] font-medium font-['Neue Haas Grotesk Text Pro'] ${
                  active === item.id ? "text-white" : "text-[#373a47]"
                }`}
              >
                Change Invoice settings
              </span>
              <span
                className={`  text-sm font-normal font-['Neue Haas Grotesk Text Pro'] leading-snug tracking-tight ${
                  active === item.id ? "text-[#F6F8FA]" : "text-[#697497]"
                }`}
              >
                Customise your invoices
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default InvoiceActions;
