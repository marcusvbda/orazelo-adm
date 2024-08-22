import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

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
      <div className="relative top-[-100px] overflow-y-auto container">
        <div className="flex flex-col gap-4">
          <Card className="bg-[url('/mock/profile/edit-profile.svg')] bg-no-repeat bg-contain bg-top min-h-[818px] mocked"></Card>
        </div>
      </div>
    </div>
  );
}
