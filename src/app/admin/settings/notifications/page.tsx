"use client";

import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import Switch from "@/components/Switch";
import Tabs from "@/components/Tabs";
import Link from "next/link";
import { ReactNode, useMemo, useState } from "react";

const InputRow = ({
  title,
  description = "",
  children,
  className = "",
}: any) => {
  return (
    <div
      className={`flex flex-col md:flex-row w-full border-b border-gray-100 py-8 text-sm ${className}`}
    >
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
        title="Atualizações do Sistema"
        description="Fique por dentro das novas atualizações e mudanças no sistema."
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Atualizações do Sistema</h4>
            <small className="text-xs text-neutral-400">
              Ative para notificações de atualizações do sistema.
            </small>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Manutenção do Sistema"
        description="Receba avisos sobre manutenção programada."
        className="!border-none"
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Manutenção do Sistema</h4>
            <small className="text-xs text-neutral-400">
              Ative para ser informado sobre manutenção.
            </small>
          </div>
        </div>
      </InputRow>
      <h4 className="text-neutral-700 font-semibold text-lg mb-8 border-b border-gray-200 py-4">
        Pagamentos
      </h4>
      <InputRow
        title="Confirmação de Pagamento"
        description="Receba confirmações de pagamentos realizados."
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Confirmação de Pagamento</h4>
            <small className="text-xs text-neutral-400">
              Ative para notificações de confirmação de pagamento.
            </small>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Falha de Pagamento"
        description="Seja notificado em caso de falha no pagamento."
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Falha de Pagamento</h4>
            <small className="text-xs text-neutral-400">
              Seja notificado em caso de falha no pagamento.
            </small>
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

const AttendanceSettings = () => {
  return (
    <>
      <InputRow
        title="Agendamento de Consulta"
        description="Receba alertas quando uma nova consulta for marcada."
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Agendamento de Consulta</h4>
            <small className="text-xs text-neutral-400">
              Ative para ser avisado sobre novos agendamentos.
            </small>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Lembrete de Consulta"
        description="Seja avisado antes de cada consulta."
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Lembrete de consulta</h4>
            <small className="text-xs text-neutral-400">
              Ative para lembretes de consultas futuras.
            </small>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Cancelamento de Consulta"
        description="Receba notificações de consultas canceladas."
        className="!border-none"
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Cancelamento de Consulta</h4>
            <small className="text-xs text-neutral-400">
              Ative para ser informado sobre cancelamentos.
            </small>
          </div>
        </div>
      </InputRow>
      <h4 className="text-neutral-700 font-semibold text-lg mb-8 border-b border-gray-200 py-4">
        Mensagens
      </h4>
      <InputRow
        title="Nova Mensagem"
        description="Receba alertas de mensagens de pacientes."
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Nova Mensagem</h4>
            <small className="text-xs text-neutral-400">
              Ative para notificações de novas mensagens.
            </small>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Resposta de Mensagem"
        description="Seja notificado quando um paciente responder."
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Resposta de Mensagem</h4>
            <small className="text-xs text-neutral-400">
              Ative para ser avisado sobre respostas de pacientes.
            </small>
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

const EventsSettings = () => {
  return (
    <>
      <InputRow
        title="Conclusão de Tarefas"
        description="Saiba quando uma tarefa proposta é concluída."
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Conclusão de Tarefas</h4>
            <small className="text-xs text-neutral-400">
              Ative para ser avisado sobre tarefas concluídas.
            </small>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Avaliações de Pacientes"
        description="Seja informado quando um paciente avaliar uma consulta."
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Avaliações de Pacientes</h4>
            <small className="text-xs text-neutral-400">
              Ative para receber avaliações de pacientes.
            </small>
          </div>
        </div>
      </InputRow>
      <InputRow
        title="Feedback de Sessões"
        description="Receba feedback detalhado sobre as sessões realizadas."
      >
        <div className="flex flex-row gap-2">
          <Switch value={true} />
          <div className="flex-1 flex flex-col gap-2 mb-2 md:mb-0">
            <h4 className="text-neutral-700">Feedback de Sessões</h4>
            <small className="text-xs text-neutral-400">
              Ative para notificações de feedback de sessões.
            </small>
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

export default function NotificationsSettingsPage(): ReactNode {
  const [tab, setTab] = useState(0);
  const tabsOptions = useMemo(
    () => ["Geral", "Atendimentos", "Atividades"],
    []
  );

  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin/settings">
            Notificações
          </BackLink>
        }
        description="Personalize suas preferências de notificação"
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
              {tab === 0 && "Sistema"}
              {tab === 1 && "Consultas"}
              {tab === 2 && "Atividades"}
            </h4>
            {tab === 0 && <GeneralSettings />}
            {tab === 1 && <AttendanceSettings />}
            {tab === 2 && <EventsSettings />}
          </Card>
        </div>
      </div>
    </div>
  );
}
