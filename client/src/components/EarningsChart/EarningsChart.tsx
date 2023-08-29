import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

interface EarningsChartProps {
  data: { month: string; earnings: number }[];
}

const EarningsChart: React.FC<EarningsChartProps> = ({ data }) => {
  return (
    <div className="bg-white  rounded-lg shadow">
      <p className=" p-4  text-sm font-semibold">Earnings </p>
      <hr className="py-2"/>
      <LineChart  width={770} height={300} data={data} >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="month" className="text-sm"/>
        <YAxis className="text-sm"  />
        <Tooltip />
        
        <Line type="monotone" dataKey="earnings" stroke="#6DB8D5" />
      </LineChart>
    </div>
  );
};

export default EarningsChart;
