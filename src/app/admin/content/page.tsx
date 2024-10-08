"use client";

import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import Tabs from "@/components/Tabs";
import Link from "next/link";
import { ReactNode, useMemo, useState } from "react";

export default function ContentPage(): ReactNode {
  const rows = useMemo(
    () => [
      {
        title: "Desvendando o Eu: A Importância dos Testes de Autoconhecimento",
        type: "Saúde mental",
        created_at: "22/06/2023",
        updated_at: "28/06/2023",
        time: "10 min",
        status: "Ativo",
      },
      {
        title: "Desvendando o Eu: A Importância dos Testes de Autoconhecimento",
        type: "Saúde mental",
        created_at: "22/06/2023",
        updated_at: "28/06/2023",
        time: "10 min",
        status: "Inativo",
      },
      {
        title: "Desvendando o Eu: A Importância dos Testes de Autoconhecimento",
        type: "Saúde mental",
        created_at: "22/06/2023",
        updated_at: "28/06/2023",
        time: "10 min",
        status: "Ativo",
      },
      {
        title: "Desvendando o Eu: A Importância dos Testes de Autoconhecimento",
        type: "Saúde mental",
        created_at: "22/06/2023",
        updated_at: "28/06/2023",
        time: "10 min",
        status: "Inativo",
      },
      {
        title: "Desvendando o Eu: A Importância dos Testes de Autoconhecimento",
        type: "Saúde mental",
        created_at: "22/06/2023",
        updated_at: "28/06/2023",
        time: "10 min",
        status: "Ativo",
      },
      {
        title: "Desvendando o Eu: A Importância dos Testes de Autoconhecimento",
        type: "Saúde mental",
        created_at: "22/06/2023",
        updated_at: "28/06/2023",
        time: "10 min",
        status: "Inativo",
      },
      {
        title: "Desvendando o Eu: A Importância dos Testes de Autoconhecimento",
        type: "Saúde mental",
        created_at: "22/06/2023",
        updated_at: "28/06/2023",
        time: "10 min",
        status: "Ativo",
      },
      {
        title: "Desvendando o Eu: A Importância dos Testes de Autoconhecimento",
        type: "Saúde mental",
        created_at: "22/06/2023",
        updated_at: "28/06/2023",
        time: "10 min",
        status: "Inativo",
      },
      {
        title: "Desvendando o Eu: A Importância dos Testes de Autoconhecimento",
        type: "Saúde mental",
        created_at: "22/06/2023",
        updated_at: "28/06/2023",
        time: "10 min",
        status: "Ativo",
      },
      {
        title: "Desvendando o Eu: A Importância dos Testes de Autoconhecimento",
        type: "Saúde mental",
        created_at: "22/06/2023",
        updated_at: "28/06/2023",
        time: "10 min",
        status: "Inativo",
      },
    ],
    []
  );

  const [tab, setTab] = useState(1);
  const tabsOptions = useMemo(() => ["Testes", "Princípios"], []);

  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin">
            Conteúdos
          </BackLink>
        }
        description="Visualize seus conteúdos e crie novos"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <div className="bg-white p-2 rounded-lg flex items-center flex-col md:flex-row">
            <Tabs
              className="w-full !gap-2"
              itemClassName="!text-gray-400 !p-2 !px-4"
              itemSelectedClassName="!text-primary !border-0 !bg-primary-100/80 !rounded-lg"
              value={tab}
              onChange={setTab}
              items={tabsOptions}
            />
          </div>
          <Card className="mt-4">
            <div className="flex w-full justify-between">
              <div className="flex flex-col">
                <h4 className="text-neutral-600 text-lg">{tabsOptions[tab]}</h4>
                <small className="text-neutral-400 text-sm">
                  {rows.length} {tabsOptions[tab]}
                </small>
              </div>
              <div className="ml-auto flex w-full md:w-5/12 gap-2">
                <input type="text" placeholder="Pesquisar" />
                <Link
                  href="/admin/content/create"
                  className="btn primary small w-6/12"
                >
                  Adicionar novo
                </Link>
              </div>
            </div>
            <div className="flex-row w-full gap-2 bg-gray-100 rounded-lg py-2 px-4 mb-6 hidden md:flex mt-10">
              <div className="w-4/12 flex items-center text-neutral-400 text-sm">
                Título
              </div>
              <div className="w-2/12 flex items-center text-neutral-400 text-sm">
                Criado em
              </div>
              <div className="w-2/12 flex items-center text-neutral-400 text-sm">
                Alterado em
              </div>
              <div className="w-2/12 flex items-center text-neutral-400 text-sm">
                Leitura
              </div>
              <div className="w-1/12 flex items-center text-neutral-400 text-sm">
                Status
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
  const badgeClass = useMemo(() => {
    const colors: any = {
      Ativo: "bg-primary-100/80 text-primary-500",
      Inativo: "bg-gray-100 text-gray-400",
    };
    return `${colors[row.status]} text-xs px-3 py-1 rounded-lg font-semibold`;
  }, [row.status]);

  return (
    <div className="flex flex-col md:flex-row w-full gap-2  border-b pb-6 md:pb-0 md:border-0 border-gray-100 mb-4 px-4">
      <div className="w-full md:w-4/12 flex items-center gap-6">
        <div className="flex flex-col justify-center">
          <strong className="text-neutral-600 text-sm">{row.title}</strong>
          <small className="text-neutral-400 text-xs">{row.type}</small>
        </div>
      </div>
      <div className="w-full md:w-2/12 flex text-sm font-semibold  text-neutral-600">
        {row.created_at}
      </div>
      <div className="w-full md:w-2/12 flex text-sm font-semibold  text-neutral-600">
        {row.updated_at}
      </div>
      <div className="w-full md:w-2/12  text-neutral-600 flex  text-sm font-semibold flex-row">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M14.8665 11.7864C14.8695 12.0645 14.7742 12.3348 14.5973 12.5494C14.4205 12.7641 14.1734 12.9094 13.8999 12.9597C12.1042 13.2515 10.3653 13.8228 8.74654 14.653C8.39627 14.7968 8.00348 14.7968 7.65321 14.653C6.03767 13.8319 4.31038 13.2524 2.52654 12.933C2.24866 12.8871 1.99616 12.7439 1.81418 12.529C1.6322 12.314 1.53261 12.0413 1.53321 11.7597V3.48635C1.53317 3.31353 1.57047 3.14274 1.64254 2.98566C1.71462 2.82858 1.81977 2.68892 1.95081 2.57624C2.08185 2.46356 2.23568 2.38052 2.40178 2.33278C2.56788 2.28505 2.74234 2.27376 2.91321 2.29969C4.58339 2.5545 6.19109 3.11979 7.65321 3.96635C7.81694 4.06935 8.00644 4.124 8.19987 4.124C8.39331 4.124 8.58281 4.06935 8.74654 3.96635C10.2042 3.12141 11.7999 2.54134 13.4599 2.25302C13.6326 2.22399 13.8095 2.2329 13.9784 2.27912C14.1473 2.32535 14.3041 2.40777 14.4379 2.52068C14.5718 2.63359 14.6795 2.77428 14.7535 2.93298C14.8275 3.09167 14.8661 3.26458 14.8665 3.43969V11.7864Z"
            fill="#3F3F46"
          />
          <path
            d="M13.4592 2.25302C11.7993 2.54134 10.2035 3.12141 8.74589 3.96635C8.58086 4.06591 8.39195 4.1189 8.19922 4.11969V14.7864C8.38713 14.7922 8.57397 14.7558 8.74589 14.6797C10.3647 13.8495 12.1035 13.2781 13.8992 12.9864C14.1774 12.9354 14.428 12.7862 14.6055 12.5659C14.7829 12.3457 14.8753 12.069 14.8659 11.7864V3.43969C14.8654 3.26458 14.8268 3.09167 14.7528 2.93298C14.6788 2.77428 14.5711 2.63359 14.4373 2.52068C14.3034 2.40777 14.1466 2.32535 13.9777 2.27912C13.8088 2.2329 13.6319 2.22399 13.4592 2.25302Z"
            fill="#3F3F46"
          />
          <path
            d="M5.35904 6.5H3.8457C3.71309 6.5 3.58592 6.44732 3.49215 6.35355C3.39838 6.25978 3.3457 6.13261 3.3457 6C3.3457 5.86739 3.39838 5.74021 3.49215 5.64645C3.58592 5.55268 3.71309 5.5 3.8457 5.5H5.35904C5.49164 5.5 5.61882 5.55268 5.71259 5.64645C5.80636 5.74021 5.85904 5.86739 5.85904 6C5.85904 6.13261 5.80636 6.25978 5.71259 6.35355C5.61882 6.44732 5.49164 6.5 5.35904 6.5Z"
            fill="#3F3F46"
          />
          <path
            d="M5.86719 8.5H3.86719C3.73458 8.5 3.6074 8.44732 3.51363 8.35355C3.41987 8.25978 3.36719 8.13261 3.36719 8C3.36719 7.86739 3.41987 7.74022 3.51363 7.64645C3.6074 7.55268 3.73458 7.5 3.86719 7.5H5.86719C5.9998 7.5 6.12697 7.55268 6.22074 7.64645C6.31451 7.74022 6.36719 7.86739 6.36719 8C6.36719 8.13261 6.31451 8.25978 6.22074 8.35355C6.12697 8.44732 5.9998 8.5 5.86719 8.5Z"
            fill="#3F3F46"
          />
        </svg>
        {row.time}
      </div>
      <div className="w-full md:w-1/12 flex text-left text-sm font-semibold flex-col">
        <div>
          <span className={badgeClass}>{row.status}</span>
        </div>
      </div>
      <div className="w-full md:w-1/12 flex  justify-end">
        <Link
          href={`/admin/patient/profile`}
          className="size-8 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer"
        >
          <AspectRatio src="/arrow-gray.svg" size={{ width: 16 }} />
        </Link>
      </div>
    </div>
  );
};
