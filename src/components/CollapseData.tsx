"use client";

import { Children, useState } from "react";
import AspectRatio from "./AspectRatio";

export default function CollapseData({
  defaultOpen = false,
  source = "",
  className = "",
  children,
}: any) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`flex flex-row gap-2 items-start cursor-pointer ${className}`}
      onClick={() => setOpen(!open)}
    >
      <AspectRatio
        src={`/${open ? "collapse-open" : "collapse-close"}.svg`}
        size={{ width: 22 }}
      />
      <div className="flex flex-col flex-1">
        <strong className="cursor-pointer text-sm text-neutral-700">
          {source}
        </strong>
        {open && (
          <div className="text-sm text-neutral-400 mt-2">{children}</div>
        )}
      </div>
    </div>
  );
}
