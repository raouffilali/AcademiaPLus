import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface OrdersChartProps {
  data: { month: string; orders: number }[];
}

const OrdersChart: React.FC<OrdersChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <p className="p-4 text-sm font-semibold">Orders Chart</p>
      <hr />
      <div className="pt-3">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="orders" fill="#6DB8D5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrdersChart;
