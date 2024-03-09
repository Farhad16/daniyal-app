import Image from "next/image";
import React from "react";

const Report = () => {
  return (
    <div className="relative w-full min-h-[241px] sm:min-h-[514px] px-6 sm:px-[60px] md:px-[100px] my-8 sm:my-20">
      <Image
        src="/assets/woman.png"
        alt="woman"
        height={100}
        width={100}
        layout="responsive"
        className="w-full h-full rounded-xl object-cover hidden sm:block sm:min-h-[514px]"
      />
      <div className="flex flex-col w-full sm:max-w-[460px] gap-5 justify-center text-white sm:absolute bottom-[10%] left-[15%] rounded-xl bg-red-700 p-6 sm:p-[30px]">
        <p className="font-bold text-[20px] sm:text-[18px] leading-normal">
          Obtain cost-effective same-day insurance coverage quickly.
        </p>
        <p className="font-medium text-xs">
          Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna leo.
          Etiam enim varius dictum amet hac imperdiet facilisis malesuada.
        </p>
        <button className="w-full sm:w-[177px] h-[54px] flex items-center justify-center text-white bg-gray-800 rounded-full text-base">
          Report a Claim
        </button>
      </div>
    </div>
  );
};

export default Report;
