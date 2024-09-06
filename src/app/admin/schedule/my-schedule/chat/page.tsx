"use client";
import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { ReactNode, useMemo, useState } from "react";

const UserItem = ({ user }: any): ReactNode => {
  return (
    <div className="w-full gap-4 flex">
      {user.avatar ? (
        <div
          className={`size-[50px] bg-gray-100 rounded-full overflow-hidden bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url(${user.avatar})` }}
        />
      ) : (
        <div
          className={`size-[50px] bg-primary-100 rounded-full overflow-hidden bg-cover bg-no-repeat text-xl text-primary flex items-center justify-center`}
        >
          {user.name[0].toUpperCase()}
        </div>
      )}
      <div className="flex flex-col item-center">
        <strong className="text-neutral-700">{user.name}</strong>
        <small className="text-neutral-400">{user.description}</small>
      </div>
      <div className="ml-auto flex flex-col items-center gap-1">
        <small className="text-neutral-400 text-xs">{user.time}</small>
        {user.qty && (
          <div className="p-4 rounded-lg size-5 flex items-center justify-center bg-primary-100 text-primary">
            {user.qty}
          </div>
        )}
      </div>
    </div>
  );
};

const UserList = (): ReactNode => {
  return (
    <div className="w-full md:w-4/12 flex flex-col gap-6 h-full pb-10">
      <Card className="px-8 py-4 bg-center flex flex-col">
        <div className="relative">
          <AspectRatio
            src="/gray-search.svg"
            size={{ width: 18 }}
            className="absolute top-[30px] left-3"
          />
          <input type="text" placeholder="Pesquisar" className="!pl-10" />
        </div>
        <div className="mt-10 flex flex-col gap-6">
          <UserItem
            user={{
              avatar: "/user-1.svg",
              name: "Paulo Simão",
              description: "Paciente desde julho",
              time: "10 min",
              qty: 3,
            }}
          />
          <UserItem
            user={{
              avatar: "/user-1.svg",
              name: "Paulo Simão",
              description: "Paciente desde julho",
              time: "10 min",
              qty: 3,
            }}
          />
          <UserItem
            user={{
              avatar: "/user-1.svg",
              name: "Paulo Simão",
              description: "Paciente desde julho",
              time: "10 min",
              qty: 3,
            }}
          />
          <UserItem
            user={{
              avatar: "/user-1.svg",
              name: "Paulo Simão",
              description: "Paciente desde julho",
              time: "10 min",
              qty: 3,
            }}
          />
          <UserItem
            user={{
              avatar: "/user-1.svg",
              name: "Paulo Simão",
              description: "Paciente desde julho",
              time: "10 min",
              qty: 3,
            }}
          />
          <UserItem
            user={{
              name: "Paulo Simão",
              description: "Paciente desde julho",
              time: "10 min",
            }}
          />
          <UserItem
            user={{
              name: "Sergio Simão",
              description: "Paciente desde julho",
              time: "10 min",
            }}
          />
          <UserItem
            user={{
              name: "Antonio Simão",
              description: "Paciente desde julho",
              time: "10 min",
            }}
          />
          <UserItem
            user={{
              avatar: "/user-1.svg",
              name: "Paulo Simão",
              description: "Paciente desde julho",
              time: "10 min",
              qty: 3,
            }}
          />
          <UserItem
            user={{
              avatar: "/user-1.svg",
              name: "Paulo Simão",
              description: "Paciente desde julho",
              time: "10 min",
              qty: 3,
            }}
          />
          <UserItem
            user={{
              avatar: "/user-1.svg",
              name: "Paulo Simão",
              description: "Paciente desde julho",
              time: "10 min",
              qty: 3,
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export const ChatHeader = ({ user }: any) => {
  return (
    <div className="w-full gap-4 flex pb-4 pt-6 border-b border-gray-100">
      <div
        className={`size-[50px] bg-primary-100 rounded-full overflow-hidden bg-cover bg-no-repeat text-xl text-primary flex items-center justify-center`}
        style={{ backgroundImage: `url(${user.avatar})` }}
      >
        {!user?.avatar && user.name[0].toUpperCase()}
      </div>
      <div className="flex flex-col item-center">
        <strong className="text-neutral-700">Julia Novaes</strong>
        <small className="text-neutral-400 flex gap-1 items-center">
          <div className="size-3 bg-green-400 rounded-full"></div>
          On-line
        </small>
      </div>
      <div className="ml-auto flex items-center gap-1">
        <button className="size-7 flex items-center justify-center bg-gray-100 rounded-lg ml-auto">
          <AspectRatio src="/etc.svg" size={{ height: 2 }} />
        </button>
      </div>
    </div>
  );
};

export const ChatMessage = ({ message }: any) => {
  return (
    <div
      className={`w-full md:w-10/12 mb-6 ${
        message.type === "sent" && "flex self-end md:justify-end"
      }`}
    >
      <div className="w-fit">
        <div
          className={`flex gap-3 items-center ${
            message.type === "sent" && "justify-end"
          }`}
        >
          <div
            className={`${
              message.type === "sent" && "order-2"
            } size-[40px] bg-primary-100 rounded-full overflow-hidden bg-cover bg-no-repeat text-xl text-primary flex items-center justify-center`}
            style={{ backgroundImage: `url(${message.avatar})` }}
          >
            {!message?.avatar && message.name[0].toUpperCase()}
          </div>
          <div
            className={`${
              message.type === "sent" && "order-1"
            }  flex flex-col item-center`}
          >
            <strong
              className={`${
                message.type === "sent" && "order-0"
              } text-neutral-700`}
            >
              {message.name}
            </strong>
          </div>
          <small className="text-neutral-300">{message.time}</small>
        </div>
        <div
          className={`${
            message.type === "sent" ? "bg-gray-100" : "bg-primary-100/40"
          } mt-2 p-4 rounded-lg text-neutral-700 text-sm`}
        >
          {message.message.type === "text" && message.message.content}
          {message.message.type === "audio" && (
            <div className="flex gap-4 items-center">
              <div
                className={`size-8 rounded-full flex items-center justify-center ${
                  message.type === "sent"
                    ? "bg-gray-200 text-gray-400"
                    : "bg-primary-100 text-primary"
                }`}
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.828665 13.277L7.56937 7.39747C7.77747 7.21595 7.79902 6.9001 7.6175 6.692C7.60291 6.67527 7.58722 6.65953 7.57054 6.64489L0.829837 0.728235C0.622302 0.546071 0.306389 0.566638 0.124225 0.774173C0.0441538 0.865396 0 0.982631 0 1.10401V12.9002C0 13.1764 0.223858 13.4002 0.5 13.4002C0.620843 13.4002 0.737597 13.3565 0.828665 13.277Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                className={`${
                  message.type === "sent" ? "text-gray-400" : "text-primary"
                }`}
              >
                <svg width="233" height="32" viewBox="0 0 233 32" fill="none">
                  <rect
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="4.3584"
                    y="1"
                    width="2"
                    height="30"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="8.7168"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="13.0752"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="17.4336"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="21.792"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="26.1514"
                    y="6"
                    width="2"
                    height="20"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="30.5098"
                    y="6"
                    width="2"
                    height="20"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="34.8682"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="39.2266"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="43.585"
                    y="1"
                    width="2"
                    height="30"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="47.9434"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="52.3018"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="56.6602"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="61.0186"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="65.377"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="69.7363"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="74.0947"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="78.4531"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="82.8115"
                    y="1"
                    width="2"
                    height="30"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="87.1699"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="91.5283"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="95.8867"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="100.245"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="104.604"
                    y="1"
                    width="2"
                    height="30"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="108.962"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="113.32"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="117.68"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="122.038"
                    y="6"
                    width="2"
                    height="20"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="126.396"
                    y="6"
                    width="2"
                    height="20"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="130.755"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="135.113"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="139.472"
                    y="1"
                    width="2"
                    height="30"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="143.83"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="148.188"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="152.547"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="156.905"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="161.264"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="165.623"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="169.981"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="174.34"
                    y="1"
                    width="2"
                    height="30"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="178.698"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="183.057"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="187.415"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="191.773"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="196.132"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="200.49"
                    y="1"
                    width="2"
                    height="30"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="204.849"
                    y="1"
                    width="2"
                    height="30"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="209.208"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="213.566"
                    y="1"
                    width="2"
                    height="30"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="217.925"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="222.283"
                    y="7"
                    width="2"
                    height="18"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="226.642"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="231"
                    y="11"
                    width="2"
                    height="10"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <strong className="text-gray-600">
                {message.message.time || "0:00"}
              </strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Chat = ({ setStarted }: any): ReactNode => {
  const messages = useMemo(() => {
    return [
      {
        type: "received",
        name: "Julia Novaes",
        avatar: "/julia.svg",
        time: "10 min",
        message: {
          type: "text",
          content:
            "Olá, estou pronta pra nossa consulta! Organizei muito bem meu dia até aqui. Podemos começar?",
        },
      },
      {
        type: "sent",
        name: "Você",
        avatar: "/you.svg",
        time: "8 min",
        message: {
          type: "text",
          content:
            "Claro! Me dê apenas alguns minutos para eu separar os conteúdos que devemos repassar na consulta agora. Pode ser?",
        },
      },
      {
        type: "received",
        name: "Julia Novaes",
        avatar: "/julia.svg",
        time: "5 min",
        message: {
          type: "audio",
          time: "0:15",
        },
      },
      {
        type: "sent",
        name: "Você",
        avatar: "/julia.svg",
        time: "Agora",
        message: {
          type: "text",
          content: (
            <div className="w-full flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8.66732 4H2.66732C1.93094 4 1.33398 4.59695 1.33398 5.33333V10.6667C1.33398 11.403 1.93094 12 2.66732 12H8.66732C9.4037 12 10.0007 11.403 10.0007 10.6667V5.33333C10.0007 4.59695 9.4037 4 8.66732 4Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6672 5.60905V10.3901C14.6672 10.7583 14.3687 11.0568 14.0006 11.0568C13.8237 11.0568 13.6542 10.9865 13.5291 10.8615L11.1386 8.47098C10.8783 8.21063 10.8783 7.78852 11.1386 7.52817L13.5291 5.13764C13.7895 4.8773 14.2116 4.8773 14.472 5.13765C14.597 5.26267 14.6672 5.43224 14.6672 5.60905Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-neutral-400 flex items-center gap-2">
                A consulta iniciou.
                <a
                  href="#"
                  onClick={(e: any) => [e.preventDefault(), setStarted(true)]}
                  className="!text-neutral-400 underline"
                >
                  Acesse agora
                </a>
              </span>
            </div>
          ),
        },
      },
    ];
  }, []);

  return (
    <div className="w-full md:w-8/12 flex flex-col gap-4  h-full max-h-full overflow-y-auto">
      <Card className="px-8 bg-center">
        <ChatHeader user={{ name: "Julia Novaes", avatar: "/julia.svg" }} />
        <div className="w-full flex flex-col gap-4 py-6">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="w-full flex flex-col gap-4 py-6 border-t border-gray-100">
          <textarea
            className="w-full resize-none inset-0 bg-transparent focus-visible:outline-0"
            rows={3}
            placeholder="Digite sua mensagem"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-3">
            <Link href="#">
              <AspectRatio src="/attach.svg" size={{ height: 24 }} />
            </Link>
            <Link href="#">
              <AspectRatio src="/start.svg" size={{ height: 24 }} />
            </Link>
          </div>
          <div className="flex gap-3 relative">
            <button className="btn primary h-11">Enviar</button>
            <button className="size-11 border rounded-full border-primary items-center justify-center flex">
              <AspectRatio src="/mic.svg" size={{ height: 16 }} />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export const CardCall = () => {
  return (
    <div className="w-full flex flex-col gap-4  h-full max-h-full overflow-y-auto">
      <Card className="px-8 bg-center">asdasd</Card>
    </div>
  );
};

export default function ChatPage(): ReactNode {
  const [started, setStarted] = useState(false);

  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink
            className="text-white text-2xl"
            href="/admin/schedule/my-schedule"
          >
            Chat
          </BackLink>
        }
        description="Verifique suas conversas com pacientes"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <div className="w-full flex-col md:flex-row flex gap-6">
            {started ? (
              <CardCall />
            ) : (
              <>
                <UserList />
                <Chat setStarted={setStarted} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
