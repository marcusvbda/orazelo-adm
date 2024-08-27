"use client";

import { ReactNode } from "react";
import AspectRatio from "./AspectRatio";
import DropMenu, { DropMenuItem } from "./DropMenu";
import { useRouter } from "next/navigation";

export const TimelineTitle = ({ title, description }: any): ReactNode => {
  return (
    <div className="flex flex-col">
      <strong className="text-neutral-700 font-semibold">{title}</strong>
      <small className="text-xs text-neutral-400">{description}</small>
    </div>
  );
};

export const TimelineMenu = () => {
  const router = useRouter();
  return (
    <DropMenu
      source={
        <div className="cursor-pointer size-6 bg-gray-200 rounded-lg flex items-center justify-center">
          <AspectRatio src="/etc.svg" size={{ width: 10 }} />
        </div>
      }
    >
      <DropMenuItem
        onClick={() => router.push("/admin/profile/qualification-edit")}
      >
        Editar
      </DropMenuItem>
      <DropMenuItem>Excluir</DropMenuItem>
    </DropMenu>
  );
};
export default function Timeline({ items }: any): ReactNode {
  return (
    <div className="flex flex-col w-full">
      {items.map((item: any, index: number) => (
        <div key={index} className="flex w-full">
          <div
            className={`size-9 min-size-9 bg-gray-100 rounded-full flex items-center justify-center z-10 ${
              item.iconClassName || ""
            }`}
            style={{ outline: "15px solid white" }}
          >
            <AspectRatio src={item.icon} size={{ width: 16 }} />
          </div>
          <div
            className={`relative left-[-18px] pl-8 flex-1 ${
              items.length - 1 !== index &&
              "min-h-28 border-l border-dashed border-gray-300 "
            }`}
          >
            <div className="flex items-center">
              {item.title}
              {item.post && <div className="ml-auto">{item.post}</div>}
            </div>
            {item.body && <p className="mt-4 ml-4 mb-8 w-full">{item.body}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
