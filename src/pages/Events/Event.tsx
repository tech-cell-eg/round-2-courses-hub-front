import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { EventProps } from "../../types/types.ts"

const Event = ({ event }: { event: EventProps }) => {
  return (
    <div className="flex flex-col justify-between gap-5 p-4 bg-[rgba(243,245,247,1)] rounded-lg shadow-lg cursor-pointer relative">
      <div className="absolute top-8 right-8 w-[80px] h-[80px] flex flex-col items-center justify-center 
                bg-yellow-500 text-white font-bold text-lg rounded-md border-2 border-white shadow-md">
        <span className="text-2xl">{event.day}</span>
        <span className="text-sm uppercase">{event.month}</span>
      </div>



      {/* image  */}
      <img src="/event.png" alt="Envent Image" />
      {/* title, desc  */}
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-xl text-blue-950">{event.title}</h2>
        <p>{event.description}</p>
      </div>
      {/* time, location  */}
      <div className="flex justify-between">
        <div className="flex gap-1 items-center ">
          <IoIosTime className="text-teal-500" />
          <p className="text-sm text-gray-600">{event.time}</p>
        </div>
        <div className="flex gap-1">
          <FaLocationDot className="text-teal-500" />
          <p className="text-sm text-gray-700">{event.location}</p>
        </div>
      </div>
    </div >
  );
};

export default Event;
