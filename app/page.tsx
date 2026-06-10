// import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
export default function Home() {
  return (
   <main className="min-h-screen bg-gray-950">
    <Navbar/>
     <div className="flex items-center justify-center h-[90vh]">
        <h1 className="text-4xl font-bold text-white">
          Finance Dashboard 🚀
        </h1>
      </div>
   </main>
  );
}
