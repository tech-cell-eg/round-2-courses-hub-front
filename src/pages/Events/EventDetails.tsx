import { useParams } from "react-router-dom";
import { eventDetails } from "./data";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { MdPlayLesson } from "react-icons/md";
import { useNavigate } from "react-router-dom";



const EventDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const event = eventDetails.find((event) => event.id === Number(id));

    if (!event) {
        return <div>Event not found</div>;
    }

    const handleBtnClick = () => {
        navigate('/auth/register')
    }

    return (
        <div className="flex flex-col md:flex-row py-10 justify-between gap-5 ">
            {/* left side  */}
            <div className="flex flex-col justify-between gap-5 w-full md:w-[70%]">
                <img src="/eventDetails.png" alt="event details" />
                <h1 className="text-4xl font-bold">{event.title}</h1>
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <MdPlayLesson className="text-orange-500" />
                        <p>Lesson 10</p>

                    </div>
                    <div className="flex gap-1 items-center">
                        <FaLocationDot className="text-orange-500" />
                        <span>{event.location}</span>

                    </div>
                    <div className="flex gap-1 items-center">
                        <IoIosTime className="text-orange-500" />
                        <span>{event.time}</span>

                    </div>
                </div>
                <p>{event.description}</p>
                <h2 className="text-xl font-bold">Event Description</h2>
                {/* <p>{event.description}</p> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum..</p>
            </div>

            {/* right side  */}
            <div className="flex flex-col gap-5 bg-purple-50 px-4 py-5 rounded-md h-fit">
                <img src="/eventDetails2.png" alt="event image 2" className="rounded-md" />
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p>
                            Course Fee
                        </p>
                        <p>29-da money-back guarantee</p>
                    </div>
                    <h3 className="font-bold">69$</h3>
                </div>
                <button className="w-full py-3 text-white font-bold bg-purple-500 hover:bg-purple-600 rounded-md" onClick={handleBtnClick}>Buy now</button>
                <div className="flex justify-between">
                    <p className="text-gray-600">4:00 pm 6:00 pm</p>
                    <p className="text-gray-600">Start Date</p>
                </div>

                <div className="flex justify-between">
                    <p className="text-gray-600">enrolled</p>
                    <p className="text-gray-600">100</p>
                </div>

                <div className="flex justify-between">
                    <p className="text-gray-600">lectures</p>
                    <p className="text-gray-600">80</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600">skill level</p>
                    <p className="text-gray-600">Basic</p>
                </div>

                <div className="flex justify-between">
                    <p className="text-gray-600">className day</p>
                    <p className="text-gray-600">Monday-friday</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600">language</p>
                    <p className="text-gray-600">English</p>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
