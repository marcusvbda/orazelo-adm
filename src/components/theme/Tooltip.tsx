"use client";

import { ReactNode, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface IProps {
  children: ReactNode;
  text: string;
}

export default function Tooltip({ children, text }: IProps): ReactNode {
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
      const { top, left, height } =
        containerRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: top + height / 2,
        left: left + containerRef.current.offsetWidth + 2,
      });
    }
  }, [isVisible]);

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
            className={`absolute z-50 transform -translate-y-1/2 px-2 py-1 bg-neutral-800/80 text-white rounded-lg text-sm transition-opacity duration-200 opacity-100`}
            style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
          >
            {text}
          </span>,
          document.body
        )}
    </div>
  );
}
