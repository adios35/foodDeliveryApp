import React from "react";

const AdminDashboard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-red-500 text-white rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Total Orders</h3>
          <p className="text-4xl font-bold">100</p>
        </div>

        {/* Card 2 */}
        <div className="bg-green-500 text-white rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Revenue</h3>
          <p className="text-4xl font-bold">$10,000</p>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-500 text-white rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Users</h3>
          <p className="text-4xl font-bold">500</p>
        </div>

        {/* Add more cards as needed */}
      </div>

      {/* Other dashboard sections */}
      <div className="mt-8">
        {/* Section 1 */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Recent Orders</h3>
          {/* Render recent orders */}
          <ul>
            <li>Order 1</li>
            <li>Order 2</li>
            <li>Order 3</li>
            {/* Add more recent orders */}
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Top Products</h3>
          {/* Render top products */}
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
            {/* Add more top products */}
          </ul>
        </div>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default AdminDashboard;
