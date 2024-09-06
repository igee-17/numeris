import React from "react";
import TopBanner from "./TopBanner";
import Items from "./Items";
import Totals from "./Totals";
import PaymentInfo from "./PaymentInfo";

const invoiceItems = [
  {
    heading: "Email Marketing",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ",
    num: "10",
    amount: "$1,500",
    total: "$15,000.00",
  },
  {
    heading: "Video looping effect",
    text: "",
    num: "6",
    amount: "$1,110,500",
    total: "$6,663,000.00",
  },
  {
    heading: "Graphic design for emails",
    text: "Tsit voluptatem accusantium ",
    num: "7",
    amount: "$2,750",
    total: "$19,250.00",
  },
  {
    heading: "Video looping effect",
    text: "",
    num: "6",
    amount: "$1,110,500",
    total: "$6,663,000.00",
  },
];

const MainInfo = () => {
  return (
    <div className="w-full lg:w-[750px] min-h-[1199px] p-4 md:p-6 lg:p-8 bg-white rounded-[40px] border border-[#e3e5ef] flex-col  items-start gap-6 inline-flex">
      <TopBanner />

      <div className="w-full flex gap-10 items-center">
        <h2 className="text-[#1f1f23] w-fit text-base md:text-xl font-medium font-['Neue Haas Grotesk Text Pro']">
          Items
        </h2>
        <div className="inline-flex  h-[1px] w-full bg-[#E3E6EF]"> </div>
      </div>
      <div className="w-full overflow-x-scroll">
        {invoiceItems.map((item, index) => (
          <Items key={index} {...item} />
        ))}
      </div>

      <Totals />
      <PaymentInfo />

      <div className="h-[60px] md:h-[99px] w-full px-3 md:px-6 py-2 md:py-4 bg-[#f6f8fa] rounded-3xl  justify-start items-start gap-2.5 inline-flex">
        <div className="grow shrink basis-0 h-[41px] justify-start items-center gap-[13px] flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-[#b7bdcf] text-xs md:text-sm font-normal font-['Neue Haas Grotesk Text Pro'] uppercase">
              NOTE
            </div>
            <div className="self-stretch text-[#666f77] text-sm md:text-base font-normal font-['Neue Haas Grotesk Text Pro']">
              Thank you for your patronage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
