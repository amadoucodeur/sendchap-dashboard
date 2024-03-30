import BarsCards from "@/components/BarsCards";
import DiagrameCard from "@/components/DiagrameCard";
import MyBarChart from "@/components/MyBarChart";
import ResumeCard from "@/components/ResumeCard";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="flex gap-6 flex-wrap w-[1128px ">
        <DiagrameCard />
        <DiagrameCard />
        <DiagrameCard />
        <DiagrameCard />
        <ResumeCard />
        <ResumeCard />
        <BarsCards />
      </div>
    </div>
  );
}
