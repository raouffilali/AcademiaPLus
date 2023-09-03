import React from "react";

const VideoPlayer: React.FC = () => {
  // Implement your video player here
  return (
    <div>
      {/* Add video player component */}

      {/* Example video player */}
      <video className="w-full lg:border-8 border-4 rounded border-emerald-500 " controls>
        <source src="example-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
