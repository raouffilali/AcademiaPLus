import React, { useState } from "react";

interface EditProfileProps {
  user: {
    avatar: string;
    firstName: string;
    lastName: string;
    phone: string;
    birthday: string;
    addressLine1: string;
    addressLine2: string;
    state: string;
    country: string;
  };
}

const EditProfile: React.FC<EditProfileProps> = ({ user }) => {
  const [avatar, setAvatar] = useState(user.avatar);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phone, setPhone] = useState(user.phone);
  const [birthday, setBirthday] = useState(user.birthday);
  const [addressLine1, setAddressLine1] = useState(user.addressLine1);
  const [addressLine2, setAddressLine2] = useState(user.addressLine2);
  const [state, setState] = useState(user.state);
  const [country, setCountry] = useState(user.country);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle avatar change logic
    setAvatar(e.target.value);
  };

  const handleUpdateProfile = () => {
    // Handle update profile logic
  };

  return (
    <div>
      <div className="bg-white  rounded shadow mb-4">
        <div className="p-4">
          {" "}
          <p className="text-xl font-medium text-gray-800">Profile Details</p>
          <p className="text-sm text-gray-500">You have full control to manage your own account setting.</p>
        </div>
        <hr />
        <div className=" items-center p-4 mb-4">
          <div className="ml-4  lg:flex lg:space-x-2  items-center ">
            <img src={avatar} alt="Avatar" className="w-16 h-16 rounded-full" />
            <div className="lg:flex-1">
              <p className="text-md font-semibold text-gray-700">Your avatar</p>
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="mt-2 text-sm"
                onChange={handleAvatarChange}
              />
              <p className="text-gray-500 text-sm">
                PNG or JPG no bigger than 800px wide and tall.
              </p>
            </div>
            <button className="text-gray-500  mt-2 text-xs font-medium border py-1.5 px-3 border-gray-500 rounded hover:bg-gray-500 hover:text-white">Update</button>
            <button className="text-red-500 mt-2 text-xs font-medium border py-1.5 px-3 border-red-500 rounded hover:bg-red-500 hover:text-white ">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white text-sm p-4 rounded shadow mb-4">
        <p className="text-xl font-medium text-gray-800">Personal Details</p>
        <p className="text-gray-500">Edit your personal information and address.</p>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  my-4  gap-6 ">
            <label>
              First Name
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="First Name"
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Last Name"
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Phone"
              />
            </label>
            <label>
              Birthday
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </label>
            <label>
              Address Line 1
              <input
                type="text"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Address Line 1"
              />
            </label>
            <label>
              Address Line 2
              <input
                type="text"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Address Line 2"
              />
            </label>
            <label>
              State
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="State"
              />
            </label>
            <label>
              Country
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Country"
              />
            </label>
          </div>
        <button
          className="bg-bluePal hover:bg-blue-500 text-white text-sm font-medium px-3 py-2 mt-4 rounded"
          onClick={handleUpdateProfile}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
