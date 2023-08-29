import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface WithdrawHistoryTableProps {
  withdrawHistory: {
    id: string;
    method: string;
    status: string;
    amount: string;
    date: string;
  }[];
  onRemoveWithdraw: (id: string) => void;
  onEditWithdraw: (id: string) => void;
}

const WithdrawHistoryTable: React.FC<WithdrawHistoryTableProps> = ({
  withdrawHistory,
  onRemoveWithdraw,
  onEditWithdraw,
}) => {
  const [expandedMenuId, setExpandedMenuId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <table className="w-full bg-slate-100">
      {/* Table header */}
      <thead>
        <tr className="text-gray-800 text-sm border-b ">
          <th className="py-4 px-4">ID</th>
          <th className="py-2 px-4">Method</th>
          <th className="py-2 px-4">Status</th>
          <th className="py-2 px-4">Amount</th>
          <th className="py-2 px-4">Date</th>
        </tr>
      </thead>

      {/* Table body */}
      <tbody className="text-sm ">
        {withdrawHistory.map((withdraw) => (
          <tr className="text-gray-500 border-b " key={withdraw.id}>
            <td className="py-4 px-4">{withdraw.id}</td>
            <td className="py-2 px-4">{withdraw.method}</td>
            <td className="py-2 px-4">
              {withdraw.status === "Pending" ? (
                <span className="bg-orange-500 text-white px-2 py-1 rounded">
                  {withdraw.status}
                </span>
              ) : withdraw.status === "Paid" ? (
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  {withdraw.status}
                </span>
              ) : (
                <span className="bg-red-500 text-white px-2 py-1 rounded">
                  {withdraw.status}
                </span>
              )}
            </td>
            <td className="py-2 px-4">{withdraw.amount}</td>
            <td className="py-2 px-4">{withdraw.date}</td>
            <td className="py-2 px-4 relative">
              <button
                onClick={() =>
                  setExpandedMenuId((prevId) =>
                    prevId === withdraw.id ? null : withdraw.id
                  )
                }
                className="focus:outline-none"
              >
                <BsThreeDotsVertical />
              </button>
              {expandedMenuId === withdraw.id && (
                <div
                  className="absolute top-0 right-0 left-4 mt-8 bg-white border  rounded-lg shadow-md"
                  style={{ transform: "translateX(-100%)" }}
                >
                  <p className="text-gray-500 text-xs px-4 pt-2 font-mono">
                    SETTINGS
                  </p>
                  <button
                    onClick={() => onEditWithdraw(withdraw.id)}
                    className="block w-full px-4 py-2 text-gray-800 hover:text-bluePal hover:bg-slate-100 focus:outline-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onRemoveWithdraw(withdraw.id)}
                    className="block w-full px-4 py-2 text-gray-800 hover:text-redPal hover:bg-slate-100 focus:outline-none"
                  >
                    Remove
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WithdrawHistoryTable;
