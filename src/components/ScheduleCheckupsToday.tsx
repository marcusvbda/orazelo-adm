"use client";
import { ReactNode, useMemo } from "react";
import Card from "./Card";
import AspectRatio from "./AspectRatio";
import Link from "next/link";

interface IScheduleCheckupRow {
  avatar: string;
  name: string;
  age: number;
  schedule: string;
}

const ScheduleCheckupRow = ({
  avatar,
  name,
  age,
  schedule,
}: IScheduleCheckupRow) => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-0 border-b pb-6 md:pb-0 md:border-0 border-gray-100">
      <div className="w-full md:w-8/12 flex items-center gap-6">
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
      <div className="w-full md:w-4/12 flex items-center">
        <span className="bg-primary-100/80 text-primary-500 text-xs flex items-center py-1 px-2 rounded-lg">
          {schedule}
        </span>
        <Link
          href="/admin/schedule/my-schedule/chat"
          className="size-7 flex items-center justify-center bg-gray-100 rounded-lg ml-auto"
        >
          <AspectRatio src="/arrow-gray.svg" size={{ height: 16 }} />
        </Link>
      </div>
    </div>
  );
};

export default function ScheduleCheckupsToday(): ReactNode {
  const scheduleData = useMemo(
    () => [
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        age: 22,
        schedule: "14:00 - 16:00",
      },
      {
        avatar: "/examples/user-2.svg",
        name: "Ana Pereira",
        age: 28,
        schedule: "14:00 - 16:00",
      },
      {
        avatar: "/examples/user-3.svg",
        name: "Paulo Simão",
        age: 19,
        schedule: "14:00 - 16:00",
      },
    ],
    []
  );

  return (
    <Card className="px-8 py-6 bg-center">
      <div className="mb-8 flex items-center">
        <div>
          <h4 className="text-neutral-600 text-lg">Consultas de hoje</h4>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-6 px-0">
        {scheduleData.map((item, index) => (
          <ScheduleCheckupRow
            key={index}
            avatar={item.avatar}
            name={item.name}
            age={item.age}
            schedule={item.schedule}
          />
        ))}
      </div>
    </Card>
  );
}
