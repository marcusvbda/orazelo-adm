"use client";

import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import Tabs from "@/components/Tabs";
import Link from "next/link";
import { ReactNode, useMemo, useState } from "react";

const InputRow = ({ title, description = "", children }: any) => {
  return (
    <div className="flex flex-col md:flex-row w-full border-b border-gray-100 py-8">
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
              {tabsOptions[tab]}
            </h4>
            {tab === 0 && <GeneralSettings />}
          </Card>
          {tab === 0 && <DisableAccount />}
        </div>
      </div>
    </div>
  );
}
