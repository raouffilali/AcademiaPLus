import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Reviews from "./Reviews";
import Earnings from "./Earnings";
import Orders from "./Orders";
import Students from "./Students";
import Payouts from "./Payouts";
import Quiz from "./Quiz";
import QuizResults from "./QuizResults";
import EditProfile from "./EditProfile";
import Security from "./Security";
import SocialProfiles from "./SocialProfiles";
import Notifications from "./Notifications";
import ProfilePrivacy from "./ProfilePrivacy";
import DeleteProfile from "./DeleteProfile";
import { Footer, NavBar } from "../../constants";
import ProfileSection from "./ProfileSection";

const InstructorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "courses":
        return <Courses  />;
      case "reviews":
        return <Reviews />;
      case "earnings":
        return <Earnings />;
      case "orders":
        return <Orders />;
      case "students":
        return <Students />;
      case "payouts":
        return <Payouts />;
      case "quiz":
        return <Quiz />;
      case "quizresults":
        return <QuizResults />;
      case "editprofile":
        return <EditProfile />;
      case "security":
        return <Security />;
      case "socialprofiles":
        return <SocialProfiles />;
      case "notifications":
        return <Notifications />;
      case "profileprivacy":
        return <ProfilePrivacy />;
      case "deleteprofile":
        return <DeleteProfile />;
      case "signout":
        return <Reviews />;
      default:
        return null;
    }
  };

  return (
    <>
  <NavBar />
  <div className="bg-gray-50 mt-6">
    <div className="lg:mx-[80px] md:mx-[40px] mx-[12px] pt-8">
      <ProfileSection
        username="John Doe"
        avatarUrl="assets/avatar/avatar-1.jpg"
        coverImageUrl="assets/profile-bg.jpg"
        onCreateCourse={() => console.log("Create New Course clicked")}
      />
      <div className="lg:flex space-x-6">
        <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="flex-grow mt-8">{renderContent()}</div>
      </div>
    </div>
  </div>
  <Footer />
</>

  );
};

export default InstructorDashboard;
