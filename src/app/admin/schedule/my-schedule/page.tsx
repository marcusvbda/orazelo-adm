"use client";

import BackLink from "@/components/back-link";
import LinkCard from "@/components/LinkCard";
import Navbar from "@/components/navbar";
import ScheduleCheckupsToday from "@/components/ScheduleCheckupsToday";
import { ReactNode, useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Card from "@/components/Card";
import allLocales from "@fullcalendar/core/locales-all";

export default function MySchedulePage(): ReactNode {
  const events = useMemo(() => {
    return Array.from({ length: 50 }, () => {
      const year = new Date().getFullYear();
      const month = new Date().getMonth(); // Mês atual (0-indexed)
      const day = Math.floor(Math.random() * 30) + 1; // Dia aleatório entre 1 e 30
      const hour = Math.floor(Math.random() * 8) + 9; // Hora aleatória entre 09:00 e 17:00
      const start = new Date(year, month, day, hour, 0, 0);
      const end = new Date(start.getTime() + 60 * 60 * 1000); // 1 hora depois

      return {
        title: "Consulta Aleatória",
        start: start.toISOString(),
        end: end.toISOString(),
      };
    });
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin/schedule">
            Consultas e Agendamentos
          </BackLink>
        }
        description="Verifique suas consultas agendadas e agende novas"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <div className="w-full flex-col md:flex-row flex gap-4">
            <div className="w-full md:w-5/12 flex flex-col gap-4">
              <LinkCard
                href="#"
                icon="/calendar-color-2.svg"
                title="3 Consultas"
                description="Média de consultas por dia"
                classColor="!bg-primary-700"
              />
              <LinkCard
                href="#"
                icon="/user-color.svg"
                title="10"
                description="Média de pacientes no mês"
                classColor="!bg-primary-200"
                titleClassName="!text-primary-700"
                descriptionClassName="!text-primary-700"
              />
            </div>
            <div className="w-full md:w-7/12">
              <ScheduleCheckupsToday />
            </div>
          </div>
          <Card className="px-8 py-6 custom-full-calendar">
            <FullCalendar
              locales={allLocales}
              locale="pt-br"
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              headerToolbar={{
                left: "prev next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              eventContent={(eventInfo: any) => {
                const hourStart =
                  eventInfo.event._instance.range.start.getHours();
                const minStart =
                  eventInfo.event._instance.range.start.getMinutes();
                return (
                  <div className="flex gap-2 items-center text-xs px-4">
                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                    <div className="text-gray-400">
                      {hourStart.toString().padStart(2, "0")}:
                      {minStart.toString().padStart(2, "0")}
                    </div>
                    <div className="text-gray-600">{eventInfo.event.title}</div>
                  </div>
                );
              }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
