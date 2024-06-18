import DashboardCard from "@/components/ui/dashboard/dashboard-card";
import { Bird, Newspaper, PersonStanding, PocketKnife } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex gap-5 justify-center">
        <DashboardCard
          title="Epic Posts"
          initialCount={0}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Pocket-Knifes"
          initialCount={0}
          icon={<PocketKnife className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Cool Birds"
          initialCount={0}
          icon={<Bird className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Stick Figures"
          initialCount={0}
          icon={<PersonStanding className="text-slate-500" size={72} />}
        />
      </div>
    </>
  );
}
