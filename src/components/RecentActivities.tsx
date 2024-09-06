import React from "react";
import ActivityItem from "./ActivityItem";

const RecentActivities = () => {
  return (
    <div className="bg-white p-4 md:p-6 lg:p-8 rounded-[40px] w-full max-w-[431px] flex flex-col gap-6">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[#1f1f23] text-base md:text-xl font-medium font-['Neue Haas Grotesk Text Pro']">
          Recent Activities
        </h1>
        <button className="md:w-[112px] px-2 h-[40px] md:h-[60px] pr-2 py-2 bg-white rounded-[30px] border border-[#e3e5ef] justify-center items-center gap-2 inline-flex">
          <span className="text-[#003eff] text-[10px] md:text-xs font-medium font-['Neue Haas Grotesk Text Pro'] uppercase leading-none tracking-wide">
            View All
          </span>
        </button>
      </div>

      {Array.from({ length: 4 }, () => (
        <ActivityItem />
      ))}
    </div>
  );
};

export default RecentActivities;
