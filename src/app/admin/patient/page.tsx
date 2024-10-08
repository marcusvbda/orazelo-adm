"use client";

import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
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

export const TableRow = ({ row }: any) => {
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
          {Array.from({ length: row.rate }).map((_, index) => (
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              key={index}
            >
              <path
                d="M6.77447 0.463525C6.92415 0.00286961 7.57585 0.00287008 7.72553 0.463525L9.04611 4.52786C9.11305 4.73388 9.30503 4.87336 9.52164 4.87336L13.7951 4.87336C14.2795 4.87336 14.4809 5.49316 14.089 5.77786L10.6317 8.28976C10.4565 8.41709 10.3831 8.64277 10.4501 8.84878L11.7706 12.9131C11.9203 13.3738 11.3931 13.7568 11.0012 13.4721L7.54389 10.9602C7.36865 10.8329 7.13135 10.8329 6.95611 10.9602L3.49877 13.4721C3.10692 13.7568 2.57968 13.3738 2.72935 12.9131L4.04994 8.84878C4.11687 8.64277 4.04355 8.41709 3.8683 8.28976L0.410968 5.77786C0.0191114 5.49316 0.220499 4.87336 0.704861 4.87336L4.97836 4.87336C5.19497 4.87336 5.38695 4.73388 5.45389 4.52786L6.77447 0.463525Z"
                fill="#FDBA74"
              />
            </svg>
          ))}
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
