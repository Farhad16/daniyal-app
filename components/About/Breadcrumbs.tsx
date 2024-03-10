import Image from "next/image";
import Link from "next/link";

const Breadcrumbs = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-[20px] sm:text-[30px] text-gray-900 font-medium mb-2">
        About us
      </h2>
      <div className="flex items-center justify-center text-xs sm:text-sm gap-3">
        <Image
          src="/assets/home.png"
          width={20}
          height={20}
          className="w-[20px] h-[20px]"
          alt="home"
        />
        <Link
          href="/"
          className="!no-underline hover:no-underline focus:outline-none outline-none"
        >
          <span className="text-gray-700">Home</span>
        </Link>
        <Image
          src="/assets/right-arrow.png"
          width={20}
          height={20}
          className="w-[20px] h-[20px] mx-1"
          alt="home"
        />
        <span className="text-gray-500">About</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
