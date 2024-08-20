"use client";
import { ReactNode } from "react";

export default function Navbar(): ReactNode {
  return (
    <nav className="bg-gradient-to-r from-40% from-primary-300 to-primary-600 w-full h-60">
      <div className="bg-[url('/navbar-bg.svg')] bg-no-repeat bg-cover w-full h-full px-8 md:px-20 py-8">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex flex-col gap-1 order-1 md:order-0">
            <h2 className="text-white text-2xl">Bem vinda Dra. Vera Roberta</h2>
            <small className="text-sm text-white opacity-70">
              Acompanhe suas consultas agendadas e tarefas aqui
            </small>
          </div>
          <div className="flex-1 order-0 md:order-1 bg-[url('/mock/btns-navbar.svg')] bg-no-repeat bg-right mocked min-h-16" />
        </div>
      </div>
    </nav>
  );
}
