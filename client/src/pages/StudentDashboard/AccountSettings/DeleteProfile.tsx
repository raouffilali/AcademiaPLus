import React from "react";

function DeleteProfile() {
  return (
    <div className="bg-white  rounded shadow mb-4">
      <div className="p-4">
      <p className="text-lg font-semibold text-gray-700">DeleteProfile</p>
      <p className="text-gray-500 text-sm">Delete or Close your account permanently.</p>
      </div>
      <hr />
      <div className="p-4 space-y-3 ">
      <div>
      <h2 className="text-red-600 font-medium">Warning</h2>
      <p  className="text-gray-500 text-sm">If you close your account, you will be unsubscribed from all your 0 courses, and will lose access forever.</p>
      </div>
      <button className="text-white bg-red-600 rounded px-4 py-2 text-sm font-medium ">Close My Account</button>
      </div>
     
    </div>
  );
}

export default DeleteProfile;
