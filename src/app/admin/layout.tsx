"use client";
import Sidebar from "@/components/sidebar";
import ThemeContextProvider, { ThemeContext } from "@/context/themeContext";
import { ReactNode, useContext } from "react";

const Content = ({ children }: { children: ReactNode }) => {
  const { sidebarCollapsed } = useContext(ThemeContext);

  return (
    <div
      className={`w-full transition-all duration-200 flex flex-col ml-0 ${
        sidebarCollapsed ? "ml-0 md:ml-[144px]" : "ml-0 md:ml-[264px]"
      }`}
    >
      {children}
    </div>
  );
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full h-full">
      <ThemeContextProvider>
        <Sidebar />
        <Content>{children}</Content>
      </ThemeContextProvider>
    </main>
  );
}
