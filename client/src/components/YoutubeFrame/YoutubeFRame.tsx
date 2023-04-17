function YouTubeFrame() {
  return (
    <div className=" min-h-screen">
      {/* YouTube video */}
      <div className="mx-auto mt-8 w-full md:w-3/4 lg:w-1/2">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Flex div */}
      <div className="flex mt-8 mx-auto w-full md:w-3/4 lg:w-1/2">
        {/* User information section */}
        <div className="w-2/3">
          <div className="flex items-start mb-2">
            <div className="text-gray-700 font-bold mr-2 ">
              Abderraouf FILALI
            </div>
            <div className="text-gray-700 ml-auto font-semibold         ">
              abderaouffilali@yahoo.com
            </div>
          </div>
          <div className="text-gray-700 mb-4">
            Take the next step on your graphic design journey. With these
            Skillshare classes, you can explore a wide range of topics, tools,
            techniques and principles to become a stronger designer and improve
            your graphic design portfolio.
          </div>
        </div>
        {/* Avatar section */}
        <div className="w-1/3 pl-16 ">
          <img
            className="rounded-full w-25 h-25 mx-auto mb-4"
            src="./assets/logo.png"
            alt="Avatar"
          />
        </div>
      </div>
      <div className="mx-auto w-full md:w-3/4 lg:w-1/2">
        {" "}
        <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border w-full border-blue-700 rounded">
        + Add new Lesson
        </button>
      </div>
    </div>
  );
}

export default YouTubeFrame;
