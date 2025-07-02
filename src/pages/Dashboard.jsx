import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen flex font-sans bg-gray-100 relative">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main content */}
      <main className="flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SimpleCard title="Total Users" value="1,200" />
            <SimpleCard title="Sales Today" value="$3,400" />
            <SimpleCard title="Active Sessions" value="102" />
          </div>
        </div>
      </main>
    </div>
  );
};

const SimpleCard = ({ title, value }) => (
  <div className="bg-white rounded-xl p-4 shadow">
    <h4 className="text-gray-600 font-semibold">{title}</h4>
    <p className="text-3xl font-bold mt-2 text-blue-500">{value}</p>
  </div>
);

export default Dashboard;
