import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react"; // Icon library (optional)

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 2xl:w-96 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static transition-transform duration-300 ease-in-out z-60`}
      >
        {/* Header with Close Button on Mobile */}
        <div className="flex items-center justify-between h-20 px-4 border-b border-gray-700">
          <span className=" text-2xl font-bold">My Dashboard</span>

          {/* Close button: only visible on small screens */}
          <button
            onClick={onClose}
            className="lg:hidden text-white hover:text-red-400 focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-4">
          <SidebarItem text="Dashboard" to="/dashboard" active={location.pathname === "/dashboard"} />
          <SidebarItem text="User" to="/User" active={location.pathname === "/User"} />
          <SidebarItem text="Shop" to="/Shop" active={location.pathname === "/Shop"} />
          <SidebarItem text="Stock" to="/Stock" active={location.pathname === "/Stock"} />
          <SidebarItem text="Expenses" to="/Expenses" active={location.pathname === "/Expenses"} />
          <SidebarItem text="Credit" to="/Credit" active={location.pathname === "/Credit"} />
          <SidebarItem text="Payments" to="/Payments" active={location.pathname === "/Payments"} />
        </nav>
      </aside>
    </>
  );
};

const SidebarItem = ({ text, to, active }) => (
  <Link
    to={to}
    className={`block px-4 py-2 rounded-md hover:bg-gray-700 ${active ? "bg-gray-700" : ""}`}
  >
    {text}
  </Link>
);

export default Sidebar;
