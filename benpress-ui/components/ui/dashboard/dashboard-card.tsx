import { Newspaper } from "lucide-react";
import { Card, CardContent } from "../card";

const DashboardCard = () => {
  return (
    <div>
      <Card className="bg-slate-100 hover:scale-105 transition dark:bg-slate-800 p-6 pb-0 sm:w-full m:w-1/2 lg:w-1/4">
        <CardContent>
          <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
            Posts
          </h3>
          <div className="flex gap-5 justify-center items-center">
            <Newspaper className="text-slate-500" size={52} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;
