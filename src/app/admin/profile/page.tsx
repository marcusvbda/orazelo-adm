"use client";

import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import LinkCard from "@/components/LinkCard";
import Navbar from "@/components/navbar";
import ProfessionalExperiences from "@/components/ProfessionalExperiences";
import QualificationsCard from "@/components/QualificationCard";
import ScheduleCheckups from "@/components/ScheduleCheckups";
import SpecialtiesCards from "@/components/SpecialtieCards";
import Tabs from "@/components/Tabs";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useMemo, useState } from "react";

const ProfileAvatar = (): ReactNode => {
  return (
    <div className="hidden md:block h-40 w-[167px] min-h-40 min-w-[167px] relative">
      <div className="bg-[url('/user-1.svg')] w-full h-full bg-no-repeat bg-cover rounded-lg overflow-hidden" />
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
              Dra. Vera Roberta
              <AspectRatio src="/cert.svg" size={{ height: 21 }} />
            </span>
            <div className="ml-0 md:ml-auto items-center justify-center flex gap-2 order-0 md:order-1">
              <a href="/admin/profile/edit" className="btn small gray">
                Editar
              </a>
              <Link href="#" className="btn small primary">
                Configurações
              </Link>
            </div>
          </h4>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 text-neutral-400 text-xs">
              <AspectRatio src="/profession-icon.svg" size={{ height: 14 }} />
              Terapia analítico-comportamental
            </div>
            <div className="flex items-center gap-1 text-neutral-400 text-xs">
              <AspectRatio src="/religion.svg" size={{ height: 14 }} />
              Evangélica
            </div>
            <div className="flex items-center gap-1 text-neutral-400 text-xs">
              <AspectRatio src="/email.svg" size={{ height: 14 }} />
              vera.roberta@gmail.com
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-3 gap-2 mt-auto">
            <span className="border-2 border-gray-300 border-dashed px-4 py-2 rounded-lg gap-1">
              <h4 className="text-neutral-700 font-bold text-lg mb-0">18</h4>
              <strong className="text-neutral-400 text-xs font-normal">
                Consultas agendadas
              </strong>
            </span>
            <span className="border-2 border-gray-300 border-dashed px-4 py-2 rounded-lg gap-1">
              <h4 className="text-neutral-700 font-bold text-lg mb-0">17</h4>
              <strong className="text-neutral-400 text-xs font-normal">
                Princípios
              </strong>
            </span>
            <span className="border-2 border-gray-300 border-dashed px-4 py-2 rounded-lg gap-1">
              <h4 className="text-neutral-700 font-bold text-lg mb-0">8</h4>
              <strong className="text-neutral-400 text-xs font-normal">
                Exercícios
              </strong>
            </span>
          </div>
        </div>
      </div>
      {children}
    </Card>
  );
};

const TaskLists = (): ReactNode => {
  const tasks = useMemo(
    () => [
      {
        name: "Avaliar",
        author: "Júlio Alves",
      },
      {
        name: "Prescrever",
        author: "Noemia Antunes",
      },
      {
        name: "Avaliar",
        author: "Laura Ferreira",
      },
      {
        name: "Prescrever",
        author: "Júlio Alves",
      },
      {
        name: "Avaliar",
        author: "Noemia Antunes",
      },
    ],
    []
  );

  return (
    <Card className="px-8 py-6 bg-center">
      <h4 className="text-neutral-600 text-lg mb-8 flex items-center justify-between">
        Tarefas
        <Link
          href="#"
          className="size-8 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer"
        >
          <AspectRatio src="/etc.svg" size={{ width: 10 }} />
        </Link>
      </h4>
      <div className="flex flex-col gap-2 mb-6">
        {tasks.map((task, key) => (
          <div
            className="flex flex-row w-full gap-4 b-gray-100 md:border-none pb-6 md:pb-0"
            key={key}
          >
            <div className="w-10/12 flex items-center gap-4">
              <div className="flex flex-col">
                <strong className="text-neutral-600">{task.name}</strong>
                <small className="text-neutral-400 text-xs">
                  {task.author}
                </small>
              </div>
            </div>
            <div className="w-2/12 flex justify-end items-center">
              <Link
                href="#"
                className="size-8 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer"
              >
                <AspectRatio src="/arrow-gray.svg" size={{ width: 16 }} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default function ProfilePage(): ReactNode {
  const [tab, setTab] = useState(0);
  const tabsOptions = useMemo(
    () => ["Visão geral", "Qualificações", "Experiências", "Especialidades"],
    []
  );

  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin">
            Perfil
          </BackLink>
        }
        description="Veja e edite suas informações pessoais e adicionais"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <HeaderProfile>
            <Tabs
              className="w-full mb-2"
              value={tab}
              onChange={setTab}
              items={tabsOptions}
            />
          </HeaderProfile>
          {tab === 0 && (
            <>
              <div className="w-full flex-col md:flex-row flex gap-4">
                <div className="w-full md:w-7/12 flex-col md:flex-row flex gap-4">
                  <TaskLists />
                </div>
                <div className="w-full md:w-5/12 flex flex-col gap-4">
                  <LinkCard
                    className="flex-1"
                    href="#"
                    icon="/my-contents.svg"
                    title="Meus conteúdos"
                    description="Visualizar assessments, questionários e conteúdos"
                  />
                  <LinkCard
                    href="#"
                    className="flex-1"
                    icon="/calendar-color.svg"
                    title="Minhas consultas"
                    description="Visualizar histórico de consultas e próximas consultas"
                  />
                </div>
              </div>
              <ScheduleCheckups />
            </>
          )}
          {tab === 1 && <QualificationsCard></QualificationsCard>}
          {tab === 2 && <ProfessionalExperiences></ProfessionalExperiences>}
          {tab === 3 && <SpecialtiesCards />}
        </div>
      </div>
    </div>
  );
}
