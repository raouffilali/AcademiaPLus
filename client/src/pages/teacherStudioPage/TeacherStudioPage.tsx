import React from "react";
import NavBar from "../../components/navBar/NavBar";
import SideBar from "../../components/sideBar/SideBar";

function TeacherStudioPage() {
  return (
    <>
      {/* //replace it with the navbar after loggin */}
      <div className="flex space-between ">
      <SideBar/>
        <p className="font-bold mt-12 text-gray-800 text-[25px] ml-12 mb-10 ">My Studio</p>
        <div className="flex flex-col justify-center items-center ml-56 mt-24 space-y-5 mb-20">
          <img className="w-[250px] h-[250px]" src="./public/assets/welcome.png" alt="lesson" />
          <p className="text-gray-500 font-medium">
            Mmmm...seems that you have no lessons yet <br />
            Share your knowledge-publish your first lesson.
          </p>
          <button className=" text-white rounded-full bg-lightBluePal hover:bg-DarkBluePal px-6 py-1 ">
                + Add new lesson
            </button>
           
        </div>
     


      </div>
      
    </>
    
  );
}

export default TeacherStudioPage;
