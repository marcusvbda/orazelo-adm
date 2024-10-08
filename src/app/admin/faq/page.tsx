import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import CollapseData from "@/components/CollapseData";
import Navbar from "@/components/navbar";
import Link from "next/link";

const TutorialRow = ({ thumbnail, title, type, description }: any) => {
  return (
    <Link href="#" className="w-full flex gap-4">
      <div
        className="w-60 h-44 rounded-xl bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${thumbnail})` }}
      />
      <div className="w-full flex flex-col gap-2">
        <h4 className="text-neutral-700 font-semibold mb-2">{title}</h4>
        <div className="text-sm text-neutral-400 mb-4">{description}</div>
        <div className="flex">
          <div className="text-xs bg-gray-100 text-gray-500 px-2 py-1 font-semibold rounded-lg">
            {type}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin">
            Suporte e ajuda
          </BackLink>
        }
        description="Acesse as perguntas frequentes, tutorias e entre em contato conosco"
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-5/12 ">
          <Card>
            <h4 className="text-neutral-600 text-lg text-left w-full mb-2 md:mb-0 md:w-7/12 ml-4">
              Perguntas frequentes
            </h4>
            <div className="relative">
              <AspectRatio
                src="/gray-search.svg"
                size={{ width: 18 }}
                className="absolute top-[30px] left-3"
              />
              <input type="text" placeholder="Pesquisar" className="!pl-10" />
            </div>
            <div className="mt-4 flex flex-col gap-6">
              <CollapseData
                className="border-b border-gray-100 border-dashed pb-4"
                defaultOpen={true}
                source="Como sincronizar meu calendário do sistema Orazelo com o Google Calendar?"
              >
                Acesse Configurações de Integrações, escolha "Integração com
                Calendário" e selecione "Sincronizar com Google Calendar". Siga
                as instruções para autorizar a sincronização.
              </CollapseData>
              <CollapseData
                source="O que preciso fazer para alcançar o status VIP?"
                className="border-b border-gray-100 border-dashed pb-4"
              >
                Acesse Configurações de Integrações, escolha "Integração com
                Calendário" e selecione "Sincronizar com Google Calendar". Siga
                as instruções para autorizar a sincronização.
              </CollapseData>
              <CollapseData
                source="Como posso alterar meu idioma?"
                className="border-b border-gray-100 border-dashed pb-4"
              >
                Acesse Configurações de Integrações, escolha "Integração com
                Calendário" e selecione "Sincronizar com Google Calendar". Siga
                as instruções para autorizar a sincronização.
              </CollapseData>
              <CollapseData
                source="Como ajusto meu fuso horário?"
                className="border-b border-gray-100 border-dashed pb-4"
              >
                Acesse Configurações de Integrações, escolha "Integração com
                Calendário" e selecione "Sincronizar com Google Calendar". Siga
                as instruções para autorizar a sincronização.
              </CollapseData>
              <CollapseData
                source="Como visualizar e acompanhar minhas conquistas?"
                className="border-b border-gray-100 border-dashed pb-4"
              >
                Acesse Configurações de Integrações, escolha "Integração com
                Calendário" e selecione "Sincronizar com Google Calendar". Siga
                as instruções para autorizar a sincronização.
              </CollapseData>
              <CollapseData
                source="Como gerenciar minhas preferências de notificação?"
                className="border-b border-gray-100 border-dashed pb-4"
              >
                Acesse Configurações de Integrações, escolha "Integração com
                Calendário" e selecione "Sincronizar com Google Calendar". Siga
                as instruções para autorizar a sincronização.
              </CollapseData>
              <CollapseData
                source="Como editar minhas informações de perfil?"
                className="border-b border-gray-100 border-dashed pb-4"
              >
                Acesse Configurações de Integrações, escolha "Integração com
                Calendário" e selecione "Sincronizar com Google Calendar". Siga
                as instruções para autorizar a sincronização.
              </CollapseData>
            </div>
          </Card>
          <Card className="bg-primary/20 mt-4">
            <h4 className="text-primary text-lg text-left w-full font-semibold">
              Ainda precisa de ajuda?
            </h4>
            <small className="text-primary/50">Entre em contato conosco</small>
            <button className="btn primary small mt-4">Entre em contato</button>
          </Card>
        </div>
        <div className="w-full md:w-7/12">
          <Card>
            <div className="w-full flex items-center justify-between border-b pb-4 border-gray-100">
              <h4 className="text-neutral-600 text-lg text-left w-full mb-2 md:mb-0 md:w-7/12 ml-4">
                Tutoriais
              </h4>
              <button className="btn link small">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.80797 8.33317L9.08297 1.6665H4.69131C4.20574 1.66648 3.73981 1.85823 3.39491 2.20001C3.05001 2.54179 2.85404 3.00596 2.84964 3.4915V5.5665C2.84679 6.04957 3.03559 6.51407 3.37464 6.85817L4.80797 8.33317Z"
                    fill="#A1A1AA"
                  />
                  <path
                    opacity="0.3"
                    d="M15.307 1.6665H10.5737L5.70703 9.22484L6.54036 10.0582C7.13211 10.6577 7.46436 11.4658 7.46536 12.3082V16.6665C7.45161 16.9838 7.5288 17.2984 7.68785 17.5734C7.8469 17.8483 8.08119 18.072 8.36314 18.2182C8.64508 18.3645 8.96293 18.4271 9.27927 18.3987C9.59561 18.3704 9.89726 18.2522 10.1487 18.0582L11.2904 17.2248C11.4988 17.078 11.6688 16.8833 11.7863 16.6571C11.9038 16.4309 11.9652 16.1797 11.9654 15.9248V12.4165C11.9588 11.963 12.0482 11.5133 12.2278 11.0968C12.4073 10.6803 12.6728 10.3065 13.007 9.99984L16.532 6.85817C16.7283 6.68553 16.885 6.47257 16.9914 6.23383C17.0978 5.9951 17.1515 5.73621 17.1487 5.47484V3.4915C17.1443 3.00596 16.9483 2.54179 16.6034 2.20001C16.2585 1.85823 15.7926 1.66648 15.307 1.6665Z"
                    fill="#A1A1AA"
                  />
                </svg>
                Filtrar
              </button>
            </div>
            <div className="w-full flex flex-col my-4 gap-4">
              <TutorialRow
                thumbnail="/thumb-1.svg"
                title="Como configurar seu perfil"
                description="Aprenda a configurar e personalizar seu perfil no sistema Orazelo, incluindo informações pessoais, foto de perfil e preferências."
                type="Perfil"
              />
              <TutorialRow
                thumbnail="/thumb-2.svg"
                title="Sincronizando seu calendário com Google Calendar"
                description="We’ve been focused on making a the from also not been afraid to and step away been focused create eye"
                type="Integração"
              />
              <TutorialRow
                thumbnail="/thumb-3.svg"
                title="Utilizando o Dashboard de gamificação"
                description="Descubra como utilizar o Dashboard de Gamificação para acompanhar seu progresso, metas e conquistas no sistema Orazelo."
                type="VIP"
              />
              <TutorialRow
                thumbnail="/thumb-4.svg"
                title="Gerenciando notificações e preferências"
                description="Saiba como ajustar suas configurações de notificações e preferências para receber alertas importantes e personalizar sua experiência."
                type="Configurações"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
