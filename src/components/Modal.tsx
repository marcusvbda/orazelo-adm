"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import Card from "./Card";
import AspectRatio from "./AspectRatio";

interface IProps {
  source: ReactNode;
  children: ReactNode;
  size?: string;
  title?: string;
}

export default function Modal({
  source,
  children,
  size = "8/12",
  title = "",
}: IProps): ReactNode {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link href="#" onClick={(e: any) => [e.preventDefault(), setOpen(true)]}>
        {source}
      </Link>
      {open &&
        createPortal(
          <div className="fixed inset-0 bg-black/20 z-50 flex justify-center items-center p-4 cursor-pointer">
            <div className={`w-full md:w-${size}`}>
              <Card className="w-full max-h-full">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <h4 className="text-neutral-700 text-xl font-semibold">
                    {title}
                  </h4>
                  <Link
                    href="#"
                    onClick={(e: any) => [e.preventDefault(), setOpen(false)]}
                  >
                    <AspectRatio size={{ height: 30 }} src="/close-icon.svg" />
                  </Link>
                </div>
                {children}
              </Card>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
