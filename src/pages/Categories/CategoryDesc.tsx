import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import categories from "../../api/categories";
import data from "../../api/courses.json";
import { ICoursesData } from "../../types/types";
import { ICategory } from "../../types/types";
import { FaCheckCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import axios from "axios";
import Courses from "../../components/CourseCat";
import { ICourse1 } from "../../types/types";

const CategoryDesc = () => {
    const { id } = useParams<{ id: string }>();
    // const navigate = useNavigate();

    const [category, setCategory] = useState<ICategory | undefined>();
    const [courses, setCourses] = useState<ICourse1[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    // useEffect(() => {
    //     const category = categories.find((category) => `${category.id}` === id);
    //     if (!category) navigate("/404/");
    //     setCategory(category);
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //     });
    // }, [id, navigate]);

    const fetchCoursesByCategory = async () => {
        try {
            const response = await axios.get(
                `https://round2-courses-hub.digital-vision-solutions.com/api/course/${id}`
            );
            if (response.data.status === 200 && response.data.data.length > 0) {
                const coursesData: ICoursesData = data;
                console.log(coursesData)
                const transformedCourses = response.data.data.map((course: ICourse1) => ({
                    id: course.id,
                    name: course.name,
                    course_description: course.course_description,
                    what_will_i_learn: course.what_will_i_learn,
                    category: course.category,
                    language: course.language,
                    curriculum: course.curriculum,
                    skill_level: course.skill_level,
                    price: course.price,
                    course_day: course.course_day,
                    start_time: course.start_time,
                    end_time: course.end_time,
                    enrolled_number: course.enrolled_number,
                    image: course.image,
                    total_duration: course.total_duration,
                    schedule: course.schedule,
                    rating: course.rating,
                    instructor: course.instructor,
                    reviews: course.reviews,
                }));
                setCourses(transformedCourses);
            } else {
                setError("No courses found for this category.");
            }
        } catch (error) {
            setError("Failed to fetch courses.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {

        fetchCoursesByCategory();
    }, [id]);

    return (
        <div>
            <div className="py-20 grid grid-cols-7 gap-10">
                <div className="lg:col-span-5 col-span-full ">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12 mb-10">
                        <div className="overflow-hidden md:order-none order-2">
                            <img
                                src={category?.image}
                                alt={category?.name}
                                className="w-full h-full object-cover scale-105 hover:scale-110 hover:rotate-2 transition-transform duration-300"
                            />
                        </div>
                        <div className="md:order-none order-1">
                            <h2 className="text-3xl text-[#0E2A46] font-bold uppercase mb-4">
                                {category?.name}
                            </h2>
                            <p className="text-md leading-7">
                                {category?.definition} Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore
                                magna aliqua exercitation ullamco laboris. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit, sed
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                                exercitation ullamco laboris.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl text-[#0E2A46] font-bold uppercase mb-4">
                            service Description
                        </h3>
                        <p className="text-md mb-8 leading-7">
                            {category?.longDescription} Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua
                            exercitation ullamco laboris. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua
                            exercitation ullamco laboris. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua
                            exercitation ullamco laboris.
                            <br />
                            <br /> Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua exercitation ullamco
                            laboris. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua exercitation ullamco
                            laboris. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua exercitation ullamco
                            laboris.{" "}
                        </p>
                        <div className="flex gap-4 sm:flex-row flex-col justify-between mb-10">
                            <div className="p-10 bg-[#F2F2F2]">
                                <p className="flex gap-2 items-center mb-3">
                                    <FaCheckCircle className="text-[#FC6441]" />
                                    <span className="tracking-wider">
                                        Requirements
                                    </span>
                                </p>
                                <p className="leading-7">
                                    {category?.requirements} Dui id ornare arcu
                                    odio ut sem nulla pharetra diam eget aliquet
                                    nibh praesent tristique magna sit amet
                                    purus. Aenean euismod elementum nisi quis
                                    eleifend quam adipiscing vitae proin.
                                </p>
                            </div>
                            <div className="p-10 bg-[#F2F2F2]">
                                <p className="flex gap-2 items-center mb-3">
                                    <FaCheckCircle className="text-[#FC6441]" />
                                    <span className="tracking-wider">
                                        Description
                                    </span>
                                </p>
                                <p className="leading-7">
                                    {category?.shortDescription} Dui id ornare
                                    arcu odio ut sem nulla pharetra diam eget
                                    aliquet nibh praesent tristique magna sit
                                    amet purus. Aenean euismod elementum nisi
                                    quis eleifend quam adipiscing vitae proin.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl text-[#0E2A46] font-bold uppercase mb-4">
                                What you'll learn
                            </h3>
                            <p className="text-md mb-8 leading-7">
                                {category?.whatYouWillLearn} Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat aute irure dolor
                                in reprehenderit.
                            </p>
                            <iframe
                                style={{ width: "100%", minHeight: "400px" }}
                                src={category?.videoLink}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="mb-8"
                            ></iframe>
                            <p className="text-md leading-7">
                                {category?.careerOpportunities} Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat aute irure dolor
                                in reprehenderit. <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat aute irure dolor in reprehenderit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 col-span-full p-4 h-fit lg:sticky static top-2">
                    <div className="relative mb-10">
                        <input
                            type="text"
                            className="w-full ps-6 pe-8 py-2 outline-none border border-[#E2E1E1]"
                            placeholder="Search"
                        />
                        <FaSearch className="absolute right-3 top-3.5 text-[#0E2A46]" />
                    </div>

                    <div className=" mb-8">
                        <h3 className="text-xl text-[#0E2A46] font-bold uppercase mb-4">
                            service category
                        </h3>
                        <ul className="flex flex-col gap-2">
                            {categories.map((category) => (
                                <Link
                                    key={category.id}
                                    to={`/categories/${category.id}`}
                                    className="scale"
                                >
                                    <li
                                        key={category.id}
                                        className={`${category.id + "" === id
                                                ? "bg-[#7768E5] text-white"
                                                : ""
                                            } hover:bg-[#7768E5] hover:text-white w-full h-full  p-2 border border-[#E2E1E1] duration-300 transition-all flex justify-between items-center gap-1`}
                                    >
                                        {category.name}
                                        <MdKeyboardArrowRight />
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl text-[#0E2A46] font-bold uppercase mb-4">
                            popular tag:
                        </h3>
                        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                            {category?.tags.map((tag, i) => (
                                <Link to="#" className="scale">
                                    <li
                                        key={i}
                                        className="bg-[#F2F2F2] text-[#4D5756] p-2 w-full h-full flex justify-center items-center"
                                    >
                                        {tag}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {loading ? (
                <p className="text-center text-gray-500">جارٍ تحميل الرحلات...</p>
            ) : error ? (
                <p className="text-center text-red-500 mb-8">{error}</p>
            ) : (
                <div style={{ padding: "20px" }}>
                    <h2>Courses in This Category</h2>
                    <Courses courses={courses} showMore={false} />
                </div>)}
        </div>
    );
};

export default CategoryDesc;