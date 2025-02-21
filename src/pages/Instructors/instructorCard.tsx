import { InstructorProps } from "../../types/types";
import { FaShareAlt } from "react-icons/fa";

function InstructorCard({ card }: { card: InstructorProps }) {
  return (
    <div className=" flex flex-col gap-2 justify-between w-full shadow-lg px-2 py-4 bg-gray-50 cursor-pointer">
      {/* Share Icon Positioned Correctly */}

      {/* Instructor Image */}
      <div className="relative">
        <img src={card.img} alt="Instructor" className="w-full h-auto rounded-md" />
        <div className="absolute right-5 bottom-0 transform translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center 
                bg-[rgba(252,100,65,1)] text-white font-bold text-lg   shadow-md">
          <FaShareAlt />
        </div>
      </div>

      {/* Instructor Details */}
      <h2 className="text-blue-950 text-xl">{card.name}</h2>
      <p className="text-gray-500">{card.job}</p>
    </div>
  );
}

export default InstructorCard;
