"use client";

import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import Switch from "@/components/Switch";
import Tabs from "@/components/Tabs";
import Link from "next/link";
import { ReactNode, useMemo, useState } from "react";

const InputRow = ({ title, description = "", children }: any) => {
  return (
    <div className="flex flex-col md:flex-row w-full border-b border-gray-100 py-8 text-sm">
      <div className="flex-1 flex flex-col gap-1 mb-2 md:mb-0">
        <h4 className="text-neutral-700">{title}</h4>
        {description && (
          <small className="text-xs text-neutral-400">{description}</small>
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

const GeneralSettings = () => {
  return (
    <>
      <InputRow
        title="Idioma e região"
        description="Personalize seu idioma e região."
      >
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-neutral-700">Idioma</label>
          <div className="relative w-full">
            <div className="absolute left-3 top-[50%] translate-y-[-50%]">
              <AspectRatio src="/language.svg" size={{ height: 16 }} />
            </div>
            <input
              defaultValue="Português (Brasil)"
              type="text"
              className="text-gray-400 !pl-10 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-neutral-700">Fuso Horário</label>
          <div className="relative w-full">
            <div className="absolute left-3 top-[50%] translate-y-[-50%]">
              <AspectRatio src="/fuso.svg" size={{ height: 16 }} />
            </div>
            <input
              defaultValue="América/São Paulo"
              type="text"
              className="text-gray-400 !pl-10 w-full"
            />
          </div>
        </div>
        <label className="flex items-center">
          <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
          <label className="ml-2 text-neutral-700">
            Notifique-me de alterações no fuso horário
          </label>
        </label>
      </InputRow>
      <InputRow
        title="Formatos de data e hora"
        description="Escolha como os dados de hora e data são exibidos."
      >
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-neutral-700">
            Início do calendário da semana
          </label>
          <label className="cursor-pointer flex items-center text-neutral-500 text-sm gap-1">
            <input type="radio" name="start-calendar" checked /> Domingo
          </label>
          <label className="cursor-pointer flex items-center text-neutral-500 text-sm gap-1">
            <input type="radio" name="start-calendar" /> Segunda-feira
          </label>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label className="text-neutral-700">Formato de hora</label>
          <label className="cursor-pointer flex items-center text-neutral-500 text-sm gap-1">
            <input type="radio" name="format-time" /> 24 Horas
          </label>
          <label className="cursor-pointer flex items-center text-neutral-500 text-sm gap-1">
            <input type="radio" name="format-time" checked /> 12 Horas
          </label>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label className="text-neutral-700">Formato da data</label>
          <label className="cursor-pointer flex items-center text-neutral-500 text-sm gap-1">
            <input type="radio" name="format-date" checked /> dd/mm/aaaa
          </label>
          <label className="cursor-pointer flex items-center text-neutral-500 text-sm gap-1">
            <input type="radio" name="format-date" /> mm/dd/aaaa
          </label>
          <label className="cursor-pointer flex items-center text-neutral-500 text-sm gap-1">
            <input type="radio" name="format-date" /> aaaa/mm/dd
          </label>
        </div>
      </InputRow>
      <div className="flex justify-end mt-4">
        <button className="btn link">Descartar</button>
        <button className="btn primary small">Salvar alterações</button>
      </div>
    </>
  );
};

const PreferencesSettings = () => {
  return (
    <>
      <InputRow
        title="Preferência para consulta"
        description="Personalize sua preferência de religião para consulta"
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Preferência por religião</h4>
            <small className="text-xs text-neutral-400">
              Desative esta opção para receber solicitações de consulta de todas
              as religiões.
            </small>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Modo de atendimento"
        description="Personalize sua preferência por como quer realizar os atendimentos"
      >
        <div className="flex flex-row gap-2 mb-4">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-1 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Atendimento por vídeo</h4>
            <small className="text-xs text-neutral-400">
              Desative caso não queira receber solicitações de consulta por
              vídeo.
            </small>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Switch value={false} />
          <div className="flex-1 flex flex-col gap-1 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Atendimento por telefone</h4>
            <small className="text-xs text-neutral-400">
              Desative caso não queira receber solicitações de consulta por
              telefone.
            </small>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Comunicação"
        description="Personalize sua preferência de comunicação via chat"
      >
        <div className="flex flex-row gap-2 mb-4">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-1 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Comunicação via chat</h4>
            <small className="text-xs text-neutral-400">
              Desative esta opção para não receber comunicações por chat
              privado.
            </small>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Política de cancelamento"
        description="Personalize a política de cancelamento"
      >
        <div className="flex flex-row gap-2 mb-4">
          <Switch value={false} />
          <div className="flex-1 flex flex-col gap-1 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Taxa de cancelamento</h4>
            <small className="text-xs text-neutral-400">
              Desative essa opção caso não queira cobrar uma taxa para
              cancelamentos com pouca antecedência.
            </small>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Valor da hora"
        description="Personalize seu preço por hora na consulta"
      >
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-neutral-700">Moeda</label>
          <div className="relative w-full">
            <div className="absolute left-3 top-[50%] translate-y-[-50%]">
              <AspectRatio src="/fuso.svg" size={{ height: 16 }} />
            </div>
            <input
              defaultValue="BRL (Reais/Brasil)"
              type="text"
              className="text-gray-400 !pl-10 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-neutral-700">Valor</label>
          <div className="relative w-full">
            <div className="absolute left-3 top-[50%] translate-y-[-50%]">
              <AspectRatio src="/wallet.svg" size={{ height: 20 }} />
            </div>
            <input
              defaultValue="R$ 200,00"
              type="text"
              className="text-gray-400 !pl-10 w-full"
            />
          </div>
        </div>
        <label className="flex items-center ">
          <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
          <label className="ml-2 text-gray-500 text-sm">
            Notifique-me de de ajustar semestralmente
          </label>
        </label>
      </InputRow>
      <div className="flex justify-end mt-4">
        <button className="btn link">Descartar</button>
        <button className="btn primary small">Salvar alterações</button>
      </div>
    </>
  );
};

const TimingSettings = () => {
  return (
    <>
      <InputRow
        title="Disponibilidade semanal"
        description="Desmarque os dias em que você não estará disponível para consultas."
      >
        <div className="flex flex-col gap-2">
          {[
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sabado",
          ].map((day: string, index: number) => (
            <label className="flex items-center" key={index}>
              <input
                checked
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded"
              />
              <label className="ml-2 text-neutral-700">{day}</label>
            </label>
          ))}
        </div>
      </InputRow>
      <InputRow
        title="Lembretes"
        description="Ative lembretes para ser notificado quando o expediente estiver perto do fim."
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-1 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Lembrete</h4>
            <small className="text-xs text-neutral-400">
              Desative esta opção para não receber lembretes.
            </small>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Horários de atendimento"
        description="Defina os horários de início e término para cada dia de atendimento."
      >
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 mb-2 md:mb-0">
            <label className="text-neutral-700">Início do expediente</label>
            <select className="mt-2">
              <option>08:00</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-neutral-700">Fim do expediente</label>
            <select className="mt-2">
              <option>18:00</option>
            </select>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Intervalos"
        description="Adicione intervalos para pausas durante o dia, como horário de almoço.."
      >
        <div className="flex flex-row gap-2 mb-4">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-1 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Comunicação via chat</h4>
            <small className="text-xs text-neutral-400">
              Desative esta opção para não receber comunicações por chat
              privado.
            </small>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 mb-2 md:mb-0">
            <label className="text-neutral-700">Início do intervalo</label>
            <select className="mt-2">
              <option>12:00</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-neutral-700">Fim do intervalo</label>
            <select className="mt-2">
              <option>13:00</option>
            </select>
          </div>
        </div>
      </InputRow>
      <div className="flex justify-end mt-4">
        <button className="btn link">Descartar</button>
        <button className="btn primary small">Salvar alterações</button>
      </div>
    </>
  );
};

const DisableAccount = () => {
  return (
    <Card>
      <h4 className="text-neutral-700 font-semibold text-lg mb-4 border-b border-gray-200 pb-4">
        Desativar conta
      </h4>
      <div className="flex flex-row gap-2  bg-orange-50 p-4 rounded-lg items-center">
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4412 30.2008C24.0081 30.2008 30.1422 24.0667 30.1422 16.4998C30.1422 8.93297 24.0081 2.79883 16.4412 2.79883C8.87437 2.79883 2.74023 8.93297 2.74023 16.4998C2.74023 24.0667 8.87437 30.2008 16.4412 30.2008Z"
            fill="#EA580C"
          />
          <rect
            x="15.0703"
            y="9.64941"
            width="2.7402"
            height="10.9608"
            rx="1"
            fill="#EA580C"
          />
          <rect
            x="15.0703"
            y="21.9805"
            width="2.7402"
            height="2.7402"
            rx="1"
            fill="#EA580C"
          />
        </svg>
        <div className="flex flex-col gap-1">
          <h5 className="text-sm text-neutral-700 font-semibold">
            Tem certeza que deseja desativar sua conta?
          </h5>
          <div className="text-sm text-neutral-500">
            Para uma segurança extra, isso requer uma confirmação por e-mail..{" "}
            <Link className="font-semibold" href="#">
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
      <label className="flex items-center my-4 border-b border-gray-200 pb-4">
        <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
        <label className="ml-2 text-gray-500 text-sm">
          Confirmar desativação de conta
        </label>
      </label>
      <div className="flex justify-end">
        <button className="btn danger small">Salvar alterações</button>
      </div>
    </Card>
  );
};

export default function SettingsPage(): ReactNode {
  const rows = useMemo(
    () => [
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
      {
        avatar: "/examples/user-1.svg",
        name: "Bruno Quirino",
        email: "bq@bq.com",
        phone: "(11) 21212-2121",
        rate: 5,
      },
    ],
    []
  );

  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin">
            Pacientes
          </BackLink>
        }
        description="Verifique suas consultas agendadas e agende novas"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <div className="bg-white p-2 rounded-lg flex items-center flex-col md:flex-row">
            <h4 className="text-neutral-600 text-lg text-left w-full mb-2 md:mb-0 md:w-7/12">
              Filtrar
            </h4>
            <div className="ml-auto flex gap-1 w-full md:w-5/12">
              <input type="text" placeholder="Pesquisar" />
              <select>
                <option>Esse mês de Julho</option>
              </select>
            </div>
          </div>
          <Card className="mt-4">
            <div>
              <h4 className="text-neutral-600 text-lg">Pacientes</h4>
              <small className="text-neutral-400 text-sm">
                {rows.length} Paciente{rows.length > 1 ? "s" : ""}
              </small>
            </div>
            <div className="flex-row w-full gap-2 bg-gray-100 rounded-lg py-2 px-4 mb-6 hidden md:flex mt-10">
              <div className="w-4/12 flex items-center text-neutral-400 text-sm">
                Paciente
              </div>
              <div className="w-3/12 flex items-center text-neutral-400 text-sm">
                E-mail
              </div>
              <div className="w-2/12 flex items-center text-neutral-400 text-sm">
                Telefone
              </div>
              <div className="w-2/12 flex items-center text-neutral-400 text-sm">
                Avaliacões
              </div>
              <div className="w-1/12 flex items-center text-neutral-400 text-sm" />
            </div>
            {rows.map((row: any, key: any) => (
              <TableRow row={row} key={key} />
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

export const TableRow = ({ row }: any) => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-2 md:gap-0 border-b pb-6 md:pb-0 md:border-0 border-gray-100 mb-4">
      <div className="w-full md:w-4/12 flex items-center gap-6">
        <div className="flex items-end justify-center size-[50px] rounded-full bg-gray-100">
          <AspectRatio src={row.avatar} size={{ height: 40 }} />
        </div>
        <div className="flex flex-col justify-center">
          <strong className="text-neutral-600 text-sm">{row.name}</strong>
          <small className="text-neutral-400 text-xs">
            {row.age} ano{row.age > 1 && "s"}
          </small>
        </div>
      </div>
      <div className="w-full md:w-3/12 flex text-sm font-semibold items-center text-neutral-600">
        {row.email}
      </div>
      <div className="w-full md:w-2/12 flex text-sm font-semibold items-center text-neutral-600">
        {row.phone}
      </div>
      <div className="w-full md:w-2/12 flex text-primary items-center text-sm font-semibold flex-col">
        <div className="flex flex-row">
          {Array.from({ length: row.rate }).map((_, index) => (
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              key={index}
            >
              <path
                d="M6.77447 0.463525C6.92415 0.00286961 7.57585 0.00287008 7.72553 0.463525L9.04611 4.52786C9.11305 4.73388 9.30503 4.87336 9.52164 4.87336L13.7951 4.87336C14.2795 4.87336 14.4809 5.49316 14.089 5.77786L10.6317 8.28976C10.4565 8.41709 10.3831 8.64277 10.4501 8.84878L11.7706 12.9131C11.9203 13.3738 11.3931 13.7568 11.0012 13.4721L7.54389 10.9602C7.36865 10.8329 7.13135 10.8329 6.95611 10.9602L3.49877 13.4721C3.10692 13.7568 2.57968 13.3738 2.72935 12.9131L4.04994 8.84878C4.11687 8.64277 4.04355 8.41709 3.8683 8.28976L0.410968 5.77786C0.0191114 5.49316 0.220499 4.87336 0.704861 4.87336L4.97836 4.87336C5.19497 4.87336 5.38695 4.73388 5.45389 4.52786L6.77447 0.463525Z"
                fill="#FDBA74"
              />
            </svg>
          ))}
        </div>
        <div className="text-gray-400 text-xs mt-1">Avaliações</div>
      </div>
      <div className="w-full md:w-1/12 flex items-center">
        <Link
          href={`/admin/patient/profile`}
          className="size-8 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer"
        >
          <AspectRatio src="/etc.svg" size={{ width: 10 }} />
        </Link>
      </div>
    </div>
  );
};
