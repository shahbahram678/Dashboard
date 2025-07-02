import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function Table({ products }) {
  // No fetching here — just render the passed data

  return (
    
    <div className="w-[100vw] lg:w-[70vw]">
      <div className="flex justify-end mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Product
        </button>
      </div>
      
      <div className="overflow-x-auto max-w-[100%] border rounded-xl shadow-md">
        <div className="max-h-[440px] overflow-y-auto">
          <table className="w-full table-fixed bg-white md:min-w-[900px] min-w-[400px]">
            <thead className="sticky top-0 bg-gray-100 z-50">
              <tr className="text-left text-sm text-gray-700">
                <th className="px-4 py-3 w-16">ID</th>
                <th className="px-4 py-3 md:w-64 w-40 truncate">Name</th>
                <th className="px-4 py-3 md:w-64 w-32 truncate">Price</th>
                <th className="px-4 py-3 w-24">Stock</th>
                <th className="px-4 py-3 md:w-24 w-20">kasjdhf</th>
                <th className="px-4 py-3 md:w-24 w-20">sdkjf</th>
                <th className="px-4 py-3 md:w-24 w-20">skldjf</th>
                <th className="px-4 py-3 md:w-36 w-28 sticky right-0 bg-gray-100 text-center z-10">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {products && products.length > 0 ? (
                products.map((item) => (
                  <tr key={item.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3">{item.id}</td>
                    <td className="px-4 py-3 truncate">{item.name}</td>
                    <td className="px-4 py-3 truncate">{item.price}</td>
                    <td className="px-4 py-3">{item.stock}</td>
                    <td className="px-4 py-3">{item.kasjdhf || "-"}</td>
                    <td className="px-4 py-3">{item.sdkjf || "-"}</td>
                    <td className="px-4 py-3">{item.skldjf || "-"}</td>
                    <td className="px-4 py-3 sticky right-0 bg-white z-10">
                      <div className="flex justify-center space-x-2">
                        <button
                          className="text-green-600 hover:text-green-800"
                          title="View"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-600"
                          title="Edit"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-600"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-500">
                    No products available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
    
  );
}
