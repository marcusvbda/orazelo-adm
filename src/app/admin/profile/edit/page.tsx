import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
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

export default function EditProfilePage(): ReactNode {
  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin/profile">
            Editar Perfil
          </BackLink>
        }
        description="Edite suas informações pessoais e adicionais"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <Card className="flex flex-col gap-2 ">
            <h4 className="text-neutral-600 text-lg border-b border-gray-100 pb-4 mb-6">
              Informações básicas
            </h4>
            <div className=" border-b border-gray-100 pb-2 mb-2 flex flex-col">
              <InputRow label="Nome completo">
                <>
                  <input
                    type="text"
                    defaultValue="Vera"
                    className="text-gray-400"
                  />
                  <input
                    defaultValue="Roberta"
                    type="text"
                    className="text-gray-400"
                  />
                </>
              </InputRow>
              <InputRow label="Grau acadêmico">
                <input
                  defaultValue="Dra."
                  type="text"
                  className="text-gray-400"
                />
              </InputRow>
              <InputRow label="Nome completo">
                <>
                  <select defaultValue="SP" className="text-gray-400">
                    <option value="SP">SP</option>
                  </select>
                  <input
                    defaultValue="08/78645"
                    type="text"
                    className="text-gray-400"
                  />
                </>
              </InputRow>
              <InputRow label="Número">
                <input
                  defaultValue="(11) 99999-9999"
                  type="text"
                  className="text-gray-400"
                />
              </InputRow>
              <InputRow label="Religião">
                <input
                  defaultValue="Evangélica"
                  type="text"
                  className="text-gray-400"
                />
              </InputRow>
              <InputRow label="Região">
                <div className="relative w-full">
                  <div className="absolute left-3 top-[50%] translate-y-[-50%]">
                    <AspectRatio src="/br-flag.svg" size={{ height: 16 }} />
                  </div>
                  <input
                    defaultValue="Brasil"
                    type="text"
                    className="text-gray-400 !pl-10 w-full"
                  />
                </div>
              </InputRow>
              <InputRow label="Religião">
                <input
                  defaultValue="Terapia analítico-comportamental"
                  type="text"
                  className="text-gray-400"
                />
              </InputRow>
              <InputRow label="Preferência para consulta">
                <Switch value={true} />
              </InputRow>
            </div>
            <div className="flex gap-2 justify-end">
              <button className="btn ghost">Cancelar</button>
              <button className="btn primary">Salvar alterações</button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
