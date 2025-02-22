import { instructorCards } from "./data";
import { useParams } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaSkype, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneVolume, FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const InstructorProfile = () => {
    const { id } = useParams();
    const instructor = instructorCards.find((instructor) => instructor.id === id);

    if (!instructor) {
        return <p>Instructor not found.</p>;
    }

    return (
        <div className="py-15 px-4">
            <div className="flex flex-col md:flex-row py-10 px-5 gap-8 bg-purple-50 rounded-md">
                {/* Left Side */}
                <div className="flex flex-col items-center gap-6">
                    <img src={instructor.img} alt="Instructor" className="w-[200px] h-[200px] rounded-sm object-cover" />

                    {/* Social Icons */}
                    <div className="flex gap-3 py-5 px-3 items-center">
                        {[FaFacebookF, FaTwitter, FaSkype, FaLinkedinIn].map((Icon, idx) => (
                            <div key={idx} className="w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
                                <Icon />
                            </div>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-3 py-4 text-gray-700">
                        <div className="flex gap-3 items-center"><FaPhoneVolume className="text-red-500" /><p>(568) 367-987-237</p></div>
                        <div className="flex gap-3 items-center"><FaLocationDot className="text-orange-500" /><p>Hudson, WI, 54016</p></div>
                        <div className="flex gap-3 items-center"><MdEmail className="text-red-500" /><p>govillage@gmail.com</p></div>
                    </div>

                    {/* Contact Button */}
                    <Link to={`/contact-us`} className="flex  items-center bg-purple-700 rounded-full text-white hover:bg-purple-800 transition w-[250px] h-[60px] justify-between">
                        <span className="text-lg font-medium p-3">Contact Us Teacher</span>
                        <div className="bg-purple-500 w-[60px] h-[60px] flex items-center justify-center rounded-full">
                            <FaArrowRight />
                        </div>
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex flex-col gap-6 bg-white w-full md:w-[70%] rounded-md p-6 md:p-10">
                    <h1 className="text-lg md:text-xl font-bold">{instructor.name}</h1>
                    <p className="text-orange-500">{instructor.job}</p>
                    <p>
                        Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at
                        tempor commodo. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Arcu
                        dictum varius duis at consectetur lorem donec massa.
                    </p>

                    {/* Education */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Education:</h2>
                        <p>
                            I’ve spent years figuring out the “formula” to teaching technical skills in a classroom
                            environment, and I’m really excited to finally share my expertise with you.
                        </p>
                    </div>

                    {/* Expertise & Skills */}
                    <div className="flex flex-col">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">EXPERTISE & SKILLS:</h2>

                        {[
                            { skill: "Lectures", percent: 80, color: "bg-purple-500" },
                            { skill: "My Skills", percent: 70, color: "bg-blue-500" },
                            { skill: "Consulting", percent: 90, color: "bg-green-500" },
                        ].map(({ skill, percent, color }, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="mb-1">{skill}</h3>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div className={`${color} h-4 rounded-full`} style={{ width: `${percent}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorProfile;
