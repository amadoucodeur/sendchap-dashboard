import React from "react";
import SearchInput from "./search-input";
import Logo from "./ui/logo";
import Link from "next/link";
import Users, { Dashboard } from "./ui/icons";
import Footer from "./Footer";

export default function SideBarNavigation() {
  return (
    <div className="flex flex-col gap-6 p-6 border-r-2 border-[#DFEDF4] h-full pt-8 justify-between fixed top-0 left-0 ">
      <div className="flex flex-col gap-6">
        <Logo />
        <SearchInput /> 
        <div className="flex flex-col gap-1">
          <Link
            href={"#"}
            className="flex gap-4 items-center rounded-lg bg-[var(--fg)] py-3 px-2 text-[#162649]"
          >
            <Dashboard />
            <p className="font-[700]">Tableau de bord</p>
          </Link>

          <Link
            href={"#"}
            className="flex gap-4 items-center rounded-lg py-3 px-2 text-[#3B506E]"
          >
            <Users />
            <p className="font-[700]">Gestion des utilisateurs</p>
          </Link>
        </div>
      </div>
      

      <Footer />
    </div>
  );
}
