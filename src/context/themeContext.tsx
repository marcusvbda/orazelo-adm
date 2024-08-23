import { createContext, ReactNode, useEffect, useState } from "react";

export const ThemeContext = createContext<any>({});

export default function ThemeContextProvider({ children }: any): ReactNode {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
      }
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        sidebarCollapsed,
        setSidebarCollapsed,
        screenWidth,
        setScreenWidth,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
