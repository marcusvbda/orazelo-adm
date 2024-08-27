"use client";
import { ReactNode, useContext, useMemo, useState } from "react";
import AspectRatio from "./AspectRatio";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuItems from "@/constants/menuItems";
import { ThemeContext } from "@/context/themeContext";
import Tooltip from "./Tooltip";

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
      className="bg-white size-[44px] absolute right-[-60px] md:right-[-22px] items-center justify-center flex rounded-full"
    >
      <AspectRatio
        src="/collapse-icon.svg"
        className={`transition-all duration-300 ${
          !sidebarCollapsed && "rotate-180"
        }`}
        size={{ width: 28 }}
      />
    </Link>
  );
};

export default function Sidebar(): ReactNode {
  const { sidebarCollapsed } = useContext(ThemeContext);
  const pathName = usePathname();

  const items = useMemo(() => {
    return menuItems.map((item) => {
      const active =
        item.label === "Dashboard"
          ? pathName === "/admin"
          : pathName
              .replace("/admin", "")
              .trim()
              .startsWith(item.href.replace("/admin", "").trim());
      return {
        ...item,
        active,
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
