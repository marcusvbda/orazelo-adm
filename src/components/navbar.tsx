"use client";
import { ReactNode } from "react";
import AspectRatio from "./AspectRatio";
import { NewScehdule } from "./ScheduleCheckups";

interface IProps {
  text?: ReactNode;
  description?: ReactNode;
}
const NavbarActions = () => {
  return (
    <div className="flex-1 order-0 md:order-1 min-h-16 flex items-center gap-2 justify-end">
      <div className="w-60 relative">
        <div className="absolute top-3 left-3">
          <AspectRatio src="/search-icon.svg" size={{ height: 20 }} />
        </div>
        <input
          className="w-full h-[42px] rounded-xl pl-12 bg-primary-500 placeholder:text-white/80 text-white focus:outline-0"
          placeholder="Pesquisar"
        />
      </div>
      <button className="bg-primary-500 rounded-lg size-[42px] text-sm text-primary-300 font-semibold gap-2 flex items-center justify-center">
        <AspectRatio src="/notification.svg" size={{ height: 24 }} />
      </button>
      <NewScehdule
        source={
          <button className="btn white ml-0 md:ml-3">
            <AspectRatio src="/calendar.svg" size={{ height: 20 }} />
            <span className="hidden md:block">Nova consulta</span>
          </button>
        }
      />
    </div>
  );
};

export default function Navbar({ text, description }: IProps): ReactNode {
  return (
    <nav className="bg-gradient-to-r from-40% from-primary-300 to-primary-600 w-full h-60">
      <div className="bg-[url('/navbar-bg.svg')] bg-no-repeat bg-cover w-full h-full theme-container">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex flex-col gap-1 order-1 md:order-0">
            <h2 className="text-white text-2xl">
              {text ? text : <>Bem vinda Dra. Vera Roberta</>}
            </h2>
            <small className="text-sm text-white opacity-70">
              {description ? (
                description
              ) : (
                <>Acompanhe suas consultas agendadas e tarefas aqui</>
              )}
            </small>
          </div>
          <NavbarActions />
        </div>
      </div>
    </nav>
  );
}
