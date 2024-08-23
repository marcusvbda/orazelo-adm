"use client";
import AspectRatio from "@/components/AspectRatio";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

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

const FeedbackList = () => {
  return (
    <Card className="px-8 py-6 bg-center">
      <h4 className="text-neutral-600 mb-8">Feedbacks recebidos</h4>
      <div className="flex flex-col gap-6 mb-6">
        {Array.from({ length: 5 }).map((_, key: number) => (
          <div className="flex flex-row w-full gap-4" key={key}>
            <div className="w-4/12 flex items-center gap-4">
              <div className="flex items-center justify-center size-10 rounded-full bg-gray-100">
                <AspectRatio src="/user-icon.svg" size={{ height: 24 }} />
              </div>
              <div className="flex flex-col">
                <strong className="text-neutral-600">Anônimo</strong>
                <small className="text-neutral-400 text-xs">28/07/2024</small>
              </div>
            </div>
            <div className="w-4/12 flex justify-center items-center">
              <div>
                <div className="text-primary text-sm font-semibold">5 de 5</div>
                <div className="text-sm text-neutral-400">Nota geral</div>
              </div>
            </div>
            <div className="w-4/12 flex justify-end items-center">
              <button className="border py-2 px-4 rounded-2xl text-sm text-neutral-600 flex items-center gap-2">
                Visualizar
                <AspectRatio src="/arrow-right.svg" size={{ height: 20 }} />
              </button>
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
              <CardMyContent />
            </div>
            <div className="w-full md:w-7/12">
              <FeedbackList />
            </div>
          </div>
          <Card className="bg-[url('/mock/dashboard/dashboard-table.svg')] bg-no-repeat bg-contain min-h-[484px] bg-center mocked"></Card>
        </div>
      </div>
    </div>
  );
}
