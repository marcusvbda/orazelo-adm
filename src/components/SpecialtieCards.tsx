"use client";

import Link from "next/link";
import { ReactNode, useMemo } from "react";
import Card from "./Card";
import Modal from "./Modal";
import AspectRatio from "./AspectRatio";

export const SpecialtiesForm = (): ReactNode => {
  return (
    <>
      <div className="flex flex-col gap-2 my-4">
        <label className="w-full md:w-5/12 text-neutral-600 text-sm">
          Título
        </label>
        <div className="w-full flex-col flex md:flex-row gap-2">
          <input type="text" className="text-gray-400" />
        </div>
      </div>
      <div className="flex flex-col gap-2 my-4">
        <label className="w-full md:w-5/12 text-neutral-600 text-sm">
          Título
        </label>
        <div className="w-full flex-col flex md:flex-row gap-2">
          <textarea rows={6} className="text-gray-400" />
        </div>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h4 className="text-lg font-bold">Documento</h4>
        <small className="text-neutral-400 font-sm">
          Faça upload de um documento, se julgar necessário.
        </small>
        <div className="w-full flex-col flex items-center justify-center gap-2 border border-dashed border-primary-300 bg-primary-100/50 p-10 rounded-lg">
          <AspectRatio src="/upload.svg" size={{ height: 64 }} />
          <small className="text-neutral-400 font-sm">
            Arraste um arquivo aqui ou selecione do seu computador
          </small>
        </div>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h4 className="text-lg font-bold">Imagem</h4>
        <small className="text-neutral-400 font-sm">
          Selecione uma de nossas imagens padrão abaixo. Essa imagem aparecerá
          tanto para você quanto para o paciente no app.
        </small>
        <div className="flex flex-wrap gap-4 justify-center">
          <AspectRatio src="/specialties-1.svg" size={{ height: 120 }} />
          <AspectRatio src="/specialties-2.svg" size={{ height: 120 }} />
          <AspectRatio src="/specialties-3.svg" size={{ height: 120 }} />
        </div>
      </div>
    </>
  );
};

const AddNew = (): ReactNode => {
  return (
    <Modal
      size="5/12"
      source={
        <button className="btn primary">
          <span className="hidden md:block">Adicionar novo</span>
        </button>
      }
      title="Adicionar nova"
      cardClassName="max-h-screen overflow-y-auto"
    >
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-bold">Informações da especialidade</h4>
        <small className="text-neutral-400 font-sm">
          Preencha abaixo as informações que você deseja incluir na
          especialidade adquirida
        </small>
        <SpecialtiesForm />
        <button className="btn primary self-end !px-10">Adicionar</button>
      </div>
    </Modal>
  );
};

const SpecialtiesCard = ({
  title,
  type,
  description,
  className,
}: any): ReactNode => {
  return (
    <Link href={`/admin/profile/specialties-edit`}>
      <Card
        className={`w-full h-full bg-right bg-no-repeat flex flex-col ${className}`}
      >
        <div className="text-sm mb-6 text-neutral-300">{type}</div>
        <div className="mt-auto text-sm text-primary">{title}</div>
        <div className="mt-2 text-neutral-800">{description}</div>
      </Card>
    </Link>
  );
};
export default function SpecialtiesCards(): ReactNode {
  const specialties = useMemo(
    () => [
      {
        type: "Curso",
        title: "Instituto Libano",
        description: "Especialização em TOC - Transtorno Obssessivo Compulsivo",
        className: "bg-[url(/specialties-course.svg)]",
      },
      {
        type: "Workshop",
        title: "IBAC",
        description: "Aumente seu impacto terapêutico - Mavis Tsai",
        className: "bg-[url(/specialties-workshop.svg)]",
      },
      {
        type: "Pós-Graduação",
        title: "PUC-RS",
        description: "Pós-Graduação em Terapia Cognitivo Comportamental",
        className: "bg-[url(/specialties-post-graduation.svg)]",
      },
      {
        type: "Curso",
        title: "UNISA",
        description: "Especialização em Psicologia Social",
        className: "bg-[url(/specialties-course.svg)]",
      },
      {
        type: "Workshop",
        title: "IBAC",
        description: "Aumente seu impacto terapêutico - Mavis Tsai",
        className: "bg-[url(/specialties-workshop.svg)]",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col mt-8">
      <div className="mb-8 flex items-center border-b-2 border-gray-200 pb-4">
        <div>
          <h4 className="text-neutral-600 text-lg">Especialidades</h4>
        </div>
        <div className="ml-auto">
          <AddNew />
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center -mx-2">
        {specialties.map((specialty: any, index: number) => (
          <div className="w-full md:w-4/12 p-2" key={index}>
            <SpecialtiesCard
              type={specialty.type}
              title={specialty.title}
              description={specialty.description}
              className={specialty.className}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
