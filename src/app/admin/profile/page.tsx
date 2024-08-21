import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/theme/navbar";
import { ReactNode } from "react";

export default function ProfilePage(): ReactNode {
  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin">
            Perfil
          </BackLink>
        }
        description="Veja e edite suas informações pessoais e adicionais"
      />
      <div className="relative top-[-100px] overflow-y-auto px-8 md:px-20 py-8">
        <div className="flex flex-col gap-4">
          <Card className="bg-[url('/mock/profile/card-1.svg')] bg-no-repeat bg-contain bg-top min-h-[307px] mocked"></Card>
          <div className="w-full flex-col md:flex-row flex gap-4">
            <div className="w-full md:w-7/12 flex-col md:flex-row flex gap-4">
              <Card className="bg-[url('/mock/profile/card-2.svg')] bg-no-repeat bg-cover min-h-[397px] bg-center mocked"></Card>
            </div>
            <div className="w-full md:w-5/12 flex flex-col gap-4">
              <Card className="bg-[url('/mock/dashboard/my-contents-card.svg')] bg-no-repeat bg-contain min-h-[155px] bg-center !bg-primary-500 mocked"></Card>
              <Card className="bg-[url('/mock/dashboard/my-contents-card-2.svg')] bg-no-repeat bg-contain min-h-[155px] bg-center !bg-primary-500 mocked"></Card>
            </div>
          </div>
          <Card className="bg-[url('/mock/dashboard/dashboard-table.svg')] bg-no-repeat bg-contain bg-top min-h-[484px] mocked"></Card>
        </div>
      </div>
    </div>
  );
}
