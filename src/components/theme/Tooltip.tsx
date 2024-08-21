"use client";

import { ReactNode, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface IProps {
  children: ReactNode;
  text: string;
  position?: "bottom" | "left" | "right" | "top";
}

export default function Tooltip({
  children,
  text,
  position = "bottom",
}: IProps): ReactNode {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const showTooltip = () => text && setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  useEffect(() => {
    if (tooltipRef.current && containerRef.current) {
      const { top, left, height, width } =
        containerRef.current.getBoundingClientRect();

      let newTop = top;
      let newLeft = left;

      switch (position) {
        case "top":
          newTop = top - tooltipRef.current.offsetHeight - 5;
          newLeft = left + width / 2 - tooltipRef.current.offsetWidth / 2;
          break;
        case "bottom":
          newTop = top + height + 5;
          newLeft = left + width / 2 - tooltipRef.current.offsetWidth / 2;
          break;
        case "left":
          newTop = top + height / 2 - tooltipRef.current.offsetHeight / 2;
          newLeft = left - tooltipRef.current.offsetWidth - 5;
          break;
        case "right":
          newTop = top + height / 2 - tooltipRef.current.offsetHeight / 2;
          newLeft = left + width + 5;
          break;
      }

      setTooltipPosition({ top: newTop, left: newLeft });
    }
  }, [isVisible, position]);

  return (
    <div
      className="relative group focus-within"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      ref={containerRef}
    >
      {children}
      {isVisible &&
        createPortal(
          <span
            ref={tooltipRef}
            className={`absolute z-50 transform px-2 py-1 bg-neutral-800/80 text-white rounded-lg text-sm transition-opacity duration-200 opacity-100`}
            style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
          >
            {text}
          </span>,
          document.body
        )}
    </div>
  );
}
