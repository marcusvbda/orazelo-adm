"use client";

import AspectRatio from "@/components/AspectRatio";
import Barchart from "@/components/Barchar";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

export default function ReportsPage(): ReactNode {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="relative top-[-100px] overflow-y-auto theme-container">
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg flex items-start md:items-center flex-row gap-4 h-[134px]">
            <div className="flex flex-col">
              <h4 className="text-xl text-primary-700 font-semibold">
                Parabéns! Você agora é um psicólogo VIP.
              </h4>
              <div className="text-neutral-500">
                Continue completando tarefas para manter seu título.
              </div>
            </div>
            <div className="ml-auto relative hidden md:flex">
              <AspectRatio
                src="/winner.svg"
                size={{ width: 275 }}
                className="absolute -top-6"
              />
            </div>
            <Link href="#" className="ml-auto md:ml-0 self-start">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="6" fill="#F1F1F2" />
                <path
                  d="M15.3325 15.2858C15.2076 15.4099 15.0386 15.4796 14.8625 15.4796C14.6864 15.4796 14.5174 15.4099 14.3925 15.2858L8.69915 9.65908C8.63667 9.59711 8.58707 9.52337 8.55322 9.44213C8.51938 9.36089 8.50195 9.27376 8.50195 9.18575C8.50195 9.09774 8.51938 9.0106 8.55322 8.92937C8.58707 8.84813 8.63667 8.77439 8.69915 8.71242C8.82406 8.58825 8.99303 8.51855 9.16915 8.51855C9.34528 8.51855 9.51424 8.58825 9.63915 8.71242L15.3325 14.3391C15.395 14.4011 15.4446 14.4748 15.4784 14.556C15.5123 14.6373 15.5297 14.7244 15.5297 14.8124C15.5297 14.9004 15.5123 14.9876 15.4784 15.0688C15.4446 15.15 15.395 15.2238 15.3325 15.2858Z"
                  fill="#3F4254"
                />
                <path
                  opacity="0.3"
                  d="M9.63897 15.3331C9.51167 15.4622 9.3383 15.5354 9.15702 15.5366C8.97573 15.5379 8.80137 15.4671 8.6723 15.3398C8.54323 15.2125 8.47002 15.0391 8.46877 14.8578C8.46752 14.6765 8.53833 14.5022 8.66564 14.3731L14.359 8.66644C14.4863 8.53737 14.6596 8.46416 14.8409 8.46291C15.0222 8.46166 15.1966 8.53247 15.3256 8.65978C15.4547 8.78708 15.5279 8.96044 15.5292 9.14173C15.5304 9.32301 15.4596 9.49737 15.3323 9.62644L9.63897 15.3331Z"
                  fill="#3F4254"
                />
              </svg>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-4">
            <div className="w-full md:w-4/12 flex flex-col gap-4">
              <Card>
                <h4 className="text-neutral-800 font-semibold text-lg">
                  Perfil
                </h4>
                <div className="w-full flex flex-col my-4 items-center justify-center">
                  <div
                    className="size-32 rounded-full  bg-cover mb-4 border-4 border-primary relative"
                    style={{ backgroundImage: `url(/user-5.svg)` }}
                  >
                    <svg
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                      className="absolute right-0 bottom-0"
                    >
                      <rect
                        x="0.833984"
                        width="32"
                        height="32"
                        rx="16"
                        fill="#00959E"
                      />
                      <path
                        opacity="0.3"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.3413 11.8754L10.168 18.6662H23.5013L17.3279 11.8754C17.0803 11.603 16.6586 11.5829 16.3862 11.8306C16.3705 11.8448 16.3556 11.8598 16.3413 11.8754Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.8384 18.4739L22.355 12.568C22.6064 12.299 23.0282 12.2846 23.2973 12.5359C23.4323 12.662 23.5089 12.8384 23.5089 13.0231V21.3328H19.5089H10.168V13.0231C10.168 12.8384 10.2446 12.662 10.3796 12.5359C10.6486 12.2846 11.0705 12.299 11.3218 12.568L16.8384 18.4739Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-400 text-sm">Dra.</div>
                  <div className="text-gray-700 text-sm font-semibold">
                    Vera Roberta
                  </div>
                  <div className="w-full px-8 flex flex-row gap-2 items-center justify-center mt-4">
                    <div className="border border-gray-200 p-1 rounded-lg px-2 text-sm font-semibold flex items-center gap-1">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          d="M13.848 7.5H13.329C12.403 7.5 11.5528 8.01188 11.1195 8.83025L10.6286 9.75758C10.554 9.89842 10.5896 10.0723 10.7135 10.1726L11.0338 10.4319C11.5529 10.8521 11.9633 11.3909 12.2306 12.0029L12.3604 12.3001C12.4134 12.4215 12.5333 12.5 12.6659 12.5H16.0625C16.9417 12.5 17.505 11.5645 17.0936 10.7875L16.0574 8.83025C15.6242 8.01188 14.774 7.5 13.848 7.5Z"
                          fill="#00BAC9"
                        />
                        <path
                          opacity="0.3"
                          d="M15.5013 5.00065C15.5013 4.08018 14.7551 3.33398 13.8346 3.33398C12.9142 3.33398 12.168 4.08018 12.168 5.00065C12.168 5.92113 12.9142 6.66732 13.8346 6.66732C14.7551 6.66732 15.5013 5.92113 15.5013 5.00065Z"
                          fill="#00BAC9"
                        />
                        <path
                          d="M4.3783 12.3799C5.00249 10.9353 6.42559 10 7.99925 10C9.57292 10 10.996 10.9353 11.6202 12.3799L12.8268 15.1722C13.3023 16.2726 12.4955 17.5 11.2968 17.5H4.70168C3.50303 17.5 2.69628 16.2726 3.17173 15.1722L4.3783 12.3799Z"
                          fill="#00BAC9"
                        />
                        <path
                          opacity="0.3"
                          d="M10.5 6.66602C10.5 5.2853 9.38071 4.16602 8 4.16602C6.61929 4.16602 5.5 5.2853 5.5 6.66602C5.5 8.04673 6.61929 9.16602 8 9.16602C9.38071 9.16602 10.5 8.04673 10.5 6.66602Z"
                          fill="#00BAC9"
                        />
                      </svg>
                      8
                    </div>
                    <div className="border border-gray-200 p-1 rounded-lg px-2 text-sm font-semibold flex items-center gap-1">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          opacity="0.3"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.16732 2.5V2.91667C7.16732 3.60702 7.72696 4.16667 8.41732 4.16667H12.584C13.2743 4.16667 13.834 3.60702 13.834 2.91667V2.5H15.5007C16.4211 2.5 17.1673 3.24619 17.1673 4.16667V17.5C17.1673 18.4205 16.4211 19.1667 15.5007 19.1667H5.50065C4.58018 19.1667 3.83398 18.4205 3.83398 17.5V4.16667C3.83398 3.24619 4.58018 2.5 5.50065 2.5H7.16732Z"
                          fill="#00BAC9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.66667 1.66634C9.66667 1.2061 10.0398 0.833008 10.5 0.833008C10.9602 0.833008 11.3333 1.2061 11.3333 1.66634H12.5833C12.8135 1.66634 13 1.85289 13 2.08301V2.91634C13 3.14646 12.8135 3.33301 12.5833 3.33301H8.41667C8.18655 3.33301 8 3.14646 8 2.91634V2.08301C8 1.85289 8.18655 1.66634 8.41667 1.66634H9.66667Z"
                          fill="#00BAC9"
                        />
                        <path
                          opacity="0.3"
                          d="M13.834 7.5H9.66732C9.20708 7.5 8.83398 7.8731 8.83398 8.33333C8.83398 8.79357 9.20708 9.16667 9.66732 9.16667H13.834C14.2942 9.16667 14.6673 8.79357 14.6673 8.33333C14.6673 7.8731 14.2942 7.5 13.834 7.5Z"
                          fill="#00BAC9"
                        />
                        <path
                          opacity="0.3"
                          d="M8.00065 8.33333C8.00065 7.8731 7.62756 7.5 7.16732 7.5C6.70708 7.5 6.33398 7.8731 6.33398 8.33333C6.33398 8.79357 6.70708 9.16667 7.16732 9.16667C7.62756 9.16667 8.00065 8.79357 8.00065 8.33333Z"
                          fill="#00BAC9"
                        />
                        <path
                          opacity="0.3"
                          d="M8.00065 11.6673C8.00065 11.2071 7.62756 10.834 7.16732 10.834C6.70708 10.834 6.33398 11.2071 6.33398 11.6673C6.33398 12.1276 6.70708 12.5007 7.16732 12.5007C7.62756 12.5007 8.00065 12.1276 8.00065 11.6673Z"
                          fill="#00BAC9"
                        />
                        <path
                          opacity="0.3"
                          d="M13.834 10.834H9.66732C9.20708 10.834 8.83398 11.2071 8.83398 11.6673C8.83398 12.1276 9.20708 12.5007 9.66732 12.5007H13.834C14.2942 12.5007 14.6673 12.1276 14.6673 11.6673C14.6673 11.2071 14.2942 10.834 13.834 10.834Z"
                          fill="#00BAC9"
                        />
                        <path
                          opacity="0.3"
                          d="M8.00065 14.9993C8.00065 14.5391 7.62756 14.166 7.16732 14.166C6.70708 14.166 6.33398 14.5391 6.33398 14.9993C6.33398 15.4596 6.70708 15.8327 7.16732 15.8327C7.62756 15.8327 8.00065 15.4596 8.00065 14.9993Z"
                          fill="#00BAC9"
                        />
                        <path
                          opacity="0.3"
                          d="M13.834 14.166H9.66732C9.20708 14.166 8.83398 14.5391 8.83398 14.9993C8.83398 15.4596 9.20708 15.8327 9.66732 15.8327H13.834C14.2942 15.8327 14.6673 15.4596 14.6673 14.9993C14.6673 14.5391 14.2942 14.166 13.834 14.166Z"
                          fill="#00BAC9"
                        />
                      </svg>
                      12
                    </div>
                    <div className="border border-gray-200 p-1 rounded-lg px-2 text-sm font-semibold flex items-center gap-1">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.1647 5.83366C11.8869 8.61144 11.0536 10.0976 9.66471 10.2923C9.66471 10.2923 10.9147 5.41699 9.24805 2.91699C9.24805 2.91699 9.07131 5.5957 7.28554 8.81009C6.44846 10.3168 5.49805 11.3326 5.49805 13.3337C5.49805 16.1909 8.42425 17.6675 10.5028 17.6675C12.5814 17.6675 15.498 16.6675 15.498 13.1674C15.498 11.7282 14.3869 9.28358 12.1647 5.83366Z"
                          fill="#00BAC9"
                        />
                      </svg>
                      24
                    </div>
                  </div>
                </div>
              </Card>
              <TypeCard
                icon="/color-calendar.svg"
                title="Consultas"
                text="48/64"
                description="Ótimo! Você está perto de concluir a meta mensal de consultas. Continue!"
              />
              <TypeCard
                icon="/color-star.svg"
                title="Avaliações"
                text="4.9"
                description="Você acima da média de avaliações dos psicólogos do Orazelo."
              />
            </div>
            <div className="w-full md:w-10/12 flex flex-col gap-4">
              <div className="w-full flex flex-col md:flex-row gap-4">
                <Card className="w-full md:w-6/12">
                  <div>
                    <h4 className="text-neutral-800 font-semibold text-lg">
                      Seus dias consecutivos
                    </h4>
                    <small className="text-neutral-400 text-sm">
                      23 dias no total
                    </small>
                  </div>
                  <div className="w-full flex flex-row mt-6 gap-2">
                    <div className="flex-1">
                      <div className="flex-col items-center justify-center">
                        <div className="text-sm text-neutral-400">Seg</div>
                        <div
                          className="text-white text-xs bg-no-repeat bg-center rounded-lg flex items-center justify-center w-[28px] h-[40px] pt-4"
                          style={{ backgroundImage: 'url("/red-fire.svg")' }}
                        >
                          22
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex-col items-center justify-center">
                        <div className="text-sm text-neutral-400">Ter</div>
                        <div
                          className="text-white text-xs bg-no-repeat bg-center rounded-lg flex items-center justify-center w-[28px] h-[40px] pt-4"
                          style={{ backgroundImage: 'url("/red-fire.svg")' }}
                        >
                          23
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex-col items-center justify-center">
                        <div className="text-sm text-neutral-400">Qui</div>
                        <div
                          className="text-white text-xs bg-no-repeat bg-center rounded-lg flex items-center justify-center w-[28px] h-[40px] pt-4"
                          style={{ backgroundImage: 'url("/red-fire.svg")' }}
                        >
                          24
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex-col items-center justify-center">
                        <div className="text-sm text-neutral-400">Sex</div>
                        <div
                          className="text-white text-xs bg-no-repeat bg-center rounded-lg flex items-center justify-center w-[28px] h-[40px] pt-4"
                          style={{ backgroundImage: 'url("/red-fire.svg")' }}
                        >
                          25
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex-col items-center justify-center">
                        <div className="text-sm text-neutral-400">Sab</div>
                        <div
                          className="text-white text-xs bg-no-repeat bg-center rounded-lg flex items-center justify-center w-[28px] h-[40px] pt-4"
                          style={{ backgroundImage: 'url("/red-fire.svg")' }}
                        >
                          27
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex-col items-center justify-center">
                        <div className="text-sm text-neutral-400">Dom</div>
                        <svg
                          className="mt-3"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <rect
                            x="1.86554"
                            y="1.57745"
                            width="24.8889"
                            height="24.8889"
                            rx="12.4444"
                            stroke="#D92D20"
                            strokeWidth="2.48889"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card
                  className="!bg-primary-100 pr-32 px-6 py-8 flex flex-col gap-2 bg-[url('/report-video-icon.svg')] bg-no-repeat bg-auto justify-center"
                  style={
                    { backgroundPosition: "right 12px center" } as CSSProperties
                  }
                >
                  <h4 className="text-primary-500 text-xl font-semibold">
                    Inicie uma consulta por vídeo
                  </h4>
                  <div className="text-primary/50 text-sm w-8/12 mb-6">
                    Complete essa tarefa para completar seu dia.
                  </div>
                  <Link
                    href="#"
                    className="mt-auto flex items-center gap-2 font-semibold"
                  >
                    Começar agora
                    <AspectRatio src="/arrow-blue.svg" size={{ height: 22 }} />
                  </Link>
                </Card>
              </div>
              <Card>
                <div className="flex flex-row justify-between">
                  <div>
                    <h4 className="text-neutral-800 text-lg font-semibold">
                      Consultas
                    </h4>
                    <small className="text-neutral-400 text-sm">
                      Veja a média de consultas por mês até aqui
                    </small>
                  </div>
                  <div className="ml-auto flex gap-2 w-full md:w-5/12">
                    <select>
                      <option>Esse ano de 2024</option>
                    </select>
                    <button className="btn primary small !p-1 !rounded-lg w-14">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_11229_14252)">
                          <path
                            opacity="0.3"
                            d="M14.1641 6.66659C13.7038 6.66659 13.3307 6.2935 13.3307 5.83326C13.3307 5.37302 13.7038 4.99993 14.1641 4.99993H14.9974C16.8383 4.99993 18.3307 6.49231 18.3307 8.33326V14.9999C18.3307 16.8409 16.8383 18.3333 14.9974 18.3333H4.9974C3.15645 18.3333 1.66406 16.8409 1.66406 14.9999V8.32747C1.66406 6.48653 3.15645 4.99414 4.9974 4.99414H5.83073C6.29097 4.99414 6.66407 5.36724 6.66407 5.82747C6.66407 6.28771 6.29097 6.66081 5.83073 6.66081H4.9974C4.07692 6.66081 3.33073 7.407 3.33073 8.32747V14.9999C3.33073 15.9204 4.07692 16.6666 4.9974 16.6666H14.9974C15.9179 16.6666 16.6641 15.9204 16.6641 14.9999V8.33326C16.6641 7.41279 15.9179 6.66659 14.9974 6.66659H14.1641Z"
                            fill="white"
                          />
                          <path
                            opacity="0.3"
                            d="M9.16536 2.49935C9.16536 2.03911 9.53846 1.66602 9.9987 1.66602C10.4589 1.66602 10.832 2.03911 10.832 2.49935L10.832 10.8327C10.832 11.2929 10.4589 11.666 9.9987 11.666C9.53846 11.666 9.16536 11.2929 9.16536 10.8327L9.16536 2.49935Z"
                            fill="white"
                          />
                          <path
                            d="M9.9974 2.01119L11.9081 3.92194C12.2336 4.24737 12.7612 4.24737 13.0867 3.92194C13.4121 3.5965 13.4121 3.06886 13.0867 2.74343L10.5867 0.243427C10.2612 -0.0820098 9.73358 -0.0820098 9.40814 0.243427L6.90814 2.74343C6.5827 3.06886 6.5827 3.5965 6.90814 3.92194C7.23358 4.24737 7.76121 4.24737 8.08665 3.92194L9.9974 2.01119Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_11229_14252">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
                <Barchart
                  step={5}
                  height={50}
                  width={20}
                  data={{
                    jan: 80,
                    fev: 96,
                    mar: 75,
                    abr: 53,
                    mai: 72,
                    jun: 77,
                    jul: 99,
                  }}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TypeCard = ({ title, icon, text, description }: any) => {
  return (
    <Card className="flex flex-col gap-4">
      <h4 className="font-semibold text-lg text-neutral-700">{title}</h4>
      <div className="flex items-center gap-2 text-neutral-800 font-bold text-xl">
        <AspectRatio src={icon} size={{ width: 28 }} />
        {text}
      </div>
      <div className="text-neutral-400 text-sm">{description}</div>
    </Card>
  );
};
