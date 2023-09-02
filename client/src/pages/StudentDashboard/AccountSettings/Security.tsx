import React, { useState } from "react";

const Security = () => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handleEmailUpdate = () => {
    // Logic to update email address
  };

  const handleChangePassword = () => {
    // Logic to change password
  };

  const checkPasswordStrength = (password: string) => {
    // Add your password strength verification logic here
    // Example: Determine if the password is very weak, weak, strong, etc.
    // Set the password strength message accordingly
    if (password.length < 6) {
      setPasswordStrength("Very weak");
    } else if (password.length < 10) {
      setPasswordStrength("Weak");
    } else if (password.length < 12) {
      setPasswordStrength("Moderate");
    } else {
      setPasswordStrength("Strong");
    }
  };

  const handleConfirmPasswordChange = (value: string) => {
    setIsPasswordMatch(newPassword === value);
  };

  return (
    <div className="p-4 space-y-4 bg-white  rounded shadow mb-4">
      <div>
        <p className="text-lg font-semibold text-gray-700">Security</p>
        <p className="text-sm text-gray-500">
          Edit your account settings and change your password here.
        </p>
      </div>
      <hr />

      {/* ... Email Address section ... */}

      <div>
        {" "}
        <p className="font-semibold">Email Address</p>
        <p>
          Your current email address is{" "}
          <span className="text-green-500"> {currentEmail}</span>
        </p>
      </div>
      <div>
        <label className=" font-semibold text-gray-700 text-sm block mb-2">New email address</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className="border p-2 rounded text-sm lg:w-1/2 w-full"
          placeholder="New Email Address"
        />
      </div>

      <button
        className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700"
        onClick={handleEmailUpdate}
      >
        Update Details
      </button>

      <div>
        {" "}
        <p className="text-md font-semibold text-gray-700">Change Password</p>
        <p className="text-sm text-gray-500">
          We will email you a confirmation when changing your password, so
          please expect that email after submitting.
        </p>
      </div>
      <hr />
      <div>
        {" "}
        <label className="  font-semibold text-gray-700 text-sm block mb-2"> Current Password </label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="border p-2 text-sm rounded lg:w-1/2 w-full"
          placeholder="Current Password"
        />
      </div>
      <div>
        <label className="  font-semibold text-gray-700 text-sm block mb-2">New Password</label>

        <input
          type="password"
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
            checkPasswordStrength(e.target.value);
            handleConfirmPasswordChange(confirmNewPassword);
          }}
          className="border text-sm p-2 rounded lg:w-1/2 w-full"
          placeholder="New Password"
        />
        <p
          className={`text-sm mt-1 ${
            passwordStrength === "Strong" ? "text-green-500" : "text-red-500"
          }`}
        >
          Password Strength:{" "}
          <span className="font-semibold">{passwordStrength}</span>
        </p>
      </div>

      <div>
        <label className=" font-semibold text-gray-700 text-sm block mb-2">Confirm New Password</label>
        <input
          type="password"
          value={confirmNewPassword}
          onChange={(e) => {
            setConfirmNewPassword(e.target.value);
            handleConfirmPasswordChange(e.target.value);
          }}
          className={`border p-2 text-sm rounded lg:w-1/2 w-full ${
            isPasswordMatch ? "" : "border-red-500"
          }`}
          placeholder="Confirm New Password"
        />

        {!isPasswordMatch && (
          <p className="text-sm text-red-500">Passwords do not match</p>
        )}
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleChangePassword}
      >
        Save Password
      </button>
      <p className="text-sm text-gray-500 mt-2">
        Can't remember your current password?
        <span className="text-blueLink ml-2">
          Reset your password via email.
        </span>
      </p>
    </div>
  );
};

export default Security;
