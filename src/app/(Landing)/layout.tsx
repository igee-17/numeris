"use client";
import { useSidebar } from "@/hooks/useSidebar";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const menuList = [
  {
    icon: "home",
    text: "Getting Started",
  },
  {
    icon: "menu",
    text: "Overview",
  },
  {
    icon: "home",
    text: "Accounts",
  },
  {
    icon: "invoice",
    text: "Invoice",
  },
  {
    icon: "profile",
    text: "Beneficiary Management",
  },
  {
    icon: "question",
    text: "Help Center",
  },
  {
    icon: "setting",
    text: "Settings",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [active, setActive] = useState("Invoice");
  const { isOpen, open, close, toggle } = useSidebar();

  return (
    <section className="flex h-full relative  overflow-hidden  w-full">
      <button
        onClick={toggle}
        className=" absolute top-[35px] right-[18px] cursor-pointer  inline-flex lg:hidden"
      >
        <HiMenuAlt3 color="black" size={30} />
      </button>
      <aside
        className={`py-10 w-full transition px-6 h-full max-w-[262px] bg-white flex flex-col gap-10  top-0 right-0 lg:left-0 fixed ${
          isOpen ? "translate-x-0" : "translate-x-[100%] lg:translate-x-0"
        }`}
      >
        <button
          onClick={close}
          className="inline-flex absolute  lg:hidden top-[-0px] z-[99999999] bg-white rounded-full p-3 right-0"
        >
          <Image src={"/icons/close.svg"} height={40} width={40} alt="close" />
        </button>

        <Image src={"/logo.svg"} height={24} width={181} alt="logo" />

        <div className="flex flex-col gap-3">
          {menuList.map((item, index) => (
            <button
              onClick={() => setActive(item.text)}
              key={index}
              className={`flex py-[14px] w-[220px] px-4 items-center gap-2 ${
                active === item.text &&
                "rounded-[32px] border-8 border-[#F8F8FB] cursor-pointer"
              } `}
            >
              <span>
                <Image
                  src={`/icons/${item.icon}.svg`}
                  width={24}
                  height={24}
                  alt={item.text}
                />
              </span>
              <p className="text-[#697497] text-sm font-[400] font-['Neue Haas Grotesk Text Pro'] tracking-tight">
                {item.text}
              </p>
            </button>
          ))}
        </div>
      </aside>

      {children}
    </section>
  );
}
