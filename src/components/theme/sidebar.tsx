"use client";
import { ReactNode, useMemo } from "react";
import AspectRatio from "../AspectRatio";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuItems from "@/constants/menuItems";
import Tooltip from "./Tooltip";

interface INavLink {
  label?: string;
  icon?: string;
  active?: boolean;
  rawIcon?: ReactNode;
  href: string;
  size?: any;
  className?: any;
}

const NavLink = ({
  href,
  label = "",
  icon = "/dashboard.svg",
  rawIcon = null,
  active = false,
  className = "",
  size = { height: 56 },
}: INavLink) => {
  return (
    <Tooltip text={label}>
      <Link
        href={href}
        className={`cursor-pointer rounded-xl size-14 min-h-14 flex items-center justify-center ${className} ${
          active
            ? "bg-primary fill-white stroke-white text-white"
            : "bg-transparent fill-neutral-400 stroke-neutral-400 text-neutral-400"
        }`}
      >
        {rawIcon ? rawIcon : <AspectRatio src={icon} size={size} />}
      </Link>
    </Tooltip>
  );
};

export default function Sidebar(): ReactNode {
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
    <nav className="bg-white border-r border-neutral-100 fixed h-full w-36 hidden md:flex overflow-y-auto justify-between py-10 gap-4 items-center flex-col">
      <NavLink
        icon="/logo.svg"
        href="/admin"
        className="h-[50px]"
        size={{ height: 36 }}
      />
      <div className="flex-1 overflow-y-auto w-full flex items-center flex-col thin-scrollbar gap-5">
        {items.map((item) => (
          <NavLink
            label={item.label || item.href}
            key={item.href}
            rawIcon={item.rawIcon}
            href={item.href}
            active={item.active}
          />
        ))}
      </div>
      <NavLink icon="/exit.svg" href="/auth/login" className="h-[50px]" />
    </nav>
  );
}
