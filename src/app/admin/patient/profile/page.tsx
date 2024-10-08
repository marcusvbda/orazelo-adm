"use client";
import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Barchart from "@/components/Barchar";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import Tabs from "@/components/Tabs";
import Timeline from "@/components/Timeline";
import Link from "next/link";
import { ReactNode, useMemo, useState } from "react";

const ProfileAvatar = (): ReactNode => {
  return (
    <div className="hidden md:block h-40 w-[167px] min-h-40 min-w-[167px] relative">
      <div className="bg-[url('/user-4.svg')] w-full h-full bg-no-repeat bg-cover rounded-lg overflow-hidden" />
      <div className="size-4 bg-green-400 rounded-full absolute right-[-8px] bottom-8" />
    </div>
  );
};

const HeaderProfile = ({ children }: any): ReactNode => {
  return (
    <Card className="bg-contain bg-top flex flex-col">
      <div className="w-full h-full flex gap-6 border-b border-b-gray-200 pb-4 mb-4">
        <ProfileAvatar />
        <div className="flex flex-col gap-2 flex-1">
          <h4 className="flex flex-col md:flex-row items-center gap-2 text-lg font-bold text-neutral-700 w-full">
            <span className="order-1 md:order-0 flex items-center gap-1">
              Alan Silva
              <AspectRatio src="/cert.svg" size={{ height: 21 }} />
            </span>
            <div className="ml-0 md:ml-auto items-center justify-center flex gap-2 order-0 md:order-1">
              <Link href="#" className="btn small primary !px-10">
                Avaliar
              </Link>
            </div>
          </h4>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 text-neutral-400 text-xs">
              <AspectRatio src="/profession-icon.svg" size={{ height: 14 }} />
              Paciente desde Abril
            </div>
            <div className="flex items-center gap-1 text-neutral-400 text-xs">
              <AspectRatio src="/age-icon.svg" size={{ height: 14 }} />
              28 anos
            </div>
            <div className="flex items-center gap-1 text-neutral-400 text-xs">
              <AspectRatio src="/religion.svg" size={{ height: 14 }} />
              Evangélico
            </div>
            <div className="flex items-center gap-1 text-neutral-400 text-xs">
              <AspectRatio src="/email.svg" size={{ height: 14 }} />
              alan.silva@email.com.br
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 mt-auto">
            <span className="border-2 border-gray-300 border-dashed px-4 py-2 rounded-lg gap-1">
              <h4 className="text-neutral-700 font-bold text-lg mb-0">2</h4>
              <strong className="text-neutral-400 text-xs font-normal">
                Consultas agendadas
              </strong>
            </span>
            <span className="border-2 border-gray-300 border-dashed px-4 py-2 rounded-lg gap-1">
              <h4 className="text-neutral-700 font-bold text-lg mb-0">4.5</h4>
              <strong className="text-neutral-400 text-xs font-normal">
                Avaliações
              </strong>
            </span>
          </div>
        </div>
      </div>
      {children}
    </Card>
  );
};

const HistoryComponent = (): ReactNode => {
  const tasks = useMemo(
    () => [
      {
        text: "agendada pelo psicólogo",
        description: "Consulta completa",
        time: "22/07/2024 às 17:00",
      },
      {
        text: "agendada pelo psicólogo",
        description: "Consulta completa",
        time: "22/07/2024 às 17:00",
      },
      {
        text: "agendada pelo psicólogo",
        description: "Consulta completa",
        time: "22/07/2024 às 17:00",
      },
    ],
    []
  );

  return (
    <Card className="px-8 py-6 bg-center mt-4">
      <div className="flex flex-col mb-8">
        <h4 className="text-neutral-600 text-lg flex items-center justify-between">
          Histórico de consultas
        </h4>
        <small className="text-neutral-400 text-xs">
          Consultas recentes, passadas e futuras.
        </small>
      </div>
      <div className="flex flex-col gap-6 mb-6">
        {tasks.map((task, key) => (
          <div
            className="flex flex-row w-full gap-4 b-gray-100 border-b border-dashed border-gray-100 pb-4"
            key={key}
          >
            <div className="flex flex-col">
              <strong className="text-primary">{task.text}</strong>
              <strong className="text-neutral-600">{task.description}</strong>
              <small className="text-neutral-400 text-xs">{task.time}</small>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const TaskList = (): ReactNode => {
  return (
    <Card className="px-8 py-6 bg-center mt-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col mb-8">
          <h4 className="text-neutral-600 text-lg flex items-center justify-between">
            Tarefas ativas
          </h4>
          <small className="text-neutral-400 text-xs">
            2 tarefas ativas atualmente
          </small>
        </div>
        <button className="btn primary small">Adicionar novo</button>
      </div>
      <div className="flex flex-col gap-4 mb-6 w-full md:flex-row">
        <div className="w-full md:w-6/12 border border-gray-300 p-4 rounded-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col mb-8">
              <h4 className="text-neutral-600 text-lg flex items-center justify-between">
                Diário de Gratidão
              </h4>
              <small className="text-neutral-400 text-xs">
                Preencher Diário de Gratidão diariamente no aplicativo
              </small>
            </div>
            <div className="text-xs text-primary bg-primary-100/50 px-2 py-0.5 rounded-lg font-semibold">
              Ativo
            </div>
          </div>
          <div className="w-full flex justify-between gap-2 items-center">
            <div className="flex items-center gap-2">
              <AspectRatio src="/gray-calendar.svg" size={{ height: 24 }} />
              <span className="text-xs text-gray-400 mt-1 font-semibold">
                13/01/2023
              </span>
            </div>
            <div className="flex-1 h-[1px] bg-gray-200 mx-4" />
            <div className="flex items-center gap-2">
              <AspectRatio src="/warning-calendar.svg" size={{ height: 24 }} />
              <span className="text-xs text-[#FDBA74] mt-1 font-semibold">
                Amanha
              </span>
            </div>
          </div>
          <div className="w-full flex justify-between gap-2 items-center mt-6">
            <div className="flex-1 h-[6px] bg-[#D1FAE5] mr-4 relative overflow-hidden rounded-xl">
              <div className="h-full w-[65%] bg-[#059669]" />
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold">
              65%
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 border border-gray-300 p-4 rounded-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col mb-8">
              <h4 className="text-neutral-600 text-lg flex items-center justify-between">
                Emoções
              </h4>
              <small className="text-neutral-400 text-xs">
                Marcar emoções diariamente no aplicativo
              </small>
            </div>
            <div className="text-xs text-primary bg-primary-100/50 px-2 py-0.5 rounded-lg font-semibold">
              Ativo
            </div>
          </div>
          <div className="w-full flex justify-between gap-2 items-center">
            <div className="flex items-center gap-2">
              <AspectRatio src="/gray-calendar.svg" size={{ height: 24 }} />
              <span className="text-xs text-gray-400 mt-1 font-semibold">
                13/01/2023
              </span>
            </div>
            <div className="flex-1 h-[1px] bg-gray-200 mx-4" />
            <div className="flex items-center gap-2">
              <AspectRatio src="/danger-calendar.svg" size={{ height: 24 }} />
              <span className="text-xs text-[#D92D20] mt-1 font-semibold">
                Hoje
              </span>
            </div>
          </div>
          <div className="w-full flex justify-between gap-2 items-center mt-6">
            <div className="flex-1 h-[6px] bg-[#FFEDD5] mr-4 relative overflow-hidden rounded-xl">
              <div className="h-full w-[65%] bg-[#FDBA74]" />
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold">
              65%
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Emotions = (): ReactNode => {
  return (
    <div className="w-full md:w-6/12">
      <Card className="px-8 py-6 bg-center mt-4">
        <div className="w-full flex justify-between">
          <div className="flex flex-col mb-8">
            <h4 className="text-neutral-600 text-lg flex items-center justify-between">
              Emoções do paciente
            </h4>
            <small className="text-neutral-400 text-xs">
              Emoções do dia-a-dia
            </small>
          </div>
          <div className="ml-auto">
            <div className="relative w-[250px]">
              <div className="absolute  right-3 top-[13px]">
                <AspectRatio src="/calendar-gray.svg" size={{ height: 20 }} />
              </div>
              <input
                type="text"
                defaultValue="1 Jan 2024 - 22 Jul 2024"
                className="text-gray-400 !pr-10 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-6">
          <Barchart
            height={46}
            width={30}
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
      </Card>
    </div>
  );
};

const Notes = (): ReactNode => {
  const items = useMemo(
    () => [
      {
        pre: "Hoje",
        icon: "/timeline-warning.svg",
        iconClassName: "bg-white",
        title: "Paciente teve melhoras, demonstrou mais interesse na terapia.",
      },
      {
        pre: "01/07",
        icon: "/timeline-info.svg",
        iconClassName: "bg-white",
        title:
          "Houve encaminhamento para o psiquiatra, para que haja prescrição de medicamentos.",
      },
      {
        pre: "29/06",
        icon: "/timeline-danger.svg",
        iconClassName: "bg-white",
        title: "Comentou na terapia que tem tido pensamentos negativos.",
      },
      {
        pre: "21/06",
        icon: "/timeline-success.svg",
        iconClassName: "bg-white",
        title:
          "Paciente iniciou os tratamentos, demonstra pouco interesse em ser ajudado.",
      },
    ],
    []
  );
  return (
    <div className="w-full md:w-6/12">
      <Card className="px-8 py-6 bg-center mt-4">
        <div className="flex flex-col mb-8">
          <h4 className="text-neutral-600 text-lg flex items-center justify-between">
            Anotações
          </h4>
          <small className="text-neutral-400 text-xs">
            Anotações do psicólogo
          </small>
        </div>
        <div className="flex flex-col gap-6 mb-6">
          <Timeline titleClass="!text-neutral-400" size="20" items={items} />
        </div>
      </Card>
    </div>
  );
};

export default function PatienteProfile() {
  const [tab, setTab] = useState(0);
  const tabsOptions = useMemo(() => ["Visão geral"], []);

  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin/patient">
            Perfil do Paciente
          </BackLink>
        }
        description="Veja e edite suas informações pessoais e adicionais"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <HeaderProfile>
          <Tabs
            className="w-full mb-2"
            value={tab}
            onChange={setTab}
            items={tabsOptions}
          />
        </HeaderProfile>
        <TaskList />
        <div className="w-full flex flex-col md:flex-row gap-2">
          <Emotions />
          <Notes />
        </div>
        <HistoryComponent />
      </div>
    </div>
  );
}
