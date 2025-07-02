import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Tables from "../components/Tables";

const Shop = () => {
  const [data, setData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ Sidebar state

  // ✅ Fetch data
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json.shoppage))
      .catch((err) => console.error("Failed to fetch data:", err));
  }, []);

  // ✅ Toggle functions
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen flex font-sans bg-gray-100 relative">
      {/* ✅ Sidebar controlled by state */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* ✅ Main content */}
      <main className="flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-6 flex justify-center">
          <Tables products={data} />
        </div>
      </main>
    </div>
  );
};

export default Shop;
