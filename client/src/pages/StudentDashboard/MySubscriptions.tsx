import React from "react";
import SubscriptiondashCard from "../../components/SubscriptiondashCard/SubscriptiondashCard";
import { Subscription } from "../../constants/interfaces";


const MySubscriptions: React.FC = () => {
  const subscriptions: Subscription[] = [
    {
      id: "#100010002",
      type: "Monthly ",
      startedOn: "Oct 1, 2020",
      price: "Monthly",
      access: "Access All Courses",
      billingDate: "Next Billing on Nov 1, 2020",
      active:true
      
    }, {
      id: "#100010002",
      type: "Free",
      startedOn: "Oct 1, 2020",
      price: "Monthly",
      access: "Access All Courses",
      billingDate: "Next Billing on Nov 1, 2020",
      active:false
      
    },];
  // Create JSX content for MySubscriptions component
  return (
    <div className="bg-white rounded shadow p-4">
      {/* Your My Subscriptions content goes here */}
      <div className="flex">
        <div className="ml-0">
          <h2 className="font-medium text-gray-900 text-lg">
            My Subscriptions
          </h2>
          <p className="text-sm text-gray-500">
            Here is list of package/product that you have subscribed.
          </p>
        </div>
        <div className="mr-0">
        <button className="bg-emerald-500  hover:bg-emerald-600 rounded py-1  px-4 text-sm text-white font-medium">upgrade now -GO Pro</button>
        </div>
      </div>
      <hr className="my-2" />
      {/* Display the list of subscriptions */}

      {subscriptions.map((subscription) => (
        <SubscriptiondashCard key={subscription.id} subscription={subscription} />
      ))}
      
      {/* ... other subscriptions */}
    </div>
  );
};

export default MySubscriptions;
