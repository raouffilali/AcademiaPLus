import React, { useState } from "react";

const SocialProfilesOption = () => {
  const [twitterProfile, setTwitterProfile] = useState("");
  const [facebookProfile, setFacebookProfile] = useState("");
  const [instagramProfile, setInstagramProfile] = useState("");
  const [linkedinProfile, setLinkedinProfile] = useState("");
  const [youtubeProfile, setYoutubeProfile] = useState("");

  const handleSaveProfiles = () => {
    // Logic to save social profiles
  };

  return (
    <div className=" space-y-4 bg-white p-4 text-sm  rounded shadow mb-4">
      <div>
        {" "}
        <p className="text-lg font-semibold text-gray-700">Social Profiles</p>
        <p className="text-sm text-gray-500">
          Add your social profile links for the below social accounts.
        </p>
      </div>
      <hr />

      <div >
        <label className="font-medium text-gray-800">
          Twitter
          <input
            type="text"
            value={twitterProfile}
            onChange={(e) => setTwitterProfile(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Twitter Profile Name"
          />
        </label>
        <p className="text-xs text-gray-400">
          Add your Twitter username (e.g. johnsmith).
        </p>
      </div>
      <div>
        <label className="font-medium text-gray-800">
          Facebook
          <input
            type="text"
            value={facebookProfile}
            onChange={(e) => setFacebookProfile(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Facebook Profile Name"
          />
        </label>
        <p className="text-xs text-gray-400">
          Add your Facebook username (e.g. johnsmith).
        </p>
      </div>
      <div>
        <label className="font-medium text-gray-800">
          Instagram
          <input
            type="text"
            value={instagramProfile}
            onChange={(e) => setInstagramProfile(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Instagram Profile Name"
          />
        </label>
        <p className="text-xs text-gray-400">
          Add your Instagram username (e.g. johnsmith).
        </p>
      </div>
      <div>
        {" "}
        <label className="font-medium text-gray-800">
          LinkedIn Profile URL
          <input
            type="text"
            value={linkedinProfile}
            onChange={(e) => setLinkedinProfile(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="LinkedIn Profile URL"
          />
        </label>
        <p className="text-xs text-gray-400">
          Add your linkedin profile URL. (
          https://www.linkedin.com/in/jitu-chauhan-ba004b78)
        </p>
      </div>
      <div>
        <label className="font-medium text-gray-800" >
          YouTube
          <input
            type="text"
            value={youtubeProfile}
            onChange={(e) => setYoutubeProfile(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="YouTube URL"
          />
        </label>
        <p className="text-xs text-gray-400">Add your Youtube profile URL.</p>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 font-medium  rounded hover:bg-blue-600"
        onClick={handleSaveProfiles}
      >
        Save Social Profiles
      </button>
    </div>
  );
};

export default SocialProfilesOption;
