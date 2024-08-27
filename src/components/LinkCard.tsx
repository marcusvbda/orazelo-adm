import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import Card from "./Card";
import AspectRatio from "./AspectRatio";

export default function LinkCard({
  title,
  description,
  className = "",
  href = "#",
  icon = "",
}: any): ReactNode {
  return (
    <Link href={href} className={`cursor-pointer ${className}`}>
      <Card
        className="!bg-primary-500 p-6 flex h-full flex-col gap-2 justify-center"
        style={{ backgroundPosition: "right 12px center" } as CSSProperties}
      >
        <AspectRatio src={icon} size={{ width: 30 }} />
        <h4 className="text-white text-xl font-semibold mt-auto">{title}</h4>
        <div className="text-white text-sm">{description}</div>
      </Card>
    </Link>
  );
}
