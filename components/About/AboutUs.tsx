import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-16 items-center justify-center w-full px-6 sm:px-[60px] xl:px-[100px] mt-6 sm:mt-10">
      <div className="flex flex-col sm:flex-row w-full sm:gap-20 items-start sm:items-center">
        <div className="flex flex-col">
          <p className="hidden sm:block text-gray-700">About us</p>
          <h2 className="text-gray-900 text-[20px] sm:text-[30px] font-semibold">
            History
          </h2>
        </div>
        <p className="text-gray-500 font-medium text-xs sm:text-base">
          In 1962, the Southern Michigan Mutual Insurance Company celebrated
          it’s 100th year in continuous operation
          <span className="hidden sm:block">
            {" "}
            and was presented with a plaque by the State of Michigan as a
            Centenary Business.
          </span>
        </p>
      </div>
      <Image
        src="/assets/people.png"
        alt="woman"
        height={496}
        width={100}
        layout="responsive"
        className="w-full min-h-[151px] rounded-lg sm:rounded-xl"
      />
      <div className="text-gray-500 text-xs sm:text-base">
        <p>
          In 2013, Southern Michigan Mutual Insurance Company became USA
          Underwriters. The name may have changed, but the dedication to our
          customers, our drive to serve them and their communities hasn’t.{" "}
          <span className="hidden sm:inline">
            USA Underwriters’ mission as a leading Property and Casualty
            Insurance company in Michigan, remains largely unchanged from the
            mission of it’s progenitor: to provide affordable, quality insurance
            solutions to families and individuals.
          </span>
        </p>
        <p className="hidden sm:block">
          <br />
          Insurance has changed a lot in the last century and a half. When
          Southern Michigan Mutual Insurance Company was founded, automobiles
          simply didn’t exist. That all changed — right in the company’s back
          yard — at the turn of the 20th century when Henry Ford’s Model T began
          rolling off the assembly line.
        </p>
        <p className="hidden sm:block">
          <br />
          In an instant of history, the car supplanted the horse and buggy as
          American’s primary mode of transportation. The era of the Automobile
          had begun, and the Southern Michigan Mutual Insurance Company was
          front and center for one of the most dramatic shifts in American
          history. The car accelerated economic growth, and offered a freedom of
          travel that had been nigh-unimaginable for the vast majority of people
          through the whole of human history.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 flex flex-col">
          <p className="text-sm sm:text-base text-gray-700">Believe</p>
          <h2 className="text-[20px] sm:text-[30px] text-red-700 uppercase font-semibold">
            OUR MISSION
          </h2>
        </div>
        <p className="text-gray-500 text-xs sm:text-base w-full sm:w-1/2 ">
          Our mission has remained largely unchanged over the century and a half
          the company has operated: to quickly provide affordable insurance
          solutions{" "}
          <span className="hidden sm:inline">
            for our customers that support the communities and families they
            represent.
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
