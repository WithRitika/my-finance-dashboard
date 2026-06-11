const Sidebar =()=>{

    const navItems = [
  { icon: "💰", label: "Dashboard" },
  { icon: "📊", label: "Analytics" },
  { icon: "💳", label: "Transactions" },
  { icon: "👤", label: "Profile" },
  { icon: "⚙️",  label: "Settings" },
];

    return (<nav className="flex flex-col justify-between w-64 sticky top-16 bg-gray-900 border-r border-gray-800 h-[calc(100vh-64px)] px-3 py-6">
        {/* Top : nav items */}
        <div className="flex flex-col gap-1">
            {
                navItems.map((navItem,index)=><button key={navItem.label} className={`flex gap-3 items-center w-full text-left px-4 py-3 rounded-lg transition-colors ${index === 0 ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"}`}>
                    <span className="text-lg">{navItem.icon}</span>
                    <span className="text-sm font-medium">{navItem.label}</span>
                </button>)
            }
         </div> 
         <div className="flex gap-3 items-center px-4 py-3 border-t border-gray-800 mt-4">
             <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">R</div> 
             <div>
                <p className="text-white text-sm font-medium">Ritika</p>
                <p className="text-gray-400 text-sm">Senior Engineer</p>
             </div>
         </div>
    </nav>);
};

export default Sidebar;