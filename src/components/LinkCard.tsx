import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import Card from "./Card";
import AspectRatio from "./AspectRatio";

export default function LinkCard({
  title,
  description,
  className = "",
  classColor = "!bg-primary-500",
  titleClassName = "",
  descriptionClassName = "",
  href = "#",
  icon = "",
}: any): ReactNode {
  return (
    <Link
      href={href}
      onClick={(e: any) => href === "#" && e.preventDefault()}
      className={`cursor-pointer ${className}`}
    >
      <Card
        className={`zp-6 flex h-full flex-col gap-2 justify-center ${classColor}`}
        style={{ backgroundPosition: "right 12px center" } as CSSProperties}
      >
        <AspectRatio src={icon} size={{ width: 30 }} />
        <h4
          className={`text-white text-xl font-semibold mt-auto ${titleClassName}`}
        >
          {title}
        </h4>
        <div className={`text-white text-sm ${descriptionClassName}`}>
          {description}
        </div>
      </Card>
    </Link>
  );
}
