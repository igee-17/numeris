import React from "react";

const InvoiceItem: React.FC<InvoiceItem> = ({
  status,
  color,
  border,
  background,
  modal,
}) => {
  return (
    <button
      onClick={modal.open}
      className="h-[100.80px] w-full px-3 md:px-6 py-2 md:py-4 bg-white rounded-3xl justify-between items-start inline-flex cursor-pointer"
    >
      <div className="justify-start items-start gap-3 flex">
        <span className="w-fit md:w-[111px] text-[#373a47] text-left  text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro'] leading-[25.20px]">
          Invoice - 1023494 - 2304{" "}
        </span>
      </div>
      <div className="md:w-[130px] px-2 md:px-4 flex-col justify-start items-start gap-1 inline-flex">
        <span className="text-[#666f77] text-[8px] md:text-[10px] font-normal font-['Neue Haas Grotesk Text Pro'] uppercase leading-[20px] tracking-wide">
          Due date
        </span>
        <span className="text-[#697497] text-left md:text-center text-xs md:text-sm font-medium font-['Neue Haas Grotesk Text Pro']  leading-[20px]">
          May 19th, 2023
        </span>
      </div>
      <div className="md:w-[163px] flex-col justify-center items-end gap-3 inline-flex">
        <span className="text-[#373a47] text-sm md:text-base font-medium font-['Neue Haas Grotesk Text Pro'] leading-[20px]">
          {" "}
          $1,311,750.12
        </span>
        <div className="flex-col justify-center items-start gap-[6.38px] flex">
          <p
            style={{ borderColor: border, backgroundColor: background }}
            className="px-3 py-[7.50px]  rounded-[18px] border  justify-start items-start gap-[7.50px] inline-flex"
          >
            <span
              style={{ color }}
              className="text-[6px] md:text-[7.50px] font-medium font-['Neue Haas Grotesk Text Pro'] uppercase leading-3 tracking-wide"
            >
              {status}
            </span>
          </p>
        </div>
      </div>
    </button>
  );
};

export default InvoiceItem;
