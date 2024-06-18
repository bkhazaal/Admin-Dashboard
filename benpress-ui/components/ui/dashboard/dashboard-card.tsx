"use client";

import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "../card";

interface DashboardCardProps {
  title: string;
  initialCount: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, initialCount, icon }: DashboardCardProps) => {
  const [count, setCount] = useState(initialCount);
  const clickityCounterson = (clicks: number) => {
    clicks += 1;
    return clicks;
  };
  return (
    <Card
      onClick={() => setCount(clickityCounterson(count))}
      className="flex justify-center bg-slate-100 hover:scale-105 transition dark:bg-slate-800 m:-1/2 lg:w-1/4"
    >
      <CardContent className="p-10 content-center">
        <h3 className="text-3xl text-center font-bold text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className="flex gap-5 justify-center items-center mt-5 mb-5">
          {icon}
        </div>
        <div className="text-3xl text-center font-bold text-slate-500 dark:text-slate-200">
          {count}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
