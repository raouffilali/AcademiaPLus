import { CloudUpload, KeyboardArrowRightOutlined, Upload,  } from "@mui/icons-material";
import { sizeHeight } from "@mui/system";
import React from "react";
function AddNewLesson() {
  return (
    <div className="mx-52 mt-20  h-[480px] w-[380px]  shadow-md rounded-lg bg-gray-50 ">
      <div className="mt-5 ml-10 mr-10 flex flex-col justify-between space-y-4 ">
        <p className=" font-bold text-[20px] mt-5">Add new lesson</p>
        <div className=" text-gray-400 flex space-x-4">
          <p className="text-[11px] text-blue-400  ">
            Step 1 <br />{" "}
            <span className="text-blueLink font-semibold">Get started</span>
          </p>
          <KeyboardArrowRightOutlined />
          <p className="text-[11px] ">
            Step 2 <br />{" "}
            <span className="font-semibold text-gray-500 ">
              Lessons details
            </span>
          </p>  
        </div>
        {/* <label className="ml-10 text-[13px] font-medium" htmlFor="name">Name</label> */}
        <input
          className=" text-[11px] text-black border borde-gray-200 rounded-md p-1 w-[310px]"
          placeholder="Lesson Name"
          type="text"
          name=""
          id=""
        />
        {/* <label className="ml-10 text-[13px] font-medium" htmlFor="video">Video Link</label> */}
        <input
          className=" text-[11px] border borde-gray-200 rounded-md p-1 w-[310px]"
          placeholder="http://"
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="inline-flex items-center relative justify-center w-full">
        <hr className="w-72 h-px my-10  border-0 bg-gray-300" />
        <span className="absolute px-3  text-gray-400 text-sm -translate-x-1/2 bg-gray-50 left-1/2 ">
          or
        </span>
      </div>
      <p className="ml-10 text-[13px] font-medium">
        Upload video from computer
      </p>
      <div className="border border-gray-300 bg-gray-100 rounded-md w-[308px] mt-1 ml-10 h-[125px]">
        <div className="flex flex-col justify-center items-center  mt-3">
          <CloudUpload color="disabled" />
          <p className="text-[12px] text-gray-500 ">Upload video</p>
          <p className="text-[8px] text-gray-500">max size: 30 Mb</p>
          <div className="flex justify-between space-x-2 mt-4 ">
            <p className="text-gray-500 text-[12px]">Drag and drop</p>
            <p className="text-gray-500 text-[12px]">or</p>
            <button className="border border-blueLink text-blueLink text-[10px] rounded-lg  px-6">
              <Upload />
              Select file
            </button>

          </div>
        </div>
      </div>
      <div className="flex space-x-3 text-sm mt-5 ml-44">
        <button className=" px-2 rounded-lg border border-blueLink text-blueLink hover:bg-blueLink hover:text-white ">
          Cancel
        </button>
        <button className="px-8 rounded-lg bg-blueLink text-white hover:bg-DarkBluePal ">
          Next
        </button>
      </div>
    </div>
  );
}

export default AddNewLesson;
