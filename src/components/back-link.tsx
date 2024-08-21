import Link from "next/link";
import { ReactNode } from "react";
import AspectRatio from "./AspectRatio";

interface IProps {
  href: string;
  children: ReactNode;
  className?: string;
}
export default function BackLink({
  href,
  children,
  className,
}: IProps): ReactNode {
  return (
    <Link href={href} className={`flex items-center gap-2 ${className}`}>
      <AspectRatio src="/back-icon.svg" alt="Voltar" size={{ width: 24 }} />
      {children}
    </Link>
  );
}
