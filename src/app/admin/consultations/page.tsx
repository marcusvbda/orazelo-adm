"use client";

import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import ScheduleCheckups from "@/components/ScheduleCheckups";
import ScheduleCheckupsToday from "@/components/ScheduleCheckupsToday";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

const CardNewContent = () => {
  return (
    <Card
      className="!bg-primary-100 pr-32 px-6 py-8 flex flex-col gap-2 bg-[url('/calendar-full.svg')] bg-no-repeat bg-auto justify-center"
      style={{ backgroundPosition: "right 12px bottom" } as CSSProperties}
    >
      <h4 className="text-primary-500 text-xl font-semibold">
        Acesse a sua agenda
      </h4>
      <div className="text-primary/50 text-sm">
        Veja consultas agendadas, próximas consultas e históricos de consultas
      </div>
      <Link href="#" className="mt-auto flex items-center gap-2 font-semibold">
        Acessar agenda
        <AspectRatio src="/arrow-blue.svg" size={{ height: 22 }} />
      </Link>
    </Card>
  );
};

export default function ConsultationsPage(): ReactNode {
  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin">
            Consultas e Agendamentos
          </BackLink>
        }
        description="Verifique suas consultas agendadas e agende novas"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <div className="w-full flex-col md:flex-row flex gap-4">
            <div className="w-full md:w-5/12 flex flex-col gap-4">
              <CardNewContent />
            </div>
            <div className="w-full md:w-7/12">
              <ScheduleCheckupsToday />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <h4 className="text-neutral-600 text-lg">Filtrar</h4>
            <div>
              <select>
                <option>
                  Esse mês de <strong>Julho</strong>
                </option>
              </select>
            </div>
          </div>
          <ScheduleCheckups />
        </div>
      </div>
    </div>
  );
}
