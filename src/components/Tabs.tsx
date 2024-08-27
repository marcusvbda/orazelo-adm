"use client";

import { useEffect, useState } from "react";

interface IProps {
  items: string[];
  value: number;
  className?: string;
  onChange?: (value: number) => void;
}

export default function Tabs({
  value,
  items,
  onChange,
  className = "",
}: IProps) {
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
          className={`text-sm text-neutral-600 pb-3 transition-all duration-300 ${
            index === selected
              ? "text-primary border-b-2 border-primary-300"
              : "cursor-pointer"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
