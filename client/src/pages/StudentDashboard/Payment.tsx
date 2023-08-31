import React from "react";
import { BsPaypal } from "react-icons/bs";
import { FaCcDiscover, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { GrMastercard } from "react-icons/gr";
import { RiMastercardFill } from "react-icons/ri";
import PaymentMethodItem from "../../components/PaymentMethodItem/PaymentMethodItem";

const Payment = () => {
  return (
    <div className="space-y-4 text-sm" >
      <div className="bg-white rounded-lg shadow  p-4 text-sm">
        <div className="flex">
          <div className="ml-0">
            <h3 className="font-medium text-gray-800 text-lg">Current Plan</h3>
            <p className="text-gray-500 "> Below your current active plan information.</p>
          </div>
          <div className="mr-0">
            <button className="border rounded text-xs font-medium hover:bg-blueLink py-1 px-3 text-blueLink border-blueLink hover:text-white ">Switch to Annual Billing </button>
          </div>
        </div>
        <hr className="my-2" />
        <p className="text-xl font-semibold mt-2">$39/Monthly</p>
        <p className="text-gray-500">
          Your next monthly charge of $39 will be applied to your primary
          payment method on <span className="text-green-500"> July 20, 2020.</span> 
        </p>
      </div>
      <div className="mb-6 bg-white shadow rounded-lg p-4 text-sm">
        <h3 className="font-medium text-lg">Payment Methods</h3>
        <p className="text-gray-500">Primary payment method is used by default</p>
        <hr  className="my-2"/>
        <div className="space-y-4">
          <PaymentMethodItem
            icon={<FaCcVisa className="text-blueLink text-lg" />}
            name="Visa ending in 1234"
            expiration="10/2021"
          />
          <PaymentMethodItem
            icon={<FaCcMastercard  className="text-orange-500 text-lg" />}
            name="MasterCard ending in 1234"
            expiration="10/2021"
          />
          <PaymentMethodItem
            icon={<FaCcDiscover className="text-red-500 text-lg" />}
            name="Discover ending in 1234"
            expiration="10/2021"
          />
          <PaymentMethodItem
            icon={<BsPaypal className="text-blueLink text-lg" />}
            name="Paypal Express ending in 1234"
            expiration="10/2021"
          />
          {/* Repeat for other payment methods */}
          <button className="font-medium text-white bg-blueLink rounded hover:bg-blue-500 py-1 px-3">
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
