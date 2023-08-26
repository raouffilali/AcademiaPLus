import React from "react";

interface ProfileSectionProps {
  username: string;
  avatarUrl: string;
  coverImageUrl: string;
  onCreateCourse: () => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  username,
  avatarUrl,
  coverImageUrl,
  onCreateCourse,
}) => {
  return (
    <div className="bg-white rounded-lg">
      <div
        className=" relative bg-cover bg-center rounded-t-lg h-32"
        style={{ backgroundImage: `url(${coverImageUrl})` }}
      ></div>
      <div className="lg:flex justify-between items-center p-4">
        <div className="flex space-x-24 items-center">
          <img
            src={avatarUrl}
            alt={`${username}'s avatar`}
            className="absolute lg:top-52 top-40  h-20 w-20 rounded-full border-4 border-white"
          />
          <div>
            <h2 className="text-xl text-gray-900 font-semibold">{username}</h2>
            <p className="text-gray-500 text-sm">@Instructor</p>
          </div>
        </div>
        <div className="flex-grow"></div>
        <button
          onClick={onCreateCourse}
          className="bg-redPal text-white px-4 py-2 text-xs font-semibold  rounded-md hover:bg-red-500"
        >
          Create New Course
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
