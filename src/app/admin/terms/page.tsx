"use client";

import AspectRatio from "@/components/AspectRatio";
import BackLink from "@/components/back-link";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { useMemo, useState } from "react";

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

export default function TermsPage() {
  const [tab, setTab] = useState(0);
  const tabs = useMemo(
    () => ["Política de Privacidade", "Termos de Uso", "Políticas de Cookies"],
    []
  );
  return (
    <div className="flex flex-col">
      <Navbar
        text={
          <BackLink className="text-white text-2xl" href="/admin">
            Políticas e Termos
          </BackLink>
        }
        description="Acesse os termos e políticas do sistema Orazelo."
      />
      <div className="relative top-[-100px] overflow-y-auto theme-container flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-5/12 ">
          <Card>
            <div className="mt-4 flex flex-col gap-6">
              {tabs.map((x: any, index: number) => (
                <div
                  className="flex flex-row gap-2 items-start cursor-pointer border-b border-gray-100 border-dashed pb-4"
                  key={index}
                  onClick={() => setTab(index)}
                >
                  <AspectRatio
                    src={`/${
                      tab === index ? "plus-active" : "collapse-close"
                    }.svg`}
                    size={{ width: 22 }}
                  />
                  <div className="flex flex-col flex-1">
                    <strong
                      className={`cursor-pointer text-sm ${
                        tab === index ? "text-primary" : "text-neutral-700"
                      }`}
                    >
                      {tabs[index]}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="!bg-primary-50 mt-4">
            <h4 className="text-primary text-lg text-left w-full font-semibold">
              Ainda precisa de ajuda?
            </h4>
            <small className="text-primary/50">Entre em contato conosco</small>
            <Link href="/admin/faq/requests">
              <button className="btn primary small mt-4">
                Entre em contato
              </button>
            </Link>
          </Card>
        </div>
        <div className="w-full md:w-7/12 pt-[100px] pl-0 md:pl-4">
          <h4 className="text-neutral-700 font-semibold mb-2">
            Política de Privacidade
          </h4>
          <p className="pl-0 md:pl-6 text-sm text-neutral-500">
            A sua privacidade é importante para nós. É política do Orazelo
            respeitar a sua privacidade em relação a qualquer informação sua que
            possamos coletar no site Orazelo, e outros sites que possuímos e
            operamos. Solicitamos informações pessoais apenas quando realmente
            precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios
            justos e legais, com o seu conhecimento e consentimento. Também
            informamos por que estamos coletando e como será usado. Apenas
            retemos as informações coletadas pelo tempo necessário para fornecer
            o serviço solicitado. Quando armazenamos dados, protegemos dentro de
            meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem
            como acesso, divulgação, cópia, uso ou modificação não autorizados.
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei. O nosso site pode
            ter links para sites externos que não são operados por nós. Esteja
            ciente de que não temos controle sobre o conteúdo e práticas desses
            sites e não podemos aceitar responsabilidade por suas
            respectivas políticas de privacidade. Você é livre para recusar a
            nossa solicitação de informações pessoais, entendendo que talvez não
            possamos fornecer alguns dos serviços desejados. O uso continuado de
            nosso site será considerado como aceitação de nossas práticas em
            torno de privacidade e informações pessoais. Se você tiver alguma
            dúvida sobre como lidamos com dados do usuário e informações
            pessoais, entre em contacto connosco. O serviço Google AdSense que
            usamos para veicular publicidade usa um cookie DoubleClick para
            veicular anúncios mais relevantes em toda a Web e limitar o número
            de vezes que um determinado anúncio é exibido para você. Para mais
            informações sobre o Google AdSense, consulte as FAQs oficiais sobre
            privacidade do Google AdSense. Utilizamos anúncios para compensar os
            custos de funcionamento deste site e fornecer financiamento para
            futuros desenvolvimentos. Os cookies de publicidade comportamental
            usados ​​por este site foram projetados para garantir que você
            forneça os anúncios mais relevantes sempre que possível, rastreando
            anonimamente seus interesses e apresentando coisas semelhantes que
            possam ser do seu interesse. Vários parceiros anunciam em nosso nome
            e os cookies de rastreamento de afiliados simplesmente nos permitem
            ver se nossos clientes acessaram o site através de um dos sites de
            nossos parceiros, para que possamos creditá-los adequadamente e,
            quando aplicável, permitir que nossos parceiros afiliados ofereçam
            qualquer promoção que pode fornecê-lo para fazer uma compra.
          </p>
          <strong className="pl-0 md:pl-6 text-sm font-semibold mt-4 text-neutral-500">
            Compromisso do Usuário{" "}
          </strong>
          <p className="pl-0 md:pl-6 text-sm text-neutral-500">
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o Orazelo oferece no site e com caráter enunciativo,
            mas não limitativo: A) Não se envolver em atividades que sejam
            ilegais ou contrárias à boa fé a à ordem pública; B) Não difundir
            propaganda ou conteúdo de natureza racista, xenofóbica, kiwibet ou
            azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo
            ou contra os direitos humanos; C) Não causar danos aos sistemas
            físicos (hardwares) e lógicos (softwares) do Orazelo, de seus
            fornecedores ou terceiros, para introduzir ou disseminar vírus
            informáticos ou quaisquer outros sistemas de hardware ou software
            que sejam capazes de causar danos anteriormente mencionados.
          </p>
          <strong className="pl-0 md:pl-6 text-sm font-semibold mt-4 text-neutral-500">
            Mais informações
          </strong>
          <p className="pl-0 md:pl-6 text-sm text-neutral-500">
            Esperemos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site. Esta política é
            efetiva a partir de 17 de Setembro 2024 às 16:35
          </p>
        </div>
      </div>
    </div>
  );
}
