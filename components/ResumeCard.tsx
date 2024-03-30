import React from "react";
import { IconFlechUp, IconOption } from "./ui/icons";

export default function ResumeCard() {
  return (
    <div className="flex gap-6 p-6 border-[1px] border-solid border-[#EAECF0] rounded-xl w-[540px] justify-between">
      <div className="">
        <p className="text-[#566B83] text-[14px]">Utilisateur en 24 heures / Envoi d’argent</p>
        <p className="text-[#162649] text-4xl">24,000</p>
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
