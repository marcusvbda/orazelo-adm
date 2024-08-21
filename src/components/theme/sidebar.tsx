"use client";
import { ReactNode, useContext, useMemo, useState } from "react";
import AspectRatio from "../AspectRatio";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuItems from "@/constants/menuItems";
import Tooltip from "./Tooltip";
import { ThemeContext } from "@/context/themeContext";

interface INavLink {
  label?: string;
  icon?: string;
  collapsed: boolean;
  active?: boolean;
  rawIcon?: ReactNode;
  href: string;
  size?: any;
  className?: any;
}

const NavLink = ({
  href,
  collapsed,
  label = "",
  icon = "/dashboard.svg",
  rawIcon = null,
  active = false,
  className = "",
  size = { width: 56, height: 56 },
}: INavLink) => {
  return (
    <Tooltip text={label} position="right" disabled={!collapsed}>
      <Link
        href={href}
        className={`cursor-pointer rounded-xl min-h-14 flex ${
          collapsed
            ? "size-14 items-center justify-center"
            : "w-full h-14 items-center justify-start"
        } ${className} ${
          active
            ? "bg-primary fill-white stroke-white text-white"
            : "bg-transparent fill-neutral-400 stroke-neutral-400 text-neutral-400"
        }`}
      >
        {rawIcon ? (
          <div className="flex items-center justify-center size-14">
            {rawIcon}
          </div>
        ) : (
          <AspectRatio src={icon} size={size} />
        )}
        {!collapsed && label}
      </Link>
    </Tooltip>
  );
};

const ColapseBtn = (): ReactNode => {
  const { sidebarCollapsed, setSidebarCollapsed } = useContext(ThemeContext);
  return (
    <Link
      href="#"
      onClick={(e: any) => [
        e.preventDefault(),
        setSidebarCollapsed(!sidebarCollapsed),
      ]}
      className="text-white absolute right-[-45px]"
    >
      {sidebarCollapsed ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="size-10"
          viewBox="0 0 24 24"
        >
          <path d="M15.2928932,12 L12.1464466,8.85355339 C11.9511845,8.65829124 11.9511845,8.34170876 12.1464466,8.14644661 C12.3417088,7.95118446 12.6582912,7.95118446 12.8535534,8.14644661 L16.8535534,12.1464466 C17.0488155,12.3417088 17.0488155,12.6582912 16.8535534,12.8535534 L12.8535534,16.8535534 C12.6582912,17.0488155 12.3417088,17.0488155 12.1464466,16.8535534 C11.9511845,16.6582912 11.9511845,16.3417088 12.1464466,16.1464466 L15.2928932,13 L4.5,13 C4.22385763,13 4,12.7761424 4,12.5 C4,12.2238576 4.22385763,12 4.5,12 L15.2928932,12 Z M19,5.5 C19,5.22385763 19.2238576,5 19.5,5 C19.7761424,5 20,5.22385763 20,5.5 L20,19.5 C20,19.7761424 19.7761424,20 19.5,20 C19.2238576,20 19,19.7761424 19,19.5 L19,5.5 Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="size-10"
          viewBox="0 0 24 24"
        >
          <path d="M8.70710678,12 L19.5,12 C19.7761424,12 20,12.2238576 20,12.5 C20,12.7761424 19.7761424,13 19.5,13 L8.70710678,13 L11.8535534,16.1464466 C12.0488155,16.3417088 12.0488155,16.6582912 11.8535534,16.8535534 C11.6582912,17.0488155 11.3417088,17.0488155 11.1464466,16.8535534 L7.14644661,12.8535534 C6.95118446,12.6582912 6.95118446,12.3417088 7.14644661,12.1464466 L11.1464466,8.14644661 C11.3417088,7.95118446 11.6582912,7.95118446 11.8535534,8.14644661 C12.0488155,8.34170876 12.0488155,8.65829124 11.8535534,8.85355339 L8.70710678,12 L8.70710678,12 Z M4,5.5 C4,5.22385763 4.22385763,5 4.5,5 C4.77614237,5 5,5.22385763 5,5.5 L5,19.5 C5,19.7761424 4.77614237,20 4.5,20 C4.22385763,20 4,19.7761424 4,19.5 L4,5.5 Z" />
        </svg>
      )}
    </Link>
  );
};

export default function Sidebar(): ReactNode {
  const { sidebarCollapsed } = useContext(ThemeContext);
  const pathName = usePathname();

  const items = useMemo(() => {
    return menuItems.map((item) => {
      return {
        ...item,
        active: item.href === pathName,
      };
    });
  }, [pathName]);

  return (
    <nav
      className={`bg-white transition-all duration-200 border-r border-neutral-100 fixed h-full z-50 ${
        sidebarCollapsed ? "w-[144px] left-[-144px] md:left-0" : "w-[264px] p-8"
      } flex justify-between py-10 gap-4 items-center flex-col`}
    >
      <Link
        href="/admin"
        className={`cursor-pointer rounded-xl flex items-center justify-center mb-10`}
      >
        <AspectRatio
          src={sidebarCollapsed ? "/logo.svg" : `/full-logo.svg`}
          size={{ height: 36 }}
        />
      </Link>
      <ColapseBtn />
      <div
        className={`flex-1 overflow-y-auto w-full flex ${
          sidebarCollapsed ? "items-center" : "items-start"
        } flex-col thin-scrollbar gap-5`}
      >
        {items.map((item) => (
          <NavLink
            collapsed={sidebarCollapsed}
            label={item.label || item.href}
            key={item.href}
            rawIcon={item.rawIcon}
            href={item.href}
            active={item.active}
          />
        ))}
      </div>
      <div
        className={`flex w-full ${
          sidebarCollapsed ? "justify-center" : "justify-start"
        }`}
      >
        <NavLink
          label="Sair"
          collapsed={sidebarCollapsed}
          icon="/exit.svg"
          href="/auth/login"
          className="h-[50px]"
        />
      </div>
    </nav>
  );
}
