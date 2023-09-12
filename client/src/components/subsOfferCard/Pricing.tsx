import React from "react";
import {
  annualPricingData,
  monthlyPricingData,
  semesterlyPricingData,
} from "../../data/Pricing";

interface PricingProps {
  displayMonthly: boolean;
  selectedDuration: string;
}

export const Pricing: React.FC<PricingProps> = ({
  displayMonthly,
  selectedDuration,
}) => {
  const getPricingData = () => {
    if (selectedDuration === "Monthly") {
      return monthlyPricingData;
    } else if (selectedDuration === "Annual") {
      return annualPricingData;
    } else if (selectedDuration === "Semesterly") {
      return semesterlyPricingData;
    }
    // Default to monthly pricing if selectedDuration is not recognized
    return monthlyPricingData;
  };

  const pricingData = getPricingData();

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 scroll-smooth">
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {pricingData.options.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded-3xl shadow-lg sm:items-center ${
              selectedDuration ? "hover:shadow" : ""
            } ${
              option.type === "Gold" 
                ? "border-emerald-500"
                : ""
            }`}
          >
          
            <div className="text-center">
              <div className="text-lg font-semibold">{option.type}</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">{option.price}</div>
                {option.type === "Diamond" && (
                  <div className="text-gray-700"></div>
                )}
                {option.type === "Gold" && (
                  <div className="text-gray-700"></div>
                )}
              </div>
              <div className="mt-2 space-y-3">
                {option.description.map((item, index) => (
                  <div key={index} className="text-gray-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <a
                href="#checkout"
                className={`scroll-smooth inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md ${
                 !selectedDuration
                    ? "bg-emerald-500 hover:bg-emerald-600"
                    :option.type==="Free"?"bg-emerald-500 hover:bg-emerald-600"
                    : option.type === "Gold"
                    ? "bg-yellow-500 hover:bg-yellow-400 text-gray-700"
                    : option.type === "Diamond"
                    ? "bg-black hover:bg-gray-800 text-white"
                    : ""
                } focus:shadow-outline focus:outline-none`}
              >
                {option.buttonText}
              </a>

              <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                {!selectedDuration
                  ? "All you need to do to access our free content is sign up"
                  : `Unlock exclusive benefits with ${option.type} ${
                      option.type === "Gold" ? "membership (Annual Plan)." : ""
                    } ${
                      option.type === "Diamond"
                        ? "membership (Semesterly Plan)."
                        : ""
                    }`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
