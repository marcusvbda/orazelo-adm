"use client";

import BackLink from "@/components/back-link";
import LinkCard from "@/components/LinkCard";
import Navbar from "@/components/navbar";
import ScheduleCheckupsToday from "@/components/ScheduleCheckupsToday";
import { ReactNode, useMemo, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Card from "@/components/Card";
import allLocales from "@fullcalendar/core/locales-all";
import Modal from "@/components/Modal";
import AspectRatio from "@/components/AspectRatio";
import Link from "next/link";
import Barchart from "@/components/Barchar";
import Tabs from "@/components/Tabs";

export default function MySchedulePage(): ReactNode {
  const [showSchedule, setShowSchedule] = useState(false);
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
              eventClick={() => setShowSchedule(true)}
              eventContent={(eventInfo: any) => {
                const hourStart =
                  eventInfo.event._instance.range.start.getHours();
                const minStart =
                  eventInfo.event._instance.range.start.getMinutes();
                return (
                  <div className="flex gap-2 items-center text-xs px-4 py-2 cursor-pointer flex-wrap">
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
      <Modal
        visible={showSchedule}
        source={<></>}
        title="Aprovação de consulta"
        cardClassName="max-h-screen overflow-y-auto"
        size="8/12"
      >
        <div className="w-full">
          <div className="w-full h-full flex-col gap-6 flex bg-gray-50 p-4 rounded-lg pb-4 mb-4">
            <div className="w-full flex gap-6">
              <ProfileAvatar />
              <div className="flex flex-col gap-2 flex-1">
                <h4 className="flex flex-col md:flex-row items-center gap-2 text-lg font-bold text-neutral-700 w-full">
                  <span className="order-1 md:order-0 flex items-center gap-1">
                    Dra. Vera Roberta
                    <AspectRatio src="/cert.svg" size={{ height: 21 }} />
                  </span>
                </h4>
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1 text-neutral-400 text-xs">
                    <AspectRatio src="/old-icon.svg" size={{ height: 14 }} />
                    38 anos
                  </div>
                  <div className="flex items-center gap-1 text-neutral-400 text-xs">
                    <AspectRatio src="/religion.svg" size={{ height: 14 }} />
                    Evangélica
                  </div>
                  <div className="flex items-center gap-1 text-neutral-400 text-xs">
                    <AspectRatio src="/email.svg" size={{ height: 14 }} />
                    ana.pereira@email.com.br
                  </div>
                </div>
                <div className="flex flex-col md:flex-row mt-3 gap-2 mt-auto">
                  <span className="border-2 border-gray-300 border-dashed px-4 py-2 rounded-lg gap-1">
                    <h4 className="text-neutral-700 font-bold text-lg mb-0">
                      4.5
                    </h4>
                    <strong className="text-neutral-400 text-xs font-normal">
                      Avaliação
                    </strong>
                  </span>
                </div>
              </div>
            </div>
            <Tabs
              className="w-full mb-2"
              value={0}
              onChange={() => null}
              items={["Visão geral"]}
            />
          </div>
          <div className="w-full flex flex-col gap-6 mb-4 bg-gray-50 p-4">
            <div className="w-full flex justify-between">
              <div className="flex flex-col">
                <h4 className="text-neutral-800 text-lg">
                  Emoções do paciente
                </h4>
                <small className="text-neutral-400">Emoções do dia-a-dia</small>
              </div>
              <div className="ml-auto">
                <div className="relative w-[250px]">
                  <div className="absolute  right-3 top-[13px]">
                    <AspectRatio
                      src="/calendar-gray.svg"
                      size={{ height: 20 }}
                    />
                  </div>
                  <input
                    type="text"
                    defaultValue="1 Jan 2024 - 22 Jul 2024"
                    className="text-gray-400 !pr-10 w-full"
                  />
                </div>
              </div>
            </div>
            <Barchart
              data={{
                jan: 3.5,
                fev: 3.2,
                mar: 4.2,
                abr: 4.5,
                mai: 2,
                jun: 4.95,
                jul: 2.5,
              }}
              callbackRenderAxisY={(value: any) => {
                return (
                  <AspectRatio
                    src={`/emotion-${value - 1}.svg`}
                    size={{ height: 16 }}
                  />
                );
              }}
            />
          </div>
          <div className="w-full flex justify-end gap-2">
            <button className="btn danger !px-10">Recusar</button>
            <button className="btn primary !px-10">Agendar</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

const ProfileAvatar = (): ReactNode => {
  return (
    <div className="hidden md:block h-40 w-[167px] min-h-40 min-w-[167px] relative">
      <div className="bg-[url('/user-2.svg')] w-full h-full bg-no-repeat bg-cover rounded-lg overflow-hidden" />
      <div className="size-4 bg-green-400 rounded-full absolute right-[-8px] bottom-8" />
    </div>
  );
};
