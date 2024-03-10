import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex px-6 sm:px-[60px] xl:px-[100px] w-full mt-4 overflow-hidden">
      <div className="bg-red-700 text-white flex px-6 sm:px-[40px] rounded-lg w-full gap-12">
        <div className="flex flex-col w-full md:w-1/2 gap-8 py-10 justify-center">
          <h2 className="font-bold text-[30px] sm:text-[48px] uppercase leading-[115%]">
            Get affordable, same-day coverage in no time.
          </h2>
          <p className="font-medium text-xs sm:text-base">
            With roots over a century deep in the birthplace of the automobile
            industry, USA Underwriters has the knowledge and expertise to help
            tailor a policy to suit your lifestyle, your budget, and your
            priorities.
          </p>
          <div className="flex flex-row gap-4 items-center w-full font-medium">
            <button className="w-[177px] h-[56px] flex items-center justify-center bg-white text-gray-800 rounded-full">
              Report a Claim
            </button>
            <div className="flex gap-3 items-center w-1/2">
              <span>Learn More</span>
              <Image
                src="/assets/tir.png"
                alt="tir"
                width={19}
                height={9}
                layout="responsive"
                className="max-w-[19px] max-h-[9px]"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center w-1/2 pt-4">
          <Image
            src="/assets/man.png"
            alt="toggle"
            width={100}
            height={100}
            layout="responsive"
            className="max-w-[329px] max-h-[505px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
