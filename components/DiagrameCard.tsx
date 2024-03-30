import React from "react";
import MyPieChart from "./MyPieChart";
import { IconFlechUp, IconOption } from "./ui/icons";

export default function DiagrameCard() {
  return (
    <div className="flex gap-6 p-6 border-[1px] border-solid border-[#EAECF0] rounded-xl w-[540px]">
      <MyPieChart />
      <div className="flex flex-col justify-between">
        <p className="text-[##162649] font-[700] text-[16px]">
          Envoi d’argent inter réseau
        </p>
        <p className="text-[#3B506E] font-[500] text-[14px]">
          Transaction de la journée
        </p>
        <p className="text-[#8559C5] font-[700] text-[38px]">
          23450551.6 <span className="text-[24px]">F CFA</span>
        </p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <IconOption />
        <div className="flex items-center bg-[#DFFCDE] rounded-full gap-1 px-2 py-1">
          <IconFlechUp />
          <p>3.4</p>
        </div>
      </div>
    </div>
  );
}
