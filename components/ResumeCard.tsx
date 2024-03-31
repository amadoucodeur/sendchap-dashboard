import React from "react";
import { IconFlechUp, IconOption } from "./ui/icons";

type Props = {
  text: string;
  value: number;
}

export default function ResumeCard({text, value}: Props) {
  return (
    <div className="flex gap-6 p-6 border-[1px] border-solid border-[#EAECF0] rounded-xl w-[540px] justify-between">
      <div className="">
        <p className="text-[#566B83] text-[14px]">{text}</p>
        <p className="text-[#162649] text-4xl">{value}</p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <IconOption />
        <div className="flex items-center bg-[#DFFCDE] rounded-full gap-1 px-2 py-1">
          <IconFlechUp />
          <p>10%</p>
        </div>
      </div>
    </div>
  );
}
