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
  const [tab, setTab] = useState(0);
  const tabsOptions = useMemo(() => ["Geral", "Preferências", "Horários"], []);

  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin">
            Configurações
          </BackLink>
        }
        description="Edite suas configurações do sistema"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <div className="bg-white p-2 rounded-lg flex">
            <Tabs
              className="w-full !gap-2"
              itemClassName="!text-gray-400 !p-2 !px-4"
              itemSelectedClassName="!text-primary !border-0 !bg-primary-100/80 !rounded-lg"
              value={tab}
              onChange={setTab}
              items={tabsOptions}
            />
          </div>
          <Card className="mt-4">
            <h4 className="text-neutral-700 font-semibold text-lg mb-8 border-b border-gray-200 pb-4">
              {tab === 0 && "Geral"}
              {tab === 1 && "Preferências de atendimento"}
              {tab === 2 && "Horários de atendimento"}
            </h4>
            {tab === 0 && <GeneralSettings />}
            {tab === 1 && <PreferencesSettings />}
            {tab === 2 && <TimingSettings />}
          </Card>
          {tab === 0 && <DisableAccount />}
        </div>
      </div>
    </div>
  );
}
