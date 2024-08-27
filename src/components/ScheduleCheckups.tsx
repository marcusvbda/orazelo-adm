"use client";
import { ReactNode, useMemo } from "react";
import Card from "./Card";
import Link from "next/link";
import AspectRatio from "./AspectRatio";

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

        <Link href="#" className="btn primary ml-auto">
          <AspectRatio src="/calendar-color.svg" size={{ height: 20 }} />
          <span className="hidden md:block">Nova consulta</span>
        </Link>
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
