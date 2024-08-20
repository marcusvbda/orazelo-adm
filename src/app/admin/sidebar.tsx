"use client";
import { ReactNode } from "react";

export default function Sidebar(): ReactNode {
  return (
    <nav className="bg-white border-r border-neutral-100 fixed h-full w-36 hidden md:flex overflow-y-auto">
      <div className="bg-[url('/mock/sidebar.svg')] bg-no-repeat bg-cover mocked w-full h-[1103px]" />
    </nav>
  );
}
