import { StatCardProps } from "@/types";
const StatCard = ({
  title,
  amount,
  percentage,
  isPositive,
  icon,
}: StatCardProps) => {
  return <div className="bg-gray-900 flex flex-col rounded-xl border border-gray-800 p-6 gap-4">
    <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm font-medium">{title}</span>
        <span className="text-2xl">{icon}</span>
    </div>
    <p className="text-white text-3xl font-bold">₹{amount.toLocaleString("en-IN")}</p>
    <div className={`flex items-center gap-1 text-sm font-medium ${isPositive? "text-green-400" : "text-red-400"}`}>
        <span>{isPositive ?  "📈" : "📉"}</span>
        <span>{isPositive ? "+" : "-"}{percentage}%</span>
        <span className="text-gray-500 font-normal">vs last month</span>
    </div>
  </div>;
};

export default StatCard;
