"use client";

import { useEffect, useState } from "react";

export default function Tabs({
  value,
  items,
  onChange,
  className = "",
  itemClassName = "",
  itemSelectedClassName = "",
}: any) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange && onChange(selected);
  }, [onChange, selected]);

  return (
    <div className={`flex items-center gap-8 flex-wrap ${className}`}>
      {items.map((item: string, index: number) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`text-sm text-neutral-600 pb-3 transition-all duration-300 ${itemClassName} ${
            index === selected
              ? `text-primary border-b-2 border-primary-300 ${itemSelectedClassName}`
              : "cursor-pointer"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
