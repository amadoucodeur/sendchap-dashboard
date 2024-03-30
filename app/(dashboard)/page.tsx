import DiagrameCard from "@/components/DiagrameCard";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="flex gap-6 flex-wrap w-[1128px ">
        <DiagrameCard />
        <DiagrameCard />
        <DiagrameCard />
        <DiagrameCard />
      </div>
    </div>
  );
}
