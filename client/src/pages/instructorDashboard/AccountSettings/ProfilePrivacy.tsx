import React, { useState } from "react";

const ProfilePrivacy = () => {
  const [privacySettings, setPrivacySettings] = useState([
    { label: "Show your profile on search engines", state: false },
    { label: "Show courses you're taking on your profile page", state: false },
    { label: "Show your profile on public", state: false },
    { label: "Currently learning", state: true },
    { label: "Completed courses", state: true },
    { label: "Your Interests", state: false },
  ]);

  const handleToggleSetting = (index: number) => {
    const updatedSettings = [...privacySettings];
    updatedSettings[index].state = !updatedSettings[index].state;
    setPrivacySettings(updatedSettings);
  };
  return (
    <div className="bg-white rounded shadow mb-4">
      <div className=" p-4 space-y-3">
        <p className="text-lg font-semibold text-gray-700">
          Profile Privacy Settings
        </p>
        <p className="text-sm text-gray-500">
          Making your profile public allows other users to see what you have
          been learning on Geeks.
        </p>
        <hr />

        <div className="space-y-5">
          <div className="flex items-center justify-between text-sm text-gray-500 ">
            <div className="ml-0">
              {" "}
              <p className="text-lg font-semibold text-gray-700">
                Privacy levels
              </p>
              <p>Show your profile public and private.</p>
            </div>
            <div className="flex space-x-2">
              <button className="border p-1 rounded hover:bg-gray-200">
                Public
              </button>
              <button className="border p-1 rounded hover:bg-gray-200">
                Private
              </button>
            </div>
          </div>
          <hr />
          <div className=" items-center justify-between">
            <p className="text-md font-semibold text-gray-700">
              Profile settings
            </p>
            <p className="text-sm text-gray-500 mb-12">
              These controls give you the ability to customize what areas of
              your profile others are able to see.
            </p>
            <div className="space-y-4 text-sm text-gray-500">
              {privacySettings.map((setting, index) => (
                <div key={index} className="flex items-center border-b py-2 ">
                  <p >{setting.label}</p>
                  <label className=" relative inline-flex items-center cursor-pointer switch mr-0 ">
                    <input
                      className="sr-only peer"
                      type="checkbox"
                      checked={setting.state}
                      onChange={() => handleToggleSetting(index)}
                    />
                    <span className="slider round"></span>
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePrivacy;
