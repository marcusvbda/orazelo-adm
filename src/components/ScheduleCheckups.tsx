"use client";
import { ReactNode, useMemo } from "react";
import Card from "./Card";
import Link from "next/link";
import AspectRatio from "./AspectRatio";
import Modal from "./Modal";

interface IScheduleCheckupRow {
  avatar: string;
  name: string;
  age: number;
  date: string;
  religion: string;
  preference: string;
  status: string;
}

const ScheduleCheckupRow = ({
  avatar,
  name,
  age,
  date,
  religion,
  preference,
  status,
}: IScheduleCheckupRow) => {
  const badgeClass = useMemo(() => {
    const colors: any = {
      Agendada: "bg-primary-100/80 text-primary-500",
      "Em análise": "bg-orange-100 text-orange-500",
      Finalizada: "bg-green-100 text-green-600",
      Recusada: "bg-red-100 text-red-600",
    };
    return `${colors[status]} text-xs px-3 py-1 rounded-lg font-semibold`;
  }, [status]);

  return (
    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-0 border-b pb-6 md:pb-0 md:border-0 border-gray-100">
      <div className="w-full md:w-4/12 flex items-center gap-6">
        <div className="flex items-end justify-center size-[50px] rounded-full bg-gray-100">
          <AspectRatio src={avatar} size={{ height: 40 }} />
        </div>
        <div className="flex flex-col justify-center">
          <strong className="text-neutral-600 text-sm">{name}</strong>
          <small className="text-neutral-400 text-xs">
            {age} ano{age > 1 && "s"}
          </small>
        </div>
      </div>
      <div className="w-full md:w-2/12 flex text-sm font-semibold items-center text-neutral-600">
        {date}
      </div>
      <div className="w-full md:w-2/12 flex text-sm font-semibold items-center text-neutral-600">
        {religion}
      </div>
      <div className="w-full md:w-2/12 flex text-primary items-center text-sm font-semibold">
        {preference}
      </div>
      <div className="w-full md:w-2/12 flex items-center">
        <span className={badgeClass}>{status}</span>
      </div>
    </div>
  );
};

export const NewScehdule = ({ source }: any) => {
  return (
    <Modal
      source={source}
      title="Adicionar nova consulta"
      cardClassName="max-h-screen overflow-y-auto"
    >
      <div className="flex flex-col gap-4 px-4">
        <div className="flex flex-col gap-2">
          <label className="w-full md:w-5/12 text-neutral-600 text-sm">
            Paciente
          </label>
          <div className="w-full flex-col flex md:flex-row gap-2">
            <div className="relative w-full">
              <div className="absolute size-6 bg-primary-100 min-w-6 min-h-6 text-primary flex items-center justify-center rounded-full left-2 top-[10px] text-sm font-bold">
                A
              </div>
              <select className="pl-10 w-full">
                <option>Ana Paula Ribeiro</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="w-full md:w-5/12 text-neutral-600 text-sm">
            Titulo
          </label>
          <div className="w-full flex-col flex md:flex-row gap-2">
            <input
              type="text"
              defaultValue="Retorno Psicologia"
              className="text-gray-400"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-full md:w-6/12 flex flex-col gap-2">
            <label className="w-full md:w-5/12 text-neutral-600 text-sm">
              Data da consulta
            </label>
            <div className="w-full flex-col flex md:flex-row gap-2">
              <div className="relative w-full">
                <div className="absolute  left-3 top-[13px]">
                  <AspectRatio src="/calendar-gray.svg" size={{ height: 20 }} />
                </div>
                <input
                  type="date"
                  defaultValue="2024-07-19"
                  className="text-gray-400 !pl-10 w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12  flex flex-col gap-2">
            <label className="w-full md:w-5/12 text-neutral-600 text-sm">
              Horário da consulta
            </label>
            <input
              type="time"
              defaultValue="09:00"
              className="text-gray-400 "
            />
          </div>
        </div>
        <div className="flex gap-4 justify-between mt-4 flex-col md:flex-row">
          <button className="btn gray order-0 md:order-1 w-full md:w-auto">
            Cancelar
          </button>
          <button className="btn primary !px-14 w-full order-0 md:order-1 md:w-auto">
            Adicionar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default function ScheduleCheckups(): ReactNode {
  const scheduleData = useMemo(
    () => [
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        age: 22,
        date: "08/07/2024",
        religion: "Evangélico",
        preference: "Sim",
        status: "Agendada",
      },
      {
        avatar: "/examples/user-2.svg",
        name: "Ana Pereira",
        age: 28,
        date: "06/07/2024",
        religion: "Católico",
        preference: "Não",
        status: "Em análise",
      },
      {
        avatar: "/examples/user-3.svg",
        name: "Paulo Simão",
        age: 19,
        date: "01/07/2024",
        religion: "Evangelico",
        preference: "Não",
        status: "Finalizada",
      },
      {
        avatar: "/examples/user-4.svg",
        name: "Natália Ferraz",
        age: 53,
        date: "28/06/2024",
        religion: "Espirita",
        preference: "Não",
        status: "Recusada",
      },
    ],
    []
  );

  return (
    <Card className="px-8 py-6 bg-center">
      <div className="mb-8 flex items-center">
        <div>
          <h4 className="text-neutral-600 text-lg">Consultas agendadas</h4>
          <small className="text-neutral-400 text-sm">28 novas consultas</small>
        </div>
        <div className="ml-auto">
          <NewScehdule
            source={
              <button className="btn primary">
                <AspectRatio src="/calendar-color.svg" size={{ height: 20 }} />
                <span className="hidden md:block">Nova consulta</span>
              </button>
            }
          />
        </div>
      </div>
      <div className="flex-row w-full gap-2 bg-gray-100 rounded-lg py-2 px-4 mb-6 hidden md:flex">
        <div className="w-4/12 flex items-center text-neutral-400 text-sm">
          Paciente
        </div>
        <div className="w-2/12 flex items-center text-neutral-400 text-sm">
          Data
        </div>
        <div className="w-2/12 flex items-center text-neutral-400 text-sm">
          Religião
        </div>
        <div className="w-2/12 flex items-center text-neutral-400 text-sm">
          Preferência
        </div>
        <div className="w-2/12 flex items-center text-neutral-400 text-sm">
          Status
        </div>
      </div>
      <div className="flex flex-col gap-8 mb-6 px-0 md:px-4">
        {scheduleData.map((item, index) => (
          <ScheduleCheckupRow
            key={index}
            avatar={item.avatar}
            name={item.name}
            age={item.age}
            date={item.date}
            religion={item.religion}
            preference={item.preference}
            status={item.status}
          />
        ))}
      </div>
    </Card>
  );
}
