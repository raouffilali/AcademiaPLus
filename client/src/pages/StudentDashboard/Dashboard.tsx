import React, { useState } from "react";
import LearningCourses from "../../components/LearningCourses/LearningCourses";

import { learningCourses } from "../../data/learningCourses";
import WishListCoursesDash from "../../components/WishlistCoursesDash/WishListCoursesDash";
import { WishListCourses } from "../../data/wishList";


const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"wishlist" | "learning">("wishlist");

  

  return (
    <div>
      <div className="tab-bar space-x-4 font-medium ">
        <button
          className={activeTab === "wishlist" ? "active text-bluePal underline" : "text-gray-400"}
          onClick={() => setActiveTab("wishlist")}
        >
          Wishlist Courses
        </button>
        <button
          className={activeTab === "learning" ? "active text-bluePal underline" : " text-gray-400"}
          onClick={() => setActiveTab("learning")}
        >
          Learning Courses
        </button>
      </div>
      <div className="tab-content ">
        {activeTab === "wishlist" && <WishListCoursesDash wishlistCourses={WishListCourses}  />}
        {activeTab === "learning" && <LearningCourses learningCourses={learningCourses}  />}
      </div>
    </div>
  );
};

export default Dashboard;
