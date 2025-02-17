import BackgroundImage from "../../assets/bg_section.jpg";
import LinkWithArrow from "../../components/LinkWithArrow";
import SubTitle from "../../components/SubTitle";
import "../../styles/styles.css";
import data from "../../api/courses.json";
import { ICoursesData } from "../../types/types";
import CourseCard from "../../components/CourseCard";

const Courses = () => {
    const coursesData: ICoursesData = data;
    return (
        <div
            className={`bg-cover bg-top bg-no-repeat xl:px-40 sm:px-10 px-2 py-20`}
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <SubTitle to="courses">Top Popular Course</SubTitle>
            <div className="mt-6 flex md:flex-row flex-col justify-between md:items-center">
                <h2 className="sm:text-4xl text-2xl font-bold text-[#0E2A46]">
                    Edunity Course{" "}
                    <span className="word-with-circle">student</span> Can <br />
                    Join with us.
                </h2>
                <LinkWithArrow
                    to="/courses"
                    className="mt-6 ml-auto sm:text-xl text-sm"
                    fullRounded
                    showArrow
                >
                    Load More Courses
                </LinkWithArrow>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
                {coursesData.courses.slice(0, 6).map((course, i) => (
                    <CourseCard key={i} course={course} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
