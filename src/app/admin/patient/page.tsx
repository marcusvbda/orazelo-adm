"use client";

import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import RateStarsInput from "@/components/RateStartsInput";
import Link from "next/link";
import { ReactNode, useMemo, useState } from "react";

export default function SettingsPage(): ReactNode {
  const rows = useMemo(
    () => [
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
    ],
    []
  );

  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin">
            Pacientes
          </BackLink>
        }
        description="Verifique suas consultas agendadas e agende novas"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <div className="bg-white p-2 rounded-lg flex items-center flex-col md:flex-row">
            <h4 className="text-neutral-600 text-lg text-left w-full mb-2 md:mb-0 md:w-7/12 ml-4">
              Filtrar
            </h4>
            <div className="ml-auto flex gap-1 w-full md:w-5/12">
              <input type="text" placeholder="Pesquisar" />
              <select>
                <option>Esse mês de Julho</option>
              </select>
            </div>
          </div>
          <Card className="mt-4">
            <div>
              <h4 className="text-neutral-600 text-lg">Pacientes</h4>
              <small className="text-neutral-400 text-sm">
                {rows.length} Paciente{rows.length > 1 ? "s" : ""}
              </small>
            </div>
            <div className="flex-row w-full gap-2 bg-gray-100 rounded-lg py-2 px-4 mb-6 hidden md:flex mt-10">
              <div className="w-4/12 flex items-center text-neutral-400 text-sm">
                Paciente
              </div>
              <div className="w-3/12 flex items-center text-neutral-400 text-sm">
                E-mail
              </div>
              <div className="w-2/12 flex items-center text-neutral-400 text-sm">
                Telefone
              </div>
              <div className="w-2/12 flex items-center text-neutral-400 text-sm">
                Avaliacões
              </div>
              <div className="w-1/12 flex items-center text-neutral-400 text-sm" />
            </div>
            {rows.map((row: any, key: any) => (
              <TableRow row={row} key={key} />
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

const TableRow = ({ row }: any) => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-0 border-b pb-6 md:pb-0 md:border-0 border-gray-100 mb-4">
      <div className="w-full md:w-4/12 flex items-center gap-6">
        <div className="flex items-end justify-center size-[50px] rounded-full bg-gray-100">
          <AspectRatio src={row.avatar} size={{ height: 40 }} />
        </div>
        <div className="flex flex-col justify-center">
          <strong className="text-neutral-600 text-sm">{row.name}</strong>
          <small className="text-neutral-400 text-xs">
            {row.age} ano{row.age > 1 && "s"}
          </small>
        </div>
      </div>
      <div className="w-full md:w-3/12 flex text-sm font-semibold items-center text-neutral-600">
        {row.email}
      </div>
      <div className="w-full md:w-2/12 flex text-sm font-semibold items-center text-neutral-600">
        {row.phone}
      </div>
      <div className="w-full md:w-2/12 flex text-primary items-center text-sm font-semibold flex-col">
        <div className="flex flex-row">
          <RateStarsInput value={3} size={16} disabled={true} />
        </div>
        <div className="text-gray-400 text-xs mt-1">Avaliações</div>
      </div>
      <div className="w-full md:w-1/12 flex items-center">
        <Link
          href={`/admin/patient/profile`}
          className="size-8 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer"
        >
          <AspectRatio src="/etc.svg" size={{ width: 10 }} />
        </Link>
      </div>
    </div>
  );
};
