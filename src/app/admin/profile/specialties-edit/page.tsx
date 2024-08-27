import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import { SpecialtiesForm } from "@/components/SpecialtieCards";
import Switch from "@/components/Switch";
import { ReactNode } from "react";

const InputRow = ({ label, children }: any) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 items-center mb-4">
      <label className="w-full md:w-5/12 text-neutral-600">{label}</label>
      <div className="w-full md:w-7/12 ml-auto flex-col flex md:flex-row gap-2">
        {children}
      </div>
    </div>
  );
};

export default function SpecialtiesEdit(): ReactNode {
  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin/profile?tab=3">
            Editar Experiência
          </BackLink>
        }
        description="Preencha abaixo as informações que você deseja incluir na experiência"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <Card className="flex flex-col gap-2 ">
            <h4 className="text-neutral-700 font-bold text-lg border-b border-gray-100 pb-4 mb-6">
              Informações da experiência
              <br />
              <small className="font-normal font-xs text-neutral-400">
                Preencha abaixo as informações que você deseja incluir na
                experiência
              </small>
            </h4>
            <SpecialtiesForm />
            <div className="flex gap-2 justify-end">
              <button className="btn ghost">Descartar</button>
              <button className="btn primary">Salvar alterações</button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
