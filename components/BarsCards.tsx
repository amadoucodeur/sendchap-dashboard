import React from "react";
import { IconOption } from "./ui/icons";
import MyBarChart from "./MyBarChart";

export default function BarsCards() {
  return (
    <div className="flex flex-col gap-3 border-[1px] border-solid border-[#EAECF0] rounded-xl">
      <div className="flex justify-between p-9">
        <div className="">
          <p className="text-[#162649] font-[700] text-[18px]">
            Statut des transactions
          </p>
          <p className="text-[#3B506E] text-[14px]">
            Taux de réussite et d'échec des transactions
          </p>
        </div>
        <IconOption />
      </div>
      <MyBarChart />
    </div>
  );
}
