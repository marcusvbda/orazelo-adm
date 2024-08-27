"use client";
import AspectRatio from "@/components/AspectRatio";
import Card from "@/components/Card";
import LinkCard from "@/components/LinkCard";
import Modal from "@/components/Modal";
import Navbar from "@/components/navbar";
import ScheduleCheckups from "@/components/ScheduleCheckups";
import Link from "next/link";
import { CSSProperties, ReactNode, useMemo } from "react";

const CardNewContent = () => {
  return (
    <Card
      className="!bg-primary-100 pr-32 px-6 py-8 flex flex-col gap-2 bg-[url('/new-content-card.svg')] bg-no-repeat bg-auto justify-center"
      style={{ backgroundPosition: "right 12px center" } as CSSProperties}
    >
      <h4 className="text-primary-500 text-xl font-semibold">
        Crie um novo conteúdo
      </h4>
      <div className="text-primary/50 text-sm w-8/12">
        Conteúdos mantém seu engajamento na plataforma.
      </div>
      <Link href="#" className="mt-auto flex items-center gap-2 font-semibold">
        Criar conteúdo
        <AspectRatio src="/arrow-blue.svg" size={{ height: 22 }} />
      </Link>
    </Card>
  );
};

const ScoreItem = ({ value, type, icon }: any) => {
  return (
    <div className="w-6/12 md:w-3/12 flex gap-4 items-center mb-4">
      <div className="bg-primary-100 size-12 min-w-12 rounded-lg flex items-center justify-center">
        <AspectRatio src={`/score-${icon}.svg`} size={{ height: 23 }} />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-neutral-600 font-bold mb-0">Nota {value}</h4>
        <small className="text-neutral-400 text-xs">{type}</small>
      </div>
    </div>
  );
};

const EditFeedback = ({ feedback }: any) => {
  return (
    <Modal
      source={
        <button className="border py-2 px-4 rounded-2xl text-sm text-neutral-600 flex items-center gap-2">
          {feedback.buttonLabel}
          <AspectRatio src="/arrow-right.svg" size={{ height: 20 }} />
        </button>
      }
      title="Visualização de feedback"
    >
      <div className="flex flex-col gap-6">
        <div className="w-full rounded-lg bg-gray-50 p-4 flex gap-6 items-center border border-gray-100">
          <div className="flex items-center justify-center size-28 rounded-full bg-gray-100">
            <AspectRatio src="/user-icon.svg" size={{ height: 68 }} />
          </div>
          <div className="flex flex-col gap-1">
            <strong className="text-neutral-700">{feedback.name}</strong>
            <small className="text-neutral-400 text-xs flex items-center gap-2">
              <AspectRatio src="/calendar-gray.svg" size={{ height: 24 }} />
              <strong className="font-semibold">Recebido em:</strong>
              {feedback.date}
            </small>
            <div className="flex mt-3">
              <span className="border-2 border-gray-300 border-dashed px-4 py-2 rounded-lg gap-1">
                <h4 className="text-neutral-700 font-bold text-lg mb-0">5</h4>
                <strong className="text-neutral-400 text-xs font-normal">
                  Nota geral
                </strong>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full rounded-lg bg-gray-50 p-4 flex flex-col gap-2 border border-gray-100">
          <strong className="text-neutral-700">Feedback recebido</strong>
          <small className="text-neutral-400 text-xs">
            Notas recebidas por categoria
          </small>
          <div className="mt-4 w-full flex flex-wrap">
            <ScoreItem value={8} type="Empatia" icon="empathy" />
            <ScoreItem value={7} type="Clareza na comunicação" icon="clarity" />
            <ScoreItem value={10} type="Escuta ativa" icon="active-listening" />
            <ScoreItem value={9} type="Pontualidade" icon="punctuality" />
            <ScoreItem value={8} type="Acolhimento" icon="reception" />
            <ScoreItem value={7} type="Confiança" icon="trust" />
            <ScoreItem value={10} type="Respeito" icon="respect" />
            <ScoreItem value={9} type="Progresso percebido" icon="progress" />
          </div>
        </div>

        <div className="w-full rounded-lg bg-gray-50 p-4 flex flex-col gap-2 border border-gray-100">
          <strong className="text-neutral-700">Mensagem</strong>
          <small className="text-neutral-400 text-xs">
            Mensagem enviada junto ao feedback
          </small>
          <div className="p-4 border border-gray-200 text-sm text-gray-400 mt-4 rounded-lg font-semibold">
            “Ótima empatia e clareza nas explicações. Tem me ajudado muito nesse
            processo de tratamento psicológico.”
          </div>
        </div>
      </div>
    </Modal>
  );
};

const FeedbackList = () => {
  const feedbacks = useMemo(
    () => [
      {
        name: "Anônimo",
        date: "28/07/2024",
        rating: "5 de 5",
        ratingLabel: "Nota geral",
        buttonLabel: "Visualizar",
      },
      {
        name: "Anônimo",
        date: "28/07/2024",
        rating: "5 de 5",
        ratingLabel: "Nota geral",
        buttonLabel: "Visualizar",
      },
      {
        name: "Anônimo",
        date: "28/07/2024",
        rating: "5 de 5",
        ratingLabel: "Nota geral",
        buttonLabel: "Visualizar",
      },
      {
        name: "Anônimo",
        date: "28/07/2024",
        rating: "5 de 5",
        ratingLabel: "Nota geral",
        buttonLabel: "Visualizar",
      },
      {
        name: "Anônimo",
        date: "28/07/2024",
        rating: "5 de 5",
        ratingLabel: "Nota geral",
        buttonLabel: "Visualizar",
      },
    ],
    []
  );

  return (
    <Card className="px-8 py-6 bg-center">
      <h4 className="text-neutral-600 text-lg mb-8">Feedbacks recebidos</h4>
      <div className="flex flex-col gap-6 mb-6">
        {feedbacks.map((feedback, key) => (
          <div
            className="flex flex-col md:flex-row w-full gap-4 border-b md:bottom-0 border-b-gray-100 md:border-none pb-6 md:pb-0"
            key={key}
          >
            <div className="w-full md:w-4/12 flex items-center gap-4">
              <div className="flex items-center justify-center size-10 rounded-full bg-gray-100">
                <AspectRatio src="/user-icon.svg" size={{ height: 24 }} />
              </div>
              <div className="flex flex-col">
                <strong className="text-neutral-600">{feedback.name}</strong>
                <small className="text-neutral-400 text-xs">
                  {feedback.date}
                </small>
              </div>
            </div>
            <div className="w-full md:w-4/12 flex justify-start md:justify-center items-center">
              <div>
                <div className="text-primary text-sm font-semibold">
                  {feedback.rating}
                </div>
                <div className="text-sm text-neutral-400">
                  {feedback.ratingLabel}
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 flex justify-start md:justify-end items-center">
              <EditFeedback feedback={feedback} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default function LoginPage(): ReactNode {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <div className="w-full flex-col md:flex-row flex gap-4">
            <div className="w-full md:w-5/12 flex flex-col gap-4">
              <CardNewContent />
              <LinkCard
                href="#"
                icon="/my-contents.svg"
                title="Meus conteúdos"
                description="Visualizar assessments, questionários e conteúdos"
              />
            </div>
            <div className="w-full md:w-7/12">
              <FeedbackList />
            </div>
          </div>
          <ScheduleCheckups />
        </div>
      </div>
    </div>
  );
}
