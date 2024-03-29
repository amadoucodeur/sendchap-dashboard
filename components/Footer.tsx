import Image from "next/image";
import React from "react";
import { LogOut } from "./ui/icons";

export default function Footer() {
  return (
    <div className="flex items-center w-full pb-8 justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/profile.png"
          alt="logo"
          width={40}
          height={40}
          className="rounded-full bg-[#DFEDF4]"
        />
        <div className="">
          <p className="text-[#3B506E] font-[700]">Philippe Jeans</p>
          <p className="text-[#566B83] text-[14px]">philippe@gmail.com</p>
        </div>
      </div>

      <div className="self-start justify-self-end">
        <LogOut />
      </div>
    </div>
  );
}
