import {
  KeyboardArrowRightOutlined,
 
} from "@mui/icons-material";
import { sizeHeight } from "@mui/system";
import React from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
function EditDetailLesson() {
  return (
    <div className="mx-96 mt-20  h-[480px] w-[380px]  shadow-md rounded-lg bg-gray-50 ">
      <div className="mt-5 ml-10 mr-10 flex flex-col justify-between space-y-2 ">
        <p className=" font-bold text-[20px] mt-5">Edit Lesson</p>
        <div className=" text-gray-400 flex space-x-4">
          <p className="text-[11px]  ">
            Step 1 <br />{" "}
            <span className="text-gray-500 font-semibold">Get started</span>
          </p>
          <KeyboardArrowRightOutlined />
          <p className="text-[11px] text-blue-400">
            Step 2 <br />{" "}
            <span className="font-semibold text-blueLink ">
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
        {/* <label className="ml-10 text-[13px] font-medium" htmlFor="category">Category</label> */}
        <input
          className=" text-[11px] border borde-gray-200 rounded-md p-1 w-[310px]"
          placeholder="http://"
          type="text"
          name=""
          id=""
        />

        <p className="text-[10px] font-medium">Description</p>
        <textarea
        className="border border-gray-300 bg-white rounded-md w-[308px] h-[125px]"
            id="Description"
            required
          />
        <p className=" text-[10px] font-medium">Thumbnail</p>
        <p className="text-[10px] text-gray-600">Upload a thumbnail for your course</p>
        <div className="flex " >
          <a href=""><img className="w-20 h-14 mr-2" src="./public/assets/course.jpg" alt="" /></a>
          <div className="flex flex-col mr-14">
          <p className="text-[11px] text-black     ">image name</p>
          <p className="text-[11px] text-gray-500 ">image size: MB</p>

          </div>
          <button className=" w-20 h-5 border border-yelloPal text-yelloPal rounded-lg text-[12px] mt-5 hover:bg-yelloPal hover:text-white">
            change
          </button>

        </div>
      </div>

      <div className="flex space-x-3 text-sm mt-5 ml-44">
        <button className=" px-2 rounded-lg border border-blueLink text-blueLink hover:bg-blueLink hover:text-white ">
          Cancel
        </button>
        <button className="px-8 rounded-lg bg-blueLink text-white hover:bg-DarkBluePal ">
          Save
        </button>
      </div>
    </div>
  );
}

export default EditDetailLesson;
