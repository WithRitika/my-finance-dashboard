const Navbar =()=>{
    return (<nav className="sticky top-0 z-50 w-full bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-white font-bold text-xl">
            💰 Finance Dashboard
        </h1>
        <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Welcome, Ritika</span>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">Logout</button>
        </div>
    </nav>);
};

export default Navbar;