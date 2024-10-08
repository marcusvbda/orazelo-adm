"use client";

import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Navbar from "@/components/navbar";
import { useMemo } from "react";

export default function FaqRequestPage() {
  const rows = useMemo(() => {
    return [
      {
        subject: "Não me tornei VIP após completar tarefas",
        type: "Sistema",
        date: "22/06/2023",
        time: "15:45",
        status: "Enviada",
      },
      {
        subject: "Erro ao tentar efetuar pagamento",
        type: "Financeiro",
        date: "25/06/2023",
        time: "10:30",
        status: "Em análise",
      },
      {
        subject: "Problema de conexão no aplicativo",
        type: "Sistema",
        date: "30/06/2023",
        time: "08:20",
        status: "Finalizada",
      },
      {
        subject: "Item comprado não foi entregue",
        type: "Compras",
        date: "02/07/2023",
        time: "14:50",
        status: "Recusada",
      },
      {
        subject: "Dificuldade para acessar minha conta",
        type: "Sistema",
        date: "05/07/2023",
        time: "12:15",
        status: "Enviada",
      },
      {
        subject: "Cobrança duplicada no cartão",
        type: "Financeiro",
        date: "07/07/2023",
        time: "09:10",
        status: "Em análise",
      },
      {
        subject: "Erro no cálculo do frete",
        type: "Compras",
        date: "10/07/2023",
        time: "16:05",
        status: "Finalizada",
      },
      {
        subject: "Aplicativo fecha sozinho",
        type: "Sistema",
        date: "12/07/2023",
        time: "17:45",
        status: "Recusada",
      },
      {
        subject: "Não consigo alterar meu endereço",
        type: "Sistema",
        date: "15/07/2023",
        time: "11:20",
        status: "Em análise",
      },
      {
        subject: "Demora na entrega de produtos",
        type: "Compras",
        date: "20/07/2023",
        time: "13:35",
        status: "Enviada",
      },
    ];
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin/faq">
            Suporte e ajuda
          </BackLink>
        }
        description="Acesse as perguntas frequentes, tutorias e entre em contato conosco"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container flex flex-col gap-2">
        <Card className="!bg-primary-50 mt-4 flex flex-row py-6">
          <div className="flex-1 py-54">
            <h4 className="text-primary text-lg text-left w-full font-semibold">
              Ainda tem dúvidas? Entre em contato conosco.
            </h4>
            <small className="text-primary/50">
              Clique no botão ao lado, preencha o formulário e entraremos em
              contato com você pelo e-mail fornecido
            </small>
          </div>
          <div>
            <NewRequest />
          </div>
        </Card>

        <Card className="px-8 py-6 bg-center mt-6">
          <div className="mb-8 flex items-center">
            <div>
              <h4 className="text-neutral-600 text-lg">
                Histórico de solicitações
              </h4>
              <small className="text-neutral-400 text-sm">
                {rows.length}{" "}
                {rows.length === 1 ? "nova solicitação" : "solicitações"}
              </small>
            </div>
            <div className="ml-auto flex gap-1 w-full md:w-3/12">
              <select>
                <option>Esse mês de Julho</option>
              </select>
            </div>
          </div>
          <div className="flex-row w-full gap-2 bg-gray-100 rounded-lg py-2 px-4 mb-6 hidden md:flex">
            <div className="w-5/12 flex items-center text-neutral-400 text-sm">
              Assunto
            </div>
            <div className="w-3/12 flex items-center text-neutral-400 text-sm">
              Data
            </div>
            <div className="w-2/12 flex items-center text-neutral-400 text-sm">
              Status
            </div>
            <div className="w-2/12 flex items-center text-neutral-400 text-sm" />
          </div>
          <div className="flex flex-col gap-8 mb-6 px-0 md:px-4">
            {rows.map((item, index) => (
              <TableRow key={index} row={item} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

const TableRow = ({ row }: any) => {
  const badgeClass = useMemo(() => {
    const colors: any = {
      Enviada: "bg-primary-100/80 text-primary-500",
      "Em análise": "bg-orange-100 text-orange-500",
      Finalizada: "bg-green-100 text-green-600",
      Recusada: "bg-red-100 text-red-600",
    };
    return `${colors[row.status]} text-xs px-3 py-1 rounded-lg font-semibold`;
  }, [row.status]);

  return (
    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-0 border-b pb-6 md:pb-0 md:border-0 border-gray-100">
      <div className="w-full md:w-5/12 flex items-center gap-6">
        <div className="flex flex-col justify-center">
          <strong className="text-neutral-600 text-sm">{row.subject}</strong>
          <small className="text-neutral-400 text-xs">{row.type}</small>
        </div>
      </div>
      <div className="w-full md:w-3/12 flex text-sm font-semibold items-center text-neutral-600">
        <div className="flex flex-col justify-center">
          <strong className="text-neutral-600 text-sm">{row.date}</strong>
          <small className="text-neutral-400 text-xs">{row.time}</small>
        </div>
      </div>
      <div className="w-full md:w-2/12 flex items-center">
        <span className={badgeClass}>{row.status}</span>
      </div>
      <div className="w-full md:w-2/12 flex items-center justify-end">
        <button className="size-8 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer">
          <AspectRatio src="/etc.svg" size={{ width: 10 }} />
        </button>
      </div>
    </div>
  );
};

const NewRequest = () => {
  return (
    <Modal
      source={
        <button className="btn primary small mt-4">Entre em contato</button>
      }
      title="Entre em contato"
      cardClassName="max-h-screen overflow-y-auto"
    >
      <div className="flex flex-col gap-4 px-4">
        <div className="flex flex-col gap-2">
          <label className="w-full  text-neutral-600 text-sm">
            Nome completo
          </label>
          <input type="text" className="w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="w-full  text-neutral-600 text-sm">E-mail</label>
          <input type="text" className="w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="w-full md:w-5/12 text-neutral-600 text-sm">
            Assunto
          </label>
          <div className="w-full flex-col flex md:flex-row gap-2">
            <textarea rows={5} className="w-full text-gray-400"></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="w-full md:w-5/12 text-neutral-600 text-sm">
            Tag
          </label>
          <div className="w-full flex-col flex md:flex-row gap-2">
            <select className="w-full">
              <option value="">Selecione</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-full  flex flex-col gap-2">
            <label className="w-full text-neutral-600 text-sm">Data</label>
            <div className="w-full flex-col flex md:flex-row gap-2">
              <div className="relative w-full">
                <div className="absolute  left-3 top-[13px]">
                  <AspectRatio src="/calendar-gray.svg" size={{ height: 20 }} />
                </div>
                <input
                  type="date"
                  defaultValue="2024-07-19"
                  className="text-gray-400 !pl-10 w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-between mt-4 flex-col md:flex-row">
          <button className="btn link order-0 md:order-1 w-full md:w-auto">
            Cancelar
          </button>
          <button className="btn primary !px-14 w-full order-0 md:order-1 md:w-auto">
            Enviar
          </button>
        </div>
      </div>
    </Modal>
  );
};
