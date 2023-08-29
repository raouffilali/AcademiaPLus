import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";

const LinkedAccounts = () => {
  const [linkedAccounts, setLinkedAccounts] = useState<string[]>([]);
  const socialAccounts = [
    { name: "Facebook", icon: <FaFacebook color="blue" /> },
    { name: "Google", icon: <FaGoogle color="red" /> },
    { name: "Github", icon: <FaGithub /> },
    { name: "Twitter", icon: <FaTwitter color="blue" /> },
  ];

  const handleLinkAccount = (account: string) => {
    if (!linkedAccounts.includes(account)) {
      setLinkedAccounts([...linkedAccounts, account]);
    }
  };

  const handleRemoveAccount = (account: string) => {
    setLinkedAccounts(
      linkedAccounts.filter((linkedAccount) => linkedAccount !== account)
    );
  };

  return (
    <div className="bg-white rounded shadow mb-4">
      <div className="my-4 p-4 space-y-3">
        <p className="text-lg font-semibold text-gray-700">Linked Accounts</p>
        <p className="text-sm text-gray-500">
          You can link your social accounts to your Academia account and access
          your linked accounts' history.
        </p>
        <hr />

        {socialAccounts.map((account) => (
          <div key={account.name} className="border-b space-y-2 py-4">
            <div className="flex  ">
              <div className=" ml-0 mr-3 items-start mt-0 text-2xl">{account.icon}</div>
              <div className=" ml-0">
                <p className="text-md font-semibold text-gray-700">
                  {account.name}
                </p>
                <p className="text-sm text-gray-500">
                  Enable one-click login and receive more personalized course
                  recommendations.
                </p>
                {linkedAccounts.includes(account.name) ? (
                  <button
                    className="bg-gray-900 hover:bg-gray-800 text-white border text-xs py-1 border-gray-900 px-3 rounded"
                    onClick={() => handleRemoveAccount(account.name)}
                  >
                    Remove My {account.name} Account
                  </button>
                ) : (
                  <button
                    className="bg-white text-gray-500 border text-xs hover:text-white py-1 border-gray-600 px-3 rounded hover:bg-gray-600"
                    onClick={() => handleLinkAccount(account.name)}
                  >
                    Link My {account.name} Account
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedAccounts;
