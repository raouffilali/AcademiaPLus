import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Subscription } from "../../constants/interfaces";

interface SubscriptionProps {
  subscription: Subscription;
}

const SubscriptiondashCard: React.FC<SubscriptionProps> = ({
  subscription,
}) => {
  const { id, type, startedOn, price, access, billingDate, active } =
    subscription;

  const isFree = type === "Free"; // Check if the subscription type is "Free"

  const isActive = true;
  return (
    <div className="bg-white rounded-lg p-4 border-b mb-4">
      <div className="flex text-sm justify-between">
        <div className="ml-0">
          <div className="flex">
          <h3 className="text-lg text-gray-800 font-semibold mb-2">{type}</h3>
          <span className="text-xs text-white">{active ? <p className="bg-emerald-500 p-1 rounded" >Active</p> : <p className="bg-red-500 rounded p-1">Expired</p>}</span>
          </div>
          <p className="text-gray-500 text-xs">Subscription ID: {id}</p>
        </div>
        {!isFree && (
          <div>
            <p>Auto Renewal</p>

            <label className="relative inline-flex items-center cursor-pointer switch ml-2">
              <input
                className="sr-only peer"
                type="checkbox"
                // Handle unsubscribe logic
              />
              <span className="slider round"></span>
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blueLink rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-bluePal"></div>
            </label>
          </div>
        )}
        {!isFree && (
          <div className="mr-0">
            <Link to="/subscription">
            <button className="py-1 border rounded px-3 border-bluePal text-blueLink font-medium  hover:text-white hover:bg-blueLink">
              Change Plan
            </button>
            </Link>
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
      <table className="ml-0 mt-6 min-w-full text-xs  ">
        <thead>
          <tr className="text-gray-400 font-mono">
            <th className="text-left py-1 lg:pr-8 ">Started On</th>
            <th className="text-left py-1 px-10 ">Price</th>
            <th className="text-left py-1 px-10">Access</th>
            <th className="text-left py-1 px-8 ">Billing Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-800 font-medium">
            <td className="py-1 pr-6 ">{startedOn}</td>
            <td className="py-1 px-10 ">{price}</td>
            <td className="py-1 px-10 ">{access}</td>
            <td className="py-1 px-8 ">{billingDate}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default SubscriptiondashCard;
