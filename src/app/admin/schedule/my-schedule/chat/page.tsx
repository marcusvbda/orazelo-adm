import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { ReactNode } from "react";

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
    <div className="w-full md:w-5/12 flex flex-col gap-6 h-full pb-10">
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
        </div>
      </Card>
    </div>
  );
};

export const Chat = (): ReactNode => {
  return (
    <div className="w-full md:w-7/12 flex flex-col gap-4  h-full max-h-full overflow-y-auto">
      <Card className="px-8 bg-center">
        <div className="w-full gap-4 flex pb-10 pt-6 border-b border-gray-100">
          <div
            className={`size-[50px] bg-primary-100 rounded-full overflow-hidden bg-cover bg-no-repeat text-xl text-primary flex items-center justify-center`}
          >
            J
          </div>
          <div className="flex flex-col item-center">
            <strong className="text-neutral-700">Julia Novaes</strong>
            <small className="text-neutral-400 flex gap-1 items-center">
              <div className="size-3 bg-green-400 rounded-full"></div>
              On-line
            </small>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Link
              href="/admin/schedule/my-schedule/chat"
              className="size-7 flex items-center justify-center bg-gray-100 rounded-lg ml-auto"
            >
              <AspectRatio src="/etc.svg" size={{ height: 2 }} />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default function ChatPage(): ReactNode {
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
            <UserList />
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}
