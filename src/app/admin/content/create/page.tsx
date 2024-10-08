"use client";

import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import { ReactNode, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function ContentPage(): ReactNode {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin/content">
            Conteúdos
          </BackLink>
        }
        description="Visualize seus conteúdos e crie novos"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <Card className="mt-4">
            <div className="flex w-full justify-between">
              <div className="flex flex-col">
                <h4 className="text-neutral-600 text-lg font-semibold">
                  Adicionar novo princípio
                </h4>
                <small className="text-neutral-400 text-sm">
                  Preencha abaixo as informações que você deseja incluir no
                  princípio
                </small>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mt-10 mb-4">
              <div className="w-full md:w-6/12">
                <label className="w-full md:w-5/12 text-neutral-600 text-sm">
                  Título
                </label>
                <input
                  type="text"
                  className="w-full text-gray-400"
                  defaultValue="Desvendando o Eu: A Importância dos Testes de Autoconhecimento"
                />
              </div>
              <div className="w-full md:w-6/12">
                <label className="w-full md:w-5/12 text-neutral-600 text-sm">
                  Categoria
                </label>
                <select>
                  <option>Saúde mental</option>
                </select>
              </div>
            </div>
            <div className="w-full mb-4">
              <label className="w-full md:w-5/12 text-neutral-600 text-sm">
                Descrição
              </label>
              <textarea
                rows={5}
                className="w-full text-gray-400"
                defaultValue=" Explore o poder dos testes de autoconhecimento, como o mapa da
                linguagem do amor e o mapa da tríade, e descubra como essas
                ferramentas podem iluminar sua jornada de autoexploração.
                Desbloqueie insights profundos sobre sua personalidade e melhore
                suas relações interpessoais para uma vida mais rica e autêntica."
              />
            </div>
            <div className="flex gap-4">
              <div className="w-full md:w-6/12 flex flex-col gap-2">
                <label className="w-full md:w-5/12 text-neutral-600 text-sm">
                  Data
                </label>
                <div className="w-full flex-col flex md:flex-row gap-2">
                  <div className="relative w-full">
                    <div className="absolute  left-3 top-[13px]">
                      <AspectRatio
                        src="/calendar-gray.svg"
                        size={{ height: 20 }}
                      />
                    </div>
                    <input
                      type="date"
                      defaultValue="2024-07-19"
                      className="text-gray-400 !pl-10 w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12  flex flex-col gap-2">
                <label className="w-full md:w-5/12 text-neutral-600 text-sm">
                  Minutos de leitura
                </label>
                <input
                  type="text"
                  defaultValue="10 minutos"
                  className="text-gray-400"
                />
              </div>
            </div>
            <div className="my-4 w-full">
              <ReactQuill value={value} onChange={setValue} />
            </div>
            <div className="w-full">
              <label className="text-sm text-neutral-600 flex items-center gap-2 my-10">
                <input defaultChecked={true} type="checkbox" />
                Ativo
              </label>
            </div>
            <div className="flex gap-2 justify-between pt-4 border-t border-gray-100">
              <button className="btn danger-ghost">Cancelar</button>
              <button className="btn primary">Adicionar</button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
