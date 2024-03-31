import BarsCards from "@/components/BarsCards";
import DiagrameCard from "@/components/DiagrameCard";
import MyBarChart from "@/components/MyBarChart";
import ResumeCard from "@/components/ResumeCard";
import TransactionCard from "@/components/TransactionCard";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="flex gap-6 flex-wrap w-[1128px ">
        <DiagrameCard
          tittle="Envoi d’argent inter réseau"
          description="Transaction de la journée"
          value="23450551.6"
        />
        <DiagrameCard
          tittle="Envoi d’argent inter réseau"
          description="Transaction de la journée"
          value="23450551.6"
        />
        <DiagrameCard
          tittle="Envoi d’argent inter réseau"
          description="Transaction de la journée"
          value="23450551.6"
        />
        <DiagrameCard
          tittle="Envoi d’argent inter réseau"
          description="Transaction de la journée"
          value="23450551.6"
        />
        <ResumeCard
          text={"Utilisateur en 24 heures / Envoi d’argent"}
          value={24000}
        />
        <ResumeCard
          text={"Utilisateur en 24 heures / Envoi d’argent"}
          value={24000}
        />
        <BarsCards />
        <TransactionCard />
      </div>
    </div>
  );
}
