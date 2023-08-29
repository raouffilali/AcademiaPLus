import React from "react";
import {
  HiOutlineChartPie,
  HiOutlineChat,
  HiOutlineCurrencyDollar,
  HiOutlineDeviceMobile,
  HiOutlineHome,
  HiOutlineLockClosed,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingBag,
  HiOutlineStar,
  HiOutlineUser,
  HiOutlineUserRemove,
  HiOutlineUsers,
} from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbSocial } from "react-icons/tb";
import { RiShutDownLine } from "react-icons/ri";
import { AiOutlineDelete, AiOutlineUser } from "react-icons/ai";
interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface SidebarOption {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const sidebarOptions: SidebarOption[] = [
  {
    label: "My Dashboard",
    value: "dashboard",
    icon: <HiOutlineHome size={16} />,
  },
  { label: "My Courses", value: "courses", icon: <HiOutlineDeviceMobile /> },
  { label: "Reviews", value: "reviews", icon: <HiOutlineStar /> },
  { label: "Earnings", value: "earnings", icon: <HiOutlineChartPie /> },
  { label: "Orders", value: "orders", icon: <HiOutlineShoppingBag /> },
  { label: "Students", value: "students", icon: <HiOutlineUsers /> },
  { label: "Payouts", value: "payouts", icon: <HiOutlineCurrencyDollar /> },
  { label: "Quiz", value: "quiz", icon: <HiOutlineQuestionMarkCircle /> },
  {
    label: "Quiz Results",
    value: "quizresults",
    icon: <HiOutlineQuestionMarkCircle />,
  },
  { label: "Edit Profile", value: "editprofile", icon: <CiSettings /> },
  { label: "Security", value: "security", icon: <HiOutlineUser /> },
  { label: "Social Profiles", value: "socialprofiles", icon: <TbSocial /> },
  {
    label: "Notifications",
    value: "notifications",
    icon: <IoIosNotificationsOutline />,
  },
  {
    label: "Profile Privacy",
    value: "profileprivacy",
    icon: <HiOutlineLockClosed />,
  },
  {
    label: "Delete Profile",
    value: "deleteprofile",
    icon: <AiOutlineDelete />,
  },
  {
    label: "Linked Accounts",
    value: "linkedaccounts",
    icon: <AiOutlineUser />,
  },
  { label: "Sign out", value: "signout", icon: <RiShutDownLine /> },
  // Add other options
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white text-gray-600 shadow my-8 rounded-md text-sm h-full p-4">
      <ul className="space-y-1 cursor-pointer ">
        <p className="text-gray-400 font-mono text-xs ">DASHBOARD</p>
        {sidebarOptions.map((option) => {
          if (option.value === "editprofile") {
            return (
              <React.Fragment key={option.value}>
                <p className="text-gray-400 font-mono text-xs ">
                  ACCOUNT SETTINGS
                </p>
                <li
                  onClick={() => setActiveTab(option.value)}
                  className={`pl-2 py-1 pr-20 rounded-md transition duration-300 ${
                    activeTab === option.value
                      ? "bg-slate-200"
                      : "hover:bg-slate-200"
                  }`}
                >
                  <div className="float-left mr-2 text-gray-400">
                    {React.cloneElement(option.icon as React.ReactElement, {
                      size: 16,
                    })}
                  </div>
                  <span>{option.label}</span>
                </li>
              </React.Fragment>
            );
          }
          return (
            <li
              key={option.value}
              onClick={() => setActiveTab(option.value)}
              className={`pl-2 py-1 pr-20 rounded-md transition duration-300 ${
                activeTab === option.value
                  ? "bg-slate-200"
                  : "hover:bg-slate-200"
              }`}
            >
              <div className="float-left mr-2 text-gray-400">
                {React.cloneElement(option.icon as React.ReactElement, {
                  size: 16,
                })}
              </div>
              <span>{option.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
