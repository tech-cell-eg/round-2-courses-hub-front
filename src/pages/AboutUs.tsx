import { FaArrowRight } from "react-icons/fa6";
import Courses from "./Courses/CoursesPage";
import Instructors from "./Instructors/Instructors";
import Testimonial from "./Testimonial";
import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="py-20">
            {/* first section (about us) */}
            <div className="flex flex-col md:flex-row gap-10 py-10">
                <div className="flex gap-2">
                    <div className="relative">
                        <img src="/about1.png" alt="about img" />
                        <div className="absolute top-0 left-0 w-[100px] h-[100px] transform translate-y-[-70%] translate-x-[-70%]">
                            <img src="/about0.png" alt="overlay img" className="hidden md:block"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <img src="/about2.png" alt="overlay img" />
                        <img src="/about3.png" alt="overlay img" />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-2">
                        <img src="/aboutLogo.png" alt="about log" className="w-[24px] h-[17px]" />
                        <span className="text-sm text-orange-600">ABOUT US</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl ">
                        Benefit from our online learning expertise <br />
                        <span className="font-bold text-orange-600">professional</span>
                    </h1>
                    <p className="my-4 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.</p>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold md:text-xl">Our Mission:</h3>
                            <p className="md:text-lg">Suspendisse ultrice gravida dictum
                                fusce placerat ultricies integer quis
                                auctor elit sed vulputate mi sit.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="font-bold md:text-xl">Our Vision:</h3>
                            <p className="md:-text-lg">Suspendisse ultrice gravida dictum
                                fusce placerat ultricies integer quis
                                auctor elit sed vulputate mi sit.</p>
                        </div>
                    </div>
                    <Link to={`/contact-us`} className="flex  items-center bg-green-500 rounded-full text-white hover:bg-green-600 transition w-[250px] h-[60px] justify-between">
                        <span className="text-lg font-medium p-3">Contact Us Teacher</span>
                        <div className="bg-green-400 w-[60px] h-[60px] flex items-center justify-center rounded-full">
                            <FaArrowRight />
                        </div>
                    </Link>

                </div>


            </div>
            {/* testimonial  */}
            <div className="bg-[url('/testimonialBg.png')] bg-cover bg-center h-fit w-full py-20">
                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl text-center">Creating A Community Of <br /> Life Long Learners.</h2>
                <Testimonial />
            </div>
            <Courses />
            <Instructors />

        </div>
    )
};

export default AboutUs;
