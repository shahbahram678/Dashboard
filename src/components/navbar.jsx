import React from "react";
import { Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center bg-[#1e2939] text-white p-3">
      {/* Hamburger icon (small screens) */}
      <button onClick={toggleSidebar} className="lg:hidden mr-3">
        <Menu size={28} />
      </button>

      {/* Search Bar */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      {/* Profile Icon */}
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold ml-4">
        U
      </div>
    </div>
  );
};

export default Navbar;
