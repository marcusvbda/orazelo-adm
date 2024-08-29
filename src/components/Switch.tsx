"use client";

import { ReactNode, useEffect, useState } from "react";

export default function Switch({
  value = false,
  onChange = null,
}: any): ReactNode {
  const [checked, setChecked] = useState(value);
  useEffect(() => {
    onChange && onChange(checked);
  }, [onChange, checked]);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <div
        className="relative w-11 h-6 bg-gray-200 rounded-full peer
       peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
       after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5
        after:w-5 after:transition-all
         peer-checked:bg-primary"
      />
    </label>
  );
}
