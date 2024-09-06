import { Box, Modal } from "@mui/material";
import React from "react";
import { style } from "./config";
import Reminders from "./Reminders";
import Header from "./Header";
import MainInfo from "./MainInfo";
import InvoiceActivity from "./InvoiceActivity";
import Image from "next/image";

const InvoiceModal: React.FC<ModalProps> = ({ modal }) => {
  return (
    <Modal
      open={modal.isOpen}
      onClose={modal.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="backdrop-blur-[3px]"
    >
      <Box
        sx={style}
        className="max-w-[1254px] w-[90%] lg:w-full  mt-10 h-[84%]"
      >
        <button
          onClick={modal.close}
          className="inline-flex absolute top-[-80px] z-[99999999] bg-white rounded-full p-3 right-0"
        >
          <Image src={"/icons/close.svg"} height={40} width={40} alt="close" />
        </button>
        <div className="bg-white md:p-8 p-4 lg:p-10 mx-auto max-w-[340px] mb:max-w-full w-full rounded-[15px] h-full overflow-scroll">
          <Header />
          <button className=" mt-6 px-4 py-2.5 bg-[#f2fbff] rounded-3xl border border-[#003eff]/20 justify-start items-start gap-2.5 inline-flex">
            <div className="text-[#003eff] text-[8px] md:text-[10px] font-medium font-['Neue Haas Grotesk Text Pro'] uppercase leading-none tracking-wide">
              PARTIAL PAYMENT
            </div>
          </button>
          <Reminders />

          <div className="mt-8 w-full flex lg:flex-row flex-col gap-[55px]">
            <MainInfo />
            <InvoiceActivity />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default InvoiceModal;
