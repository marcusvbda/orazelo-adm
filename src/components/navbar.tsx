"use client";
import { ReactNode } from "react";
import AspectRatio from "./AspectRatio";
import { NewScehdule } from "./ScheduleCheckups";
import DropMenu from "./DropMenu";
import Link from "next/link";

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
      <DropMenu
        portalClassName="rounded-2xl"
        source={
          <button className="rounded-lg bg-primary-500 size-[42px] text-sm text-primary-300 font-semibold gap-2 flex items-center justify-center">
            <AspectRatio src="/notification.svg" size={{ height: 24 }} />
          </button>
        }
      >
        <div className="w-96 rounded-xl">
          <div className="flex items-center h-[80px] bg-gradient-to-r from-40% from-primary-300 to-primary-600 w-full p-6 gap-4">
            <h4 className="text-white font-lg font-semibold">Notificações</h4>
            <small className="text-xs text-white ml-4">24 novas</small>
            <Link href="/admin/settings/notifications" className="ml-auto">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  opacity="0.3"
                  d="M25.784 13.4168V14.7001C25.784 15.4001 25.3173 15.8668 24.734 15.9834L23.2173 16.2169C22.984 17.1502 22.634 18.0834 22.0507 18.9001L22.984 20.1834C23.334 20.6501 23.334 21.4667 22.8673 21.9334L21.934 22.8668C21.4673 23.3335 20.7673 23.3334 20.184 22.9834L18.9006 22.0502C18.084 22.5169 17.1506 22.9835 16.2173 23.2169L15.984 24.7334C15.8673 25.3168 15.284 25.7835 14.7006 25.7835H13.4173C12.7173 25.7835 12.2506 25.3168 12.134 24.7334L11.9006 23.2169C10.9673 22.9835 10.034 22.6335 9.21731 22.0502L7.93398 22.9834C7.46732 23.3334 6.65065 23.3335 6.18398 22.8668L5.25065 21.9334C4.78398 21.4667 4.78398 20.7667 5.13398 20.1834L6.06731 18.9001C5.60065 18.0834 5.13398 17.1502 4.90065 16.2169L3.38398 15.9834C2.80065 15.8668 2.33398 15.2835 2.33398 14.7001V13.4168C2.33398 12.7168 2.80065 12.2502 3.38398 12.1335L4.90065 11.9001C5.13398 10.9668 5.48398 10.0335 6.06731 9.21686L5.13398 7.93341C4.78398 7.46674 4.78398 6.65008 5.25065 6.18341L6.18398 5.25016C6.65065 4.7835 7.35065 4.78352 7.93398 5.13352L9.21731 6.06677C10.034 5.60011 10.9673 5.13344 11.9006 4.90011L12.134 3.38352C12.2506 2.80019 12.834 2.3335 13.4173 2.3335H14.7006C15.4006 2.3335 15.8673 2.80019 15.984 3.38352L16.2173 4.90011C17.1506 5.13344 18.084 5.48344 18.9006 6.06677L20.184 5.13352C20.6506 4.78352 21.4673 4.7835 21.934 5.25016L22.8673 6.18341C23.334 6.65008 23.334 7.35008 22.984 7.93341L22.0507 9.21686C22.5173 10.0335 22.984 10.9668 23.2173 11.9001L24.734 12.1335C25.3173 12.2502 25.784 12.8335 25.784 13.4168ZM14.1173 10.0335C11.9006 10.0335 10.034 11.9001 10.034 14.1168C10.034 16.3335 11.9006 18.2001 14.1173 18.2001C16.334 18.2001 18.2006 16.3335 18.2006 14.1168C18.2006 11.9001 16.334 10.0335 14.1173 10.0335Z"
                  fill="white"
                />
                <path
                  d="M19.9499 14.1165C19.9499 17.3832 17.3832 19.9499 14.1165 19.9499C10.8499 19.9499 8.2832 17.3832 8.2832 14.1165C8.2832 10.8499 10.8499 8.2832 14.1165 8.2832C17.3832 8.2832 19.9499 10.8499 19.9499 14.1165ZM14.1165 11.7832C12.8332 11.7832 11.7832 12.8332 11.7832 14.1165C11.7832 15.3999 12.8332 16.4499 14.1165 16.4499C15.3999 16.4499 16.4499 15.3999 16.4499 14.1165C16.4499 12.8332 15.3999 11.7832 14.1165 11.7832Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="w-full flex-col p-4 px-8">
            <div className="border-l-4 rounded border-primary pl-4 flex flex-1 items-center mb-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-neutral-700 font-semibold">
                  Nova consulta
                </h4>
                <div className="text-neutral-400 text-sm">14:32</div>
              </div>
              <div className="ml-auto">
                <div className="bg-primary-50/50 font-semibold rounded-lg text-primary text-xs px-2 py-1">
                  Novo
                </div>
              </div>
            </div>
            <div className="border-l-4 rounded border-primary pl-4 flex flex-1 items-center mb-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-neutral-700 font-semibold">
                  Nova consulta
                </h4>
                <div className="text-neutral-400 text-sm">14:32</div>
              </div>
            </div>
            <div className="border-l-4 rounded border-primary pl-4 flex flex-1 items-center mb-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-neutral-700 font-semibold">
                  Nova consulta
                </h4>
                <div className="text-neutral-400 text-sm">14:32</div>
              </div>
            </div>
            <div className="border-l-4 rounded border-primary pl-4 flex flex-1 items-center mb-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-neutral-700 font-semibold">
                  Nova consulta
                </h4>
                <div className="text-neutral-400 text-sm">14:32</div>
              </div>
            </div>
            <div className="border-l-4 rounded border-primary pl-4 flex flex-1 items-center mb-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-neutral-700 font-semibold">
                  Nova consulta
                </h4>
                <div className="text-neutral-400 text-sm">14:32</div>
              </div>
            </div>
          </div>
        </div>
      </DropMenu>
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
