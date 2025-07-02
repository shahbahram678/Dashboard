import React, { useEffect, useState } from 'react';
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Tables from '../components/Tables';

const Payments = () => {
  const [data, setData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ Sidebar toggle state

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json.paymentspage)) // ✅ Load data for Page 6
      .catch((err) => console.error("Failed to fetch data:", err));
  }, []);

  // ✅ Toggle and close handlers
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen flex font-sans bg-gray-100 relative">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <main className="flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-6 flex justify-center">
          <Tables products={data} />
        </div>
      </main>
    </div>
  );
};

export default Payments;
