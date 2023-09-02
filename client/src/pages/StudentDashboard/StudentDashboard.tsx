import React, { useState } from "react";
import Sidebar from "./Sidebar";

import { Footer, NavBar } from "../../constants";
import EditProfile from "./AccountSettings/EditProfile";
import Security from "./AccountSettings/Security";
import SocialProfiles from "./AccountSettings/SocialProfiles";

import ProfilePrivacy from "./AccountSettings/ProfilePrivacy";
import DeleteProfile from "./AccountSettings/DeleteProfile";

import LinkedAccounts from "./AccountSettings/LinkedAccounts";
import { useNavigate } from "react-router-dom";
import Notifications from "./AccountSettings/Notifications";
import ProfileSection from "./ProfileSection";
import MySubscriptions from "./MySubscriptions";
import BillingInfo from "./BillingInfo";
import Invoice from "./Invoice";
import MyQuizAttempt from "./MyQuizAttempt";
import Payment from "./Payment";
import Dashboard from "./Dashboard";

const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Perform signout logic here (if needed)
    // Navigate to the landing page
    navigate("/Landing"); // Replace "/landing" with your actual landing page route
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "mysubscriptions":
        return <MySubscriptions />;
      case "billinginfo":
        return <BillingInfo />;
      case "payment":
        return <Payment />;
      case "invoice":
        return <Invoice/>;
      case "myquizattempt":
        return <MyQuizAttempt/>;
      
      case "editprofile":
        return (
          <EditProfile
            user={{
              avatar: "assets/avatar/avatar-4.jpg",
              firstName: "",
              lastName: "",
              phone: "",
              birthday: "",
              addressLine1: "",
              addressLine2: "",
              state: "",
              country: "",
            }}
          />
        );
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
      case "linkedaccounts":
        return <LinkedAccounts />;
        case "signout":
          handleSignOut(); // Call the signout function when "Sign Out" tab is clicked
          return null;
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
          <div className="lg:flex lg:space-x-6">
            <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
            <div className="flex-grow mt-8">{renderContent()}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard;
