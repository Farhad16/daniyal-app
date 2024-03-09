import Image from "next/image";

const Card = ({ img, title, description }: any) => {
  return (
    <div className="flex flex-col rounded-xl p-4 md:p-10 gap-2 border shadow-sm max-w-full md:max-w-[391px] min-h-[215px] md:max-h-[316px] sm:min-h-[316px]">
      <div className="w-[62px] h-[62px] bg-gray-200 rounded-full flex items-center justify-center">
        <Image
          src={img}
          alt="card-img"
          width={32}
          height={32}
          className="max-w-[32px] max-h-[32px]"
        />
      </div>
      <h2 className="font-semibold text-[20px] text-gray-900 mt-2">{title}</h2>
      <p className="text-xs sm:text-base text-gray-500">{description}</p>
    </div>
  );
};

export default Card;
