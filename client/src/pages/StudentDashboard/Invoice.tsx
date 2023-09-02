import React from "react";
import { BsDownload } from "react-icons/bs";
import { invoices } from "../../data/invoices";

const Invoice = () => {


  return (
    <div className="bg-white rounded-lg shadow ">
      <div className="p-4">
      <h3 className="font-medium text-lg">Invoices</h3>
      <p className="text-gray-500 text-sm">You can find all of your order Invoices.</p>
      </div>
      <hr className="my-2"/>
      <div className="overflow-x-auto p-4 bg-slate-100">
      <table className="min-w-full ">
        <thead>
          <tr className="text-gray-800  text-sm">
            <th className="text-left py-2">Order ID</th>
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Amount</th>
            <th className="text-left py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="text-sm border-b text-gray-500 ">
              <td className="text-blueLink py-3 ">{invoice.id}</td>
              <td>{invoice.date}</td>
              <td>${invoice.amount}</td>
              <td>
                <span
                  className={`font-medium p-1 text-white text-xs rounded ${
                    invoice.status === "Due" ? "bg-red-500" : "bg-emerald-500"
                  }`}
                >
                  {invoice.status}
                </span>
              </td>
              <td>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => {
                    // Implement download logic for the invoice
                  }}
                >
                  <BsDownload/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Invoice;
