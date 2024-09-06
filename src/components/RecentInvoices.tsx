import React from "react";
import InvoiceItem from "./InvoiceItem";

const RecentInvoices: React.FC<ModalProps> = ({ modal }) => {
  return (
    <div className="bg-white border  p-4 md:p-6 lg:p-8 rounded-[40px] w-full max-w-[617px] ">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[#1f1f23] text-base md:text-xl font-medium font-['Neue Haas Grotesk Text Pro']">
          Recent Invoices
        </h1>
        <button className="md:w-[242px] h-10 md:h-[60px] pr-2 py-2 bg-white rounded-[30px] border border-[#e3e5ef] justify-center items-center gap-2 inline-flex">
          <span className="text-[#003eff] text-[9px] px-2 md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] uppercase leading-none tracking-wide">
            View All invoices
          </span>
        </button>
      </div>

      <h3 className="text-[#1f1f23] mt-[34px] mb-[18px] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] uppercase leading-none tracking-wide">
        today - 27th November, 2022
      </h3>
      <InvoiceItem
        status="paid"
        color="#129043"
        border="#12904333"
        background="#E6FFF0"
        modal={modal}
      />
      <InvoiceItem
        status="OVERDUE"
        color="#FF5663"
        border="#FF566333"
        background="#FFF4F5"
        modal={modal}
      />
      <h3 className="text-[#1f1f23] mt-[10px] mb-[10px] text-xs font-medium font-['Neue Haas Grotesk Text Pro'] uppercase leading-none tracking-wide">
        8th december, 2022
      </h3>
      <InvoiceItem
        status="DRAFT"
        color="#373B47"
        border="#373B4733"
        background="#F6F8FA"
        modal={modal}
      />
      <InvoiceItem
        status="PENDING PAYMENT"
        color="#D98F00"
        border="#D98F0033"
        background="#FFF8EB"
        modal={modal}
      />
      <InvoiceItem
        status="paid"
        color="#129043"
        border="#12904333"
        background="#E6FFF0"
        modal={modal}
      />
    </div>
  );
};

export default RecentInvoices;
