"use client";
import { ReactNode } from "react";
import Card from "./Card";
import AspectRatio from "./AspectRatio";

export default function ProfessionalExperiences(): ReactNode {
  return (
    <Card>
      <div className="mb-8 flex items-center border-b-2 border-gray-200 pb-4">
        <div>
          <h4 className="text-neutral-600 text-lg flex items-center gap-4">
            <AspectRatio src="/qualifications.svg" size={{ width: 24 }} />
            Experiência profissional
          </h4>
        </div>
      </div>
    </Card>
  );
}
