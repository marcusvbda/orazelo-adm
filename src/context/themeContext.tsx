import { createContext, ReactNode, useState } from "react";

export const ThemeContext = createContext<any>({});

export default function ThemeContextProvider({ children }: any): ReactNode {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <ThemeContext.Provider
      value={{
        sidebarCollapsed,
        setSidebarCollapsed,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
