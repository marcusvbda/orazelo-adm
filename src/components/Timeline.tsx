"use client";

import { ReactNode } from "react";
import AspectRatio from "./AspectRatio";

export const TimelineTitle = ({ title, description }: any): ReactNode => {
  return (
    <div className="flex flex-col">
      <strong className="text-neutral-700 font-semibold">{title}</strong>
      <small className="text-xs text-neutral-400">{description}</small>
    </div>
  );
};

export default function Timeline({
  items,
  size = 28,
  titleClass = "",
}: any): ReactNode {
  return (
    <div className="flex flex-col w-full">
      {items.map((item: any, index: number) => (
        <div key={index} className="flex w-full">
          {item.pre && (
            <div className="mr-4 top-2 relative text-sm font-semibold text-neutral-700">
              {item.pre}
            </div>
          )}
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
              `min-h-${size} border-l border-dashed border-gray-300`
            }`}
          >
            <div className={`flex items-center ${titleClass}`}>
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
