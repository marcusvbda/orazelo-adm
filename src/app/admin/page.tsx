"use client";
import Card from "@/components/Card";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function LoginPage(): ReactNode {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="relative top-[-100px] overflow-y-auto container">
        <div className="flex flex-col gap-4">
          <div className="w-full flex-col md:flex-row flex gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <Card className="bg-[url('/mock/dashboard/card-new-content.svg')] bg-no-repeat bg-contain min-h-[210px] bg-center !bg-primary-100 mocked"></Card>
              <Card className="bg-[url('/mock/dashboard/my-contents-card.svg')] bg-no-repeat bg-contain min-h-[155px] bg-center !bg-primary-500 mocked"></Card>
            </div>
            <div className="flex-1 flex-col md:flex-row flex gap-4">
              <Card className="bg-[url('/mock/dashboard/progress-chart.svg')] bg-no-repeat bg-cover min-h-[380px] bg-center mocked"></Card>
              <Card className="bg-[url('/mock/dashboard/progress-chart.svg')] bg-no-repeat bg-cover min-h-[380px] bg-center mocked"></Card>
            </div>
          </div>
          <Card className="bg-[url('/mock/dashboard/dashboard-table.svg')] bg-no-repeat bg-contain min-h-[484px] bg-center mocked"></Card>
        </div>
      </div>
    </div>
  );
}
