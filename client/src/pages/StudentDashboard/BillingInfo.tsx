import React, { useState } from "react";

const BillingInfo = () => {
  const [addresses, setAddresses] = useState([
    "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  ]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  const handleAddressSelection = (index: React.SetStateAction<number>) => {
    setSelectedAddressIndex(index);
  };

  const handleAddAddress = (newAddress: string) => {
    setAddresses([...addresses, newAddress]);
  };

  const handleEditAddress = (index: number, editedAddress: string) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index] = editedAddress;
    setAddresses(updatedAddresses);
  };

  return (
    <div className="bg-white shadow rounded-lg text-sm p-4">
      <h2 className="text-lg font-semibold mb-2">Billing Info</h2>
      <p className="text-sm  text-gray-500">
        Changes to your billing information will take effect starting with the 
        scheduled payment  and will be reflected <br /> on your next invoice.
      </p>
      <hr className="my-2"/>
      <h3 className="mt-4 font-medium">Billing Address</h3>
      <p className="mb-2 text-gray-500">
        Your text location determines the taxes that are applied to your bill.
      </p>
      <div className="space-y-4">
        {addresses.map((address, index) => (
          <div key={index} className="flex items-start">
            <input
              type="radio"
              id={`address-${index}`}
              name="billingAddress"
              value={address}
              checked={selectedAddressIndex === index}
              onChange={() => handleAddressSelection(index)}
              className="mt-2"
            />
            <label htmlFor={`address-${index}`} className=" text-lg font-medium ml-2">
              Billing Address #{index + 1}
              <p className="text-gray-500 text-sm font-light">{address}</p>
            </label>
            <button
              className="ml-auto py-1 px-2 rounded border text-blue-500 hover:text-blue-700"
              onClick={() => handleEditAddress(index, "Edited Address")}
            >
              Edit
            </button>
          </div>
        ))}
        <button
          className="py-1 px-2 text-blue-500 hover:text-blue-700"
          onClick={() => handleAddAddress("New Address")}
        >
          Add New Address
        </button>
      </div>
      <p className="mt-4">
        How do I correct my tax location?{" "}
        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
          Learn More
        </span>
      </p>
    </div>
  );
};

export default BillingInfo;
