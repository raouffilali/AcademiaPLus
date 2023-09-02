import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import PaymentMethodDropdown from "../PaymentMethodDropdown/PaymentMethodDropdown";

interface PaymentMethodItemProps {
  icon: React.ReactNode;
  name: string;
  expiration: string;
}

const PaymentMethodItem: React.FC<PaymentMethodItemProps> = ({
  icon,
  name,
  expiration,
}) => {
  const handleEdit = () => {
    // Implement the edit logic
  };

  const handleDelete = () => {
    // Implement the delete logic
  };

  const handleMakePrimary = () => {
    // Implement the make primary logic
  };
  return (
    <div className="border-b py-3 flex items-center justify-between">
      <div className="flex ml-0 items-center space-x-3">
        {icon}
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-gray-500">Expires in {expiration}</p>
        </div>
      </div>
      <div className=" mr-0 ">
        <PaymentMethodDropdown
          onEdit={handleEdit}
          onDelete={handleDelete}
          onMakePrimary={handleMakePrimary}
        />
      </div>
    </div>
  );
};

export default PaymentMethodItem;
