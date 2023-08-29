import React, { useState } from "react";

const Notifications = () => {
  const [notificationSettings, setNotificationSettings] = useState([
    {
      section: "Security Alerts",
      notifications: [
        { label: "Email me whenever encounter unusual activity", state: false },
        { label: "Email me if new browser is used to sign in", state: false },
      ],
    },
    {
      section: "News",
      notifications: [
        { label: "Notify me by email about sales and latest news", state: false },
        { label: "Email me about new features and updates", state: false },
        { label: "Email me about tips on using account", state: false },
      ],
    },
    {
      section: "Courses",
      notifications: [
        {
          label: "Updates from Classes You're Taking",
          state: false,
        },
        {
          label: "Updates from Teacher Discussions",
          state: false,
        },
        {
          label: "Personalized Class Recommendations",
          state: false,
        },
      ],
    },
    {
      section: "Featured content",
      notifications: [
        {
          label: "Tips on Courses and dashboard usage, workshop, books, tutorials and many insightful articles.",
          state: false,
        },
      ],
    },
    {
      section: "Product updates",
      notifications: [
        {
          label: "We'll send you a newsletter announcing essential product updates in CoursesUI.",
          state: false,
        },
      ],
    },
    {
      section: "Events and offers",
      notifications: [
        {
          label: "Announcing promos and upcoming events, such as Ask Me Anything sessions and webinars.",
          state: false,
        },
      ],
    },
  ]);

  const handleToggleNotification = (sectionIndex: number, notificationIndex: number) => {
    const updatedSettings = [...notificationSettings];
    updatedSettings[sectionIndex].notifications[notificationIndex].state = !updatedSettings[sectionIndex].notifications[notificationIndex].state;
    setNotificationSettings(updatedSettings);
  };

  return (
    <div className="bg-white rounded shadow mb-4">
      <div className=" p-4 space-y-3">
        <p className="text-lg font-semibold text-gray-700">Notifications</p>
        <p className="text-sm text-gray-500">
          You will get only notifications that you have enabled.
        </p>
        <hr />

        {notificationSettings.map((section, sectionIndex) => (
          <div key={section.section} className="space-y-4 text-sm text-gray-500">
            <p className="text-md font-semibold text-gray-700">{section.section}</p>
            {section.notifications.map((notification, notificationIndex) => (
              <div key={notification.label} className="flex items-center border-b py-2">
                <p>{notification.label}</p>
                <label className="relative inline-flex items-center cursor-pointer switch mr-0">
                  <input
                    className="sr-only peer"
                    type="checkbox"
                    checked={notification.state}
                    onChange={() => handleToggleNotification(sectionIndex, notificationIndex)}
                  />
                  <span className="slider round"></span>
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        ))}
        <div className="flex items-center">
          <p className="text-red-600 text-sm underline">Unsubscribe from all of the above</p>
          <label className="relative inline-flex items-center cursor-pointer switch ml-2">
            <input
              className="sr-only peer"
              type="checkbox"
              // Handle unsubscribe logic
            />
            <span className="slider round"></span>
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <p className="text-sm text-gray-500">Please note: you'll still receive important administrative emails,such as password resets.</p>
      </div>
    </div>
  );
};

export default Notifications;
