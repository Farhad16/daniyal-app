import React from "react";
import FeatureCards from "./shared/FeatureCards";

const Feature = () => {
  return (
    <div className="flex flex-col px-6 sm:px-[60px] xl:px-[100px] w-full mt-10 sm:mt-16 gap-6 sm:gap-10">
      <div className="flex flex-col sm:flex-row w-full gap-6 sm:gap-10">
        <div className="flex flex-col w-full sm:w-1/2 items-center sm:items-start">
          <span className="text-gray-700 font-medium">Our Features</span>
          <p className="uppercase text-gray-900 font-semibold text-[20px] sm:text-[30px] text-center sm:text-left">
            MCCA REFUND INFORMATION
          </p>
          <button className="w-full sm:w-[207px] h-[56px] flex items-center justify-center bg-red-700 text-white rounded-full mt-4">
            Report a Claim
          </button>
        </div>
        <p className="w-full sm:w-1/2 text-gray-500 text-xs sm:text-base">
          The Michigan Catastrophic Claims Association approved refunds for
          certain Michigan Policyholders due a surplus of funds being held by
          the MCCA. The approved refund will be $400 per eligible vehicle
          insured with USA Underwriters on October 31st, 2021 at 11:59 PM, or
          $80 if the vehicle is an insured historical vehicle.
        </p>
      </div>

      <FeatureCards />
    </div>
  );
};

export default Feature;
