import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface PaymentMethodDropdownProps {
  onEdit: () => void;
  onDelete: () => void;
  onMakePrimary: () => void;
}

const PaymentMethodDropdown: React.FC<PaymentMethodDropdownProps> = ({
  onEdit,
  onDelete,
  onMakePrimary,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      <button
        className="text-gray-500  hover:text-blueLink"
        onClick={handleToggleDropdown}
      >
        <BsThreeDotsVertical />
      </button>
      {isOpen && (
        <div className="absolute top-0 right-0 bg-white border rounded shadow  mt-2">
          <ul className="py-2 text-xs">
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={onEdit}>
              Edit
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={onDelete}>
              Delete
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={onMakePrimary}>
              Make Primary
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PaymentMethodDropdown;
