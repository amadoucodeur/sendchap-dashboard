import React from "react";

export default function Header() {
  return (
    <header className="flex flex-col gap-6">
      <div className="">
        <h2 className="font-[700] text-[32px] text-[#162649]">
          Tableau de bord
        </h2>
        <p className="text-[#3B506E] italic">Bienvenue, Philippe !</p>
      </div>
      <div className="flex text-[#3B506E] w-full justify-between">
        <div className="flex border-2 border-[#DFEDF4] rounded-lg">
          <button className="py-2 px-4 ">12 mois</button>
          <button className="py-2 px-4 border-x-2 border-[#DFEDF4]">
            30 jours
          </button>
          <button className="py-2 px-4 border-r-2 border-[#DFEDF4]">
            7 jours
          </button>
          <button className="py-2 px-4">24 heurs</button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex border-2 border-[#DFEDF4] rounded-lg py-2 px-4">
            <p>Jan 6, 2022 – Jan 13, 2022</p>
          </div>
          <div className="flex border-2 border-[#DFEDF4] rounded-lg py-2 px-4">
            <p>Filter</p>
          </div>
        </div>
      </div>
    </header>
  );
}
