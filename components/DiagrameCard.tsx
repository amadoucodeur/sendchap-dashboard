import React from "react";
import MyPieChart from "./MyPieChart";
import { IconFlechUp, IconOption } from "./ui/icons";

type Props = {
  tittle: string;
  value: string;
  description: string;
};

const data = [
  { name: "Wave", value: 400 },
  { name: "Orange", value: 300 },
  { name: "MTN", value: 300 },
  { name: "Moov", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


export default function DiagrameCard({tittle, value, description}: Props) {
  return (
    <div className="flex gap-6 p-6 border-[1px] border-solid border-[#EAECF0] rounded-xl w-[540px]">
      <MyPieChart  data={data} COLORS={COLORS}/>
      <div className="flex flex-col justify-between">
        <p className="text-[##162649] font-[700] text-[16px]">
          {tittle}
        </p>
        <p className="text-[#3B506E] font-[500] text-[14px]">
          {description}
        </p>
        <p className="text-[#8559C5] font-[700] text-[38px]">
          {value} <span className="text-[24px]">F CFA</span>
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
