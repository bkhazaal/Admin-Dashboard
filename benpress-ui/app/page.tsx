import DashboardCard from "@/components/ui/dashboard/dashboard-card";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md: flex-rowjustify-between gap-5 mb-5">
        <DashboardCard />
      </div>
    </>
  );
}
