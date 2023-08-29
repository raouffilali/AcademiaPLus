import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ordersData } from "../../data/ordersData";
import Pagination from "../../components/Pagination/Pagination"; // Import the Pagination component

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null); 
  const [currentPage, setCurrentPage] = useState(1); // Add current page state
  const ordersPerPage = 5; // Number of orders per page

  // Filtering orders based on search query
  const filteredOrders = ordersData.filter((order) =>
    order.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination boundaries
  const startIndex = (currentPage - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;
  const displayedOrders = filteredOrders.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (newPage: React.SetStateAction<number>) => {
    setCurrentPage(newPage);
  };
  const handleMenuToggle = (orderId:any) => {
    if (openMenuId === orderId) {
      setOpenMenuId(null);
    } else {
      setOpenMenuId(orderId);
    }
  };

  return (
    <div className="bg-white shadow rounded-md pb-6 mb-6">
      <div className="flex p-4">
        <div className="flex-1">
          <p className="text-lg font-medium">Orders</p>
          <p className="text-gray-500 text-sm">
            Search and manage your orders here.
          </p>
        </div>
        <input
          type="text"
          placeholder="Search orders"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-1 border rounded border-gray-300 text-sm w-40"
        />
      </div>
      <hr className="py-2" />
      <table className="w-full bg-gray-50">
        <thead>
          <tr className="text-gray-800 text-sm">
            <th className="text-left py-2 px-4">Courses</th>
            <th className="text-left py-2 px-4">Amount</th>
            <th className="text-left py-2 px-4">Invoice</th>
            <th className="text-left py-2 px-4">Date</th>
            <th className="text-left py-2 px-4">Method of Payment</th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <tbody className="text-sm">
        {displayedOrders.map((order) => (
            <tr className="text-gray-500" key={order.id}>
              <td className="py-2 px-4">{order.course}</td>
              <td className="py-2 px-4">{order.amount}</td>
              <td className="py-2 px-4">{order.invoice}</td>
              <td className="py-2 px-4">{order.date}</td>
              <td className="py-2 px-4">{order.paymentMethod}</td>
              <td className="py-2 px-4">
                <button
                  className="focus:outline-none"
                  onClick={() => handleMenuToggle(order.id)} // Toggle menu on button click
                >
                  <BsThreeDotsVertical />
                </button>
                {/* Render menu content */}
                {openMenuId === order.id && (
                  <div className="absolute bg-white border rounded-lg p-4 text-sm shadow-md">
                    {/* Menu items */}
                    <p className="font-mono">SETTINGS</p>
                    <button className="block w-full px-4 py-2 text-gray-800 hover:text-bluePal hover:bg-slate-100 focus:outline-none">
                      Edit
                    </button>
                    <button className="block w-full px-4 py-2 text-gray-800 hover:text-redPal hover:bg-slate-100 focus:outline-none">
                      Remove
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       {/* Pagination */}
       <Pagination
        totalItems={filteredOrders.length} // Total number of orders
        itemsPerPage={ordersPerPage} // Number of orders per page
       
      />
    </div>
  );
};

export default Orders;
