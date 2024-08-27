"use client";
import { ReactNode, useMemo } from "react";
import Card from "./Card";
import AspectRatio from "./AspectRatio";
import Timeline, { TimelineTitle } from "./Timeline";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import DropMenu, { DropMenuItem } from "./DropMenu";

export const TimelineMenu = () => {
  const router = useRouter();
  return (
    <DropMenu
      source={
        <div className="cursor-pointer size-6 bg-gray-200 rounded-lg flex items-center justify-center">
          <AspectRatio src="/etc.svg" size={{ width: 10 }} />
        </div>
      }
    >
      <DropMenuItem
        onClick={() => router.push("/admin/profile/qualification-edit")}
      >
        Editar
      </DropMenuItem>
      <DropMenuItem>Excluir</DropMenuItem>
    </DropMenu>
  );
};

export const QualificationForm = ({ mode = "create" }: any) => {
  return (
    <>
      <div className="flex flex-col gap-2 my-4">
        <label className="w-full md:w-5/12 text-neutral-600 text-sm">
          Título
        </label>
        <div className="w-full flex-col flex md:flex-row gap-2">
          <input
            type="text"
            value={
              mode == "edit"
                ? "Especialização em TOC - Transtorno Obssessivo Compulsivo"
                : ""
            }
            className="text-gray-400"
          />
        </div>
      </div>
      {mode === "create" && (
        <>
          <div className="flex flex-col gap-2 my-4">
            <label className="w-full md:w-5/12 text-neutral-600 text-sm">
              Instituição/Empresa
            </label>
            <div className="w-full flex-col flex md:flex-row gap-2">
              <input
                type="text"
                value="Instituto Líbano"
                className="text-gray-400"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 my-4">
            <label className="w-full md:w-5/12 text-neutral-600 text-sm">
              Tipo
            </label>
            <div className="w-full flex-col flex md:flex-row gap-2">
              <select value="Curso" className="text-gray-400">
                <option value="Curso">Curso</option>
              </select>
            </div>
          </div>
        </>
      )}
      <div className="flex flex-col gap-2 my-4">
        <label className="w-full md:w-5/12 text-neutral-600 text-sm">
          Descrição
        </label>
        <div className="w-full flex-col flex md:flex-row gap-2">
          <textarea
            rows={6}
            className="text-gray-400"
            value={
              mode == "edit"
                ? "Auxiliar a Equipe de Orientação Educacional e auxiliar a Coordenação Pedagógica."
                : ""
            }
          />
        </div>
      </div>
      <div className="flex flex-col my-4">
        <label className="w-full md:w-5/12 text-neutral-600 text-sm">
          Periodo
        </label>
        <div className="w-full flex-col flex md:flex-row gap-2">
          <div className="flex flex-col w-6/12 gap-2">
            <label className="w-full md:w-5/12 text-neutral-800 text-sm">
              Início
            </label>
            <div className="w-full flex-col flex md:flex-row gap-2">
              <select value="2024" className="text-gray-400">
                <option>-</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col w-6/12 gap-2">
            <label className="w-full md:w-5/12 text-neutral-800 text-sm">
              Termino
            </label>
            <div className="w-full flex-col flex md:flex-row gap-2">
              <select className="text-gray-400">
                <option>-</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>
        </div>
        <label className="mt-4 text-neutral-500 text-sm flex gap-2 items-center cursor-pointer">
          <input type="checkbox" />
          Concluído
        </label>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h4 className="text-lg font-bold">Documento</h4>
        <small className="text-neutral-400 font-sm">
          Faça upload de um documento, se julgar necessário.
        </small>
        <div
          className={`w-full flex-col flex items-center justify-center gap-2 border border-dashed ${
            mode === "create"
              ? "border-primary-300 bg-primary-100/50"
              : "border-gray-300"
          } p-10 rounded-lg`}
        >
          {mode === "create" && (
            <>
              <AspectRatio src="/upload.svg" size={{ height: 64 }} />
              <small className="text-neutral-400 font-sm">
                Arraste um arquivo aqui ou selecione do seu computador
              </small>
            </>
          )}
          {mode === "edit" && (
            <div className="flex flex-row gap-4 items-center">
              <AspectRatio src="/pdf.svg" size={{ height: 64 }} />
              <div className="flex flex-col gap-2">
                <strong>Defesa - A1</strong>
                <small className="text-neutral-400 font-sm">1GB</small>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default function QualificationsCard(): ReactNode {
  const items = useMemo(
    () => [
      {
        icon: "/primary-plus.svg",
        iconClassName: "bg-primary-100",
        title: (
          <Modal
            size="5/12"
            source={
              <TimelineTitle
                title="Adicionar nova"
                description="Adicione uma nova qualificação"
              />
            }
            title="Adicionar nova"
            cardClassName="max-h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold">Informações da qualificação</h4>
              <small className="text-neutral-400 font-sm">
                Preencha abaixo as informações que você deseja incluir na
                qualificação
              </small>
              <QualificationForm />
              <button className="btn primary self-end !px-10">Adicionar</button>
            </div>
          </Modal>
        ),
      },
      {
        icon: "/icon-toc.svg",
        post: <TimelineMenu />,
        title: (
          <TimelineTitle
            title="Especialização em TOC"
            description={
              <>
                2024 - <span className="text-primary">Instituto Líbano</span>
              </>
            }
          />
        ),
      },
      {
        icon: "/post-icon.svg",
        post: <TimelineMenu />,
        title: (
          <TimelineTitle
            title="Pós Graduação - PUC"
            description={
              <>
                2023 - <span className="text-primary">Cursando</span>
              </>
            }
          />
        ),
        body: (
          <div className="bg-gray-100 border border-gray-200 rounded-lg w-full p-4 flex flex-col md:flex-row gap-10 px-10">
            <div className="flex flex-row gap-4 items-center">
              <AspectRatio src="/pdf.svg" size={{ height: 64 }} />
              <div className="flex flex-col gap-2">
                <strong>Defesa - A1</strong>
                <small className="text-neutral-400 font-sm">1.2mb</small>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <AspectRatio src="/doc.svg" size={{ height: 64 }} />
              <div className="flex flex-col gap-2">
                <strong>Defesa - A2</strong>
                <small className="text-neutral-400 font-sm">8kb</small>
              </div>
            </div>
          </div>
        ),
      },
      {
        icon: "/library-icon.svg",
        post: <TimelineMenu />,
        title: (
          <TimelineTitle
            title="Bacharelado em Psicologia - Universidade Paulista UNIP"
            description="2015 - 2019"
          />
        ),
      },
    ],
    []
  );

  return (
    <Card>
      <>
        <div className="mb-8 flex items-center border-b-2 border-gray-200 pb-4">
          <div>
            <h4 className="text-neutral-600 text-lg flex items-center gap-4">
              <AspectRatio src="/qualifications.svg" size={{ width: 24 }} />
              Qualificações
            </h4>
          </div>
        </div>
        <Timeline items={items} />
        <div className="bg-gray-100 border border-gray-200 rounded-lg w-full p-4 flex flex-col items-center justify-between md:flex-row gap-10 px-10 mt-10">
          <div className="text-sm text-neutral-600">
            Estágio em Psicologia Organizacional
          </div>
          <div className="p-1 px-2 rounded-lg bg-gray-200 text-gray-400 font-semibold text-xs">
            6 meses
          </div>
          <div className="p-1 px-2 rounded-lg bg-green-200 text-green-700 font-semibold text-xs">
            6 Completo
          </div>
        </div>
      </>
    </Card>
  );
}
