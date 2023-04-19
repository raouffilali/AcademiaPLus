function YouTubeFrame() {
  return (
    <>
      {/* yt video  */}
      <div className="mx-auto mt-8 xl:w-full md:w-full lg:w-full">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/NmVrnZAAklU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* yt video  */}

      {/* Flex div */}
      <div className="flex mt-8 mx-auto w-full md:w-full lg:w-full mb-10">
        {/* User information section */}
        <div className="w-2/3">
          <div className="flex items-start mb-2 sm:flex-col ">
            {/* <div className="text-gray-700 ml-auto font-semibold        ">
      abderaouffilali@yahoo.com
    </div> */}
            <div className="text-gray-700 font-bold text-2xl    ">
              Abderraouf FILALI
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
        <div className="w-1/3 p-10 ">
          <img
            className="rounded-full w-25 h-25 mx-auto mb-4"
            src="./assets/middle school.png"
            alt="Avatar"
          />
        </div>
      </div>
    </>
  );
}

export default YouTubeFrame;
