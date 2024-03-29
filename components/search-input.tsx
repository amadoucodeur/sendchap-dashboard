import React from "react";
import { Search } from "./ui/icons";

export default function SearchInput() {
  return (
    <div className="flex flex-row items-center w-full p-4 gap-2 border border-[var(--br)] rounded-lg focus:outline-none  focus:border-[var(--fg)]">
      <Search />
      <input type="text" placeholder="Search" className="w-full outline-none" />
    </div>
  );
}
