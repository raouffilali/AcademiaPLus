import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface EarningsChartProps {
  data: { month: string; earnings: number }[];
}

const EarningsChart: React.FC<EarningsChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <p className="p-4 text-sm font-semibold">Earnings</p>
      <hr className="py-2" />
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="month" className="text-sm" />
          <YAxis className="text-sm" />
          <Tooltip />
          <Line type="monotone" dataKey="earnings" stroke="#6DB8D5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
