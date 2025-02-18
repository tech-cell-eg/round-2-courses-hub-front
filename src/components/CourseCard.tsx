import { Link } from "react-router-dom";
import BackgroundImage from "../assets/course_card_bg.png";
import { ICourse } from "../types/types";
import LinkWithArrow from "./LinkWithArrow";
import StarRating from "./StarRating";
import { IoIosPaper, IoIosClock, IoMdPerson } from "react-icons/io";

export default function CourseCard({
    course,
    idName,
}: {
    course: ICourse;
    idName?: string;
}) {
    return (
        <div
            className="p-3 rounded-md border border-dashed border-[#704FE6] bg-[##F4F5F8] hover:scale-[101%] shadow-lg transition-all duration-300 flex flex-col"
            id={idName}
        >
            <div className="w-full relative md:h-54 h-70 overflow-hidden rounded-md">
                <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-300"
                />
                <span className="absolute bottom-2 left-2 bg-[#17254E] bg-opacity-90 text-white py-2 px-4 w-fit text-sm rounded-sm">
                    {course.category}
                </span>
            </div>
            <div
                className="my-2 bg-no-repeat bg-center bg-contain flex flex-col grow"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                        <StarRating rating={course.rating.value} />
                        <div>
                            <span className="text-[#704FE6] text-xs font-bold mr-1">
                                {course.rating.value}
                            </span>
                            <span className=" text-xs">
                                ({course.rating.count})
                            </span>
                        </div>
                    </div>
                    <span className="text-sm text-[#704FE6] font-bold">
                        ${course.price.current}
                    </span>
                </div>
                <Link
                    to={`/courses/${course.id}`}
                    className="text-lg text-[#0E2A46] font-bold mb-4 grow"
                >
                    {course.name}
                </Link>
                <div className="flex sm:items-center justify-between sm:flex-row flex-col gap-2 mb-4 bg-white p-2 rounded-md">
                    <div className="flex gap-1 items-center">
                        <IoIosPaper />
                        <span className="text-sm">
                            Lesson {course.contents.length}
                        </span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <IoIosClock />
                        <span className="text-sm">{course.total_duration}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <IoMdPerson />
                        <span className="text-sm">
                            Students {course.enrolled}+
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <Link
                        to={`/instructors/${course.instructor.id}`}
                        className="flex items-center gap-2"
                    >
                        <div className="w-[34px] h-[34px] rounded-full overflow-hidden border-2 border-[#704FE6]">
                            <img
                                src={course.instructor.image}
                                alt={course.instructor.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="text-sm text-[#0E2A46] font-bold">
                            {course.instructor.name
                                .split(" ")
                                .slice(0, -1)
                                .join(" ")}
                        </span>
                    </Link>
                    <LinkWithArrow
                        to={`/courses/${course.id}`}
                        fullRounded
                        className="!px-8"
                    >
                        Enroll →
                    </LinkWithArrow>
                </div>
            </div>
        </div>
    );
}
