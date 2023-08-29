import { useState } from "react";
import { BsDownload, BsTrash } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import WithdrawHistoryTable from "../../components/WithdrawHistoryTable/WithdrawHistoryTable ";
import { withdrawHistoryData } from "../../data/withdrawHistoryData";

const Payouts = () => {
  // State for selected filter and withdrawal history
  const [selectedFilter, setSelectedFilter] = useState("select option");
  const [selectedFilterB, setSelectedFilterB] = useState("months");
  const [selectedFilterC, setSelectedFilterC] = useState("transaction type");
  

  // State for selected payment method and account
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]); // Placeholder for payment methods
  const [accounts, setAccounts] = useState([]); // Placeholder for accounts

  // Functions for handling actions
  const downloadHistory = () => {
    // Implement download history logic
  };

  const addPaymentMethod = () => {
    // Implement add payment method logic
  };

  const removePaymentMethod = (method: any) => {
    // Implement remove payment method logic
  };

  const addAccount = () => {
    // Implement add account logic
  };

  const removeAccount = (account: any) => {
    // Implement remove account logic
  };
// Event handler for removing a course
const handleRemoveWithdraw= (id: string) => {
  // Implement the logic to remove the course with the given id
  // Update the bestSellingCourses array accordingly
};

// Event handler for editing a course
const handleEditWithdraw = (id: string) => {
  // Implement the logic to edit the course with the given id
  // You might navigate to an edit page or open a modal
};
  return (
    <div>
      {/* Payment Methods */}
      <div className="bg-white shadow rounded-md mb-6 p-4">
        <h2 className="text-lg font-medium mb-2">Payment Methods</h2>
        <p className="text-gray-500 text-sm mb-2">Order Dashboard is a quick overview of all current orders.</p>
        {/* Dropdown and add button */}
        <div className="flex items-center mb-4">
          {/* Dropdown */}
          <select
            value={selectedMethod}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="border rounded border-gray-300 p-2 w-1/4"
          >
            {/* Render payment method options */}
            <option value="baridi mob">Baridi Mob</option>
            <option value="paypal">Paypal</option>
            <option value="payoneer">Payoneer</option>
            <option value="bank transfer">Bank Transfer</option>
          </select>

          {/* Add button */}
          <button
            className="ml-auto text-sm font-medium px-4 border-2 text-bluePal hover:text-white hover:bg-bluePal border-bluePal rounded-lg"
            onClick={addPaymentMethod}
          >
            Add Method
          </button>
        </div>

        {/* Payment methods */}
        <div className="flex items-center">
          {paymentMethods.map((method) => (
            <div key={method} className="border rounded-lg p-2 mr-2">
              {method}
              <button
                className="ml-2 text-sm text-red-500"
                onClick={() => removePaymentMethod(method)}
              >
                <BsTrash />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Accounts */}
      <div className="bg-white shadow rounded-md mb-6 p-4">
        <h2 className="text-lg font-medium mb-4">Accounts</h2>
        {/* Add button */}
        <div className="flex items-center mb-4">
          <button
            className="text-sm font-medium px-4 border-2 text-bluePal hover:text-white hover:bg-bluePal border-bluePal rounded-lg"
            onClick={addAccount}
          >
            Add Account
          </button>
        </div>

        {/* Accounts */}
        <div className="flex items-center flex-wrap">
          {accounts.map((account) => (
            <div key={account} className="border rounded-lg p-2 mr-2 mb-2">
              {account}
              <button
                className="ml-2 text-sm text-red-500"
                onClick={() => removeAccount(account)}
              >
                <BsTrash />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Withdraw History */}
      <div className="bg-white shadow rounded-md mb-6 ">
       <div className="p-4"> <h2 className="text-lg font-medium mb-4">Withdraw History</h2>
        {/* Dropdown and download button */}
        <div className="flex space-x-3 items-center mb-4">
          {/* Dropdown */}
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="border bg-white text-gray-400 font-light rounded border-gray-300 p-2 w-1/4"
          >
            {/* Render filter options */}
            <option value="select option">Select Option</option>
            <option value="30 days">30 Days</option>
            <option value="2 months">2 Months</option>
            <option value="6 months">6 Months</option>
          </select>
          {/* Dropdown */}
          <select
            value={selectedFilterB}
            onChange={(e) => setSelectedFilterB(e.target.value)}
            className="border rounded bg-white text-gray-400 font-light border-gray-300 p-2 w-1/4"
          >
            {/* Render filter options */}
            <option value="months">Months</option>
            <option value="oct">Oct</option>
            <option value="jan">Jan</option>
            <option value="may">May</option>
          </select>
          {/* Dropdown */}
          <select
            value={selectedFilterC}
            onChange={(e) => setSelectedFilterC(e.target.value)}
            className="border rounded bg-white text-gray-400 font-light border-gray-300 p-2 w-1/4"
          >
            {/* Render filter options */}
            <option className="" value="transaction type">Transaction Type</option>
            <option value="cash transaction">Cash Transaction</option>
            <option value="non cash transaction">Non Cash Transaction</option>
            <option value="credit transaction">Credit Transaction </option>
          </select>

          {/* Download button */}
          <button
            className="mr-0 flex-1 text-sm font-medium p-2 border-2 text-bluePal hover:text-white hover:bg-bluePal border-bluePal rounded"
            onClick={downloadHistory}
          >
            <FiDownload size={18}/>
          </button>
        </div></div>

        {/* Withdraw history table */}
        <WithdrawHistoryTable withdrawHistory={withdrawHistoryData}   onRemoveWithdraw={handleRemoveWithdraw}
          onEditWithdraw={handleEditWithdraw} /> 
      </div>
    </div>
  );
};

export default Payouts;
