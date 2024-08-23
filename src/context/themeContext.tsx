import { createContext, ReactNode, useEffect, useState } from "react";
import { mdBreakpoint } from "../../tailwind.config";

export const ThemeContext = createContext<any>({});

export default function ThemeContextProvider({ children }: any): ReactNode {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    window.innerWidth < mdBreakpoint
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth < mdBreakpoint) {
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
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
