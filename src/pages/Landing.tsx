"use client";
import Header from "@/components/Header";
import InvoiceActions from "@/components/InvoiceActions";
import InvoiceSummary from "@/components/InvoiceSummary";
import InvoiceModal from "@/components/Modal/InvoiceModal";
import RecentActivities from "@/components/RecentActivities";
import RecentInvoices from "@/components/RecentInvoices";
import { useDisclosure } from "@/hooks/useDisclosure";
import React from "react";

const Landing = () => {
  const invoiceModal = useDisclosure();
  return (
    <section className="bg-[#F5F6FA] lg:ml-[280px] w-full h-full px-4 md:px-8 lg:px-10 pb-20">
      <Header />
      <InvoiceSummary />
      <InvoiceActions />

      <div className="w-full flex gap-8 mt-4 lg:flex-row flex-col">
        <RecentInvoices modal={invoiceModal} />
        <RecentActivities />
      </div>

      {/* MODAL */}
      {invoiceModal.isOpen && <InvoiceModal modal={invoiceModal} />}
    </section>
  );
};

export default Landing;
