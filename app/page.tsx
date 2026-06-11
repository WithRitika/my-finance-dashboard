// import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
export default function Home() {
  return (
   <div className="min-h-screen bg-gray-950">
    <Navbar/>
     <div className="flex">
      <Sidebar/>
      <main className="flex-1 p-6">
           <h1 className="text-2xl font-bold text-white">
          Finance Dashboard 🚀
        </h1>
      </main>
      </div>
   </div>
  );
}
