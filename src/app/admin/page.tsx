"use client";
import AspectRatio from "@/components/AspectRatio";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Navbar from "@/components/navbar";
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

const CardMyContent = () => {
  return (
    <Link href="#">
      <Card
        className="!bg-primary-500 p-6 flex flex-col gap-2 justify-center"
        style={{ backgroundPosition: "right 12px center" } as CSSProperties}
      >
        <AspectRatio src="/my-contents.svg" size={{ width: 30 }} />
        <h4 className="text-white text-xl font-semibold">Meus conteúdos</h4>
        <div className="text-white text-sm">
          Visualizar assessments, questionários e conteúdos
        </div>
      </Card>
    </Link>
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

const ScheduleCheckups = () => {
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

        <Link
          href="#"
          className="bg-primary flex items-center rounded-3xl px-4 py-3 text-sm text-white font-semibold gap-2 ml-auto"
        >
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
              <CardMyContent />
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
