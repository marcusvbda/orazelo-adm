"use client";

import { ReactNode, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export const DropMenuItem = ({ children, onClick = null }: any) => {
  return (
    <div
      className="w-28 text-end cursor-pointer text-neutral-500 hover:text-neutral-700 transition-all duration-200 px-4 py-1"
      onClick={onClick && onClick}
    >
      {children}
    </div>
  );
};

export default function DropMenu({
  children,
  source,
  className = "",
}: any): ReactNode {
  const [visible, setVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && menuRef.current && contentRef.current) {
      const { bottom, left, width } = menuRef.current.getBoundingClientRect();
      const { width: contentW } = contentRef.current.getBoundingClientRect();
      setMenuPosition({
        top: bottom,
        left: left + width - contentW, // Subtrai a largura do menu para alinhar à esquerda
      });
    }
  }, [visible]);

  return (
    <div
      className={className}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div ref={menuRef} className="relative inline-block text-left">
        {source}
        {visible &&
          createPortal(
            <div
              ref={contentRef}
              className="fixed z-10 rounded-md bg-white dark:bg-surface-secondary dark:border dark:border-gray-100/5 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              style={{
                top: `${menuPosition.top}px`,
                left: `${menuPosition.left}px`,
              }}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              {children}
            </div>,
            document.body
          )}
      </div>
    </div>
  );
}
