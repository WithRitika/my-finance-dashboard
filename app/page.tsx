// import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import StatCard from "@/components/ui/StatCard";
const stats = [
  { title: "Total Balance", amount: 84200, percentage: 2.4, isPositive: true, icon: "💰" },
  { title: "Income", amount: 32000, percentage: 5.1, isPositive: true, icon: "📈" },
  { title: "Expenses", amount: 12800, percentage: 1.2, isPositive: false, icon: "💳" },
]

export default function Home() {
  return (
   <div className="min-h-screen bg-gray-950">
    <Navbar/>
     <div className="flex">
      <Sidebar/>
      <main className="flex-1 p-6">
           <h1 className="text-2xl font-bold text-white mb-6">
            Welcome back, Ritika 👋
        </h1>
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat)=>(<StatCard key={stat.title} {...stat}/>))}
        </div>
      </main>
      </div>
   </div>
  );
}
