import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

interface OrdersChartProps {
  data: { month: string; orders: number }[];
}

const OrdersChart: React.FC<OrdersChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <p className="p-4 text-sm font-semibold">Orders Chart</p>
      <hr />
      <BarChart className="pt-3" width={780} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orders" fill="#6DB8D5" />
      </BarChart>
    </div>
  );
};

export default OrdersChart;
