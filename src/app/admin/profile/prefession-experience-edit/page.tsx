import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import { ProfessionalExperiencesForm } from "@/components/ProfessionalExperiences";
import { ReactNode } from "react";

export default function SpecialtiesEdit(): ReactNode {
  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin/profile?tab=2">
            Editar experiência
          </BackLink>
        }
        description="Edite suas informações"
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
            <ProfessionalExperiencesForm mode="edit" />
            <div className="flex gap-2 justify-end pt-4 border-t border-gray-100">
              <button className="btn ghost">Descartar</button>
              <button className="btn primary">Salvar alterações</button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
