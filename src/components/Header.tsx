import { useSidebar } from "@/hooks/useSidebar";
import Image from "next/image";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const { isOpen, open, close, toggle } = useSidebar();

  return (
    <div className="flex min-h-[100px] items-center justify-between gap-2 max-w-max border-b border-[#a1b8ff33]">
      <h1 className="text-[#373a47] text-[28px] font-medium font-['Neue Haas Grotesk Text Pro'] uppercase tracking-[3.36px]">
        Invoice
      </h1>
      <div className="flex items-center py-[10px] lg:py-[18px] gap-6">
        <span className="zr:hidden mb:flex inline-flex cursor-pointer h-16 w-16 justify-center items-center bg-white rounded-full">
          <Image
            src={"/icons/notification.svg"}
            height={24}
            width={24}
            alt="notification"
          />
        </span>
        <button className="zr:hidden mb:flex items-center p-3 bg-white rounded-[40px]">
          <span className="inline-flex bg-primaryBlue rounded-full h-10 w-10 justify-center items-center text-white text-sm font-bold font-['Neue Haas Grotesk Text Pro'] capitalize">
            KO
          </span>
          <span>
            <Image
              src={"/icons/arrowdown.svg"}
              height={24}
              width={24}
              alt="arrowdown"
            />
          </span>
        </button>
        <button className="cursor-pointer inline-flex lg:hidden  h-10 w-10"></button>
      </div>
    </div>
  );
};

export default Header;
