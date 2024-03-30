import Image from "next/image";
import { IconFlechRight, IconOption, IconPhone, IconShare } from "./ui/icons";
import Link from "next/link";

export default function TransactionCard() {
  return (
    <div className="min-w-[400px] gap-5 flex border-[1px] p-6 flex-col border-solid border-[#EAECF0] rounded-xl">
      <div className="flex justify-between">
        <p className="text-[#162649] text-[18px] font-[700]">
          Transaction récentes
        </p>
        <IconOption />
      </div>
      <div className="flex flex-col">
        <List />
        <List2 />
        <List />
        <List2 />
        <List />
      </div>
      <Link
        href={"#"}
        className="text-[#633DA5] text-[14px] font-[700] justify-end flex "
      >
        <p>Afficher plus</p>
      </Link>
    </div>
  );
}

function List() {
  return (
    <div className="flex items-center gap-3 justify-between p-4">
      <div className="">
        <div className="w-[40px] h-[40px] bg-slate-200 rounded-full flex justify-center items-center">
          <IconShare />
        </div>
      </div>
      <div className="">
        <p className="text-[#162649] font-[500]">à 0107565605 (Karim aziz)</p>
        <p className="text-[#778899] text-[12px]">Envoyer à 10h30</p>
      </div>
      <div className="flex items-end flex-col">
        <p className="text-[#212429]">100 000 F CFA</p>
        <div className="flex items-center gap-1">
          <Image src="/wave.png" alt="logo" width={20} height={20} />
          <IconFlechRight />
          <Image src="/om.png" alt="logo" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}


function List2() {
    return (
      <div className="flex items-center gap-3 justify-between p-4">
        <div className="">
          <div className="w-[40px] h-[40px] bg-slate-300 rounded-full flex justify-center items-center">
            <IconPhone />
          </div>
        </div>
        <div className="">
          <p className="text-[#162649] font-[500]">à 0107565605 (Cheick Tidiane)</p>
          <p className="text-[#778899] text-[12px]">Achat à 08h30</p>
        </div>
        <div className="flex items-end flex-col">
          <p className="text-[#212429]">10 000 F CFA</p>
          <div className="flex items-center gap-1">
            <Image src="/wave.png" alt="logo" width={20} height={20} />
            <IconFlechRight />
            <Image src="/om.png" alt="logo" width={20} height={20} />
          </div>
        </div>
      </div>
    );
  }
  