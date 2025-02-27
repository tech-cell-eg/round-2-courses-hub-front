import BackgroundImage from "../assets/bg_section.jpg";
import LinkWithArrow from "../components/LinkWithArrow";
import SubTitle from "../components/SubTitle";
import "../styles/styles.css";
import { ICourse1 } from "../types/types";
import CourseCard from "./CourseCard1";
import { useEffect, useState } from "react";

interface CoursesProps {
    courses?: ICourse1[]; 
    showMore?: boolean;
}

const Courses = ({ courses = [], showMore = true }: CoursesProps) => {

    const [limit, setLimit] = useState(6);
    
    const showMoreCourses = () => {
        if (limit >= courses.length) return;
        setLimit((prev) =>
            courses.length - prev >= 6 ? prev + 6 : courses.length
        );
    };

    useEffect(() => {
        if (limit === 6) return;
        document.getElementById(`card-id-${limit - 6}`)?.scrollIntoView({
            behavior: "smooth",
        });
    }, [limit]);

    return (
        <div className="bg-cover bg-top bg-no-repeat py-20" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <SubTitle to="/courses/">Top Popular Course</SubTitle>
            <div className="mt-6 flex md:flex-row flex-col justify-between md:items-center">
                <h2 className="sm:text-4xl text-2xl font-bold text-[#0E2A46]">
                    Edunity Course <span className="word-with-circle">student</span> Can <br />
                    Join with us.
                </h2>
                {showMore ? (
                    <LinkWithArrow
                        type="button"
                        clickHandler={showMoreCourses}
                        className={`mt-6 ml-auto md:text-xl sm:text-lg text-sm ${limit === courses.length && "opacity-50 cursor-not-allowed"} scale`}
                        fullRounded
                        showArrow
                        disabled={limit === courses.length}
                    >
                        Load More Courses
                    </LinkWithArrow>
                ) : (
                    <LinkWithArrow
                        to="/courses"
                        className="mt-6 ml-auto md:text-xl sm:text-lg text-sm scale"
                        fullRounded
                        showArrow
                    >
                        Load More Courses
                    </LinkWithArrow>
                )}
            </div>

            {courses.length === 0 ? (
                <p className="text-center text-red-500 mt-6">No courses available.</p>
            ) : (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
                    {courses.slice(0, limit).map((course, i) => (
                        <CourseCard key={i} course={course} idName={`card-id-${i}`} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Courses;
