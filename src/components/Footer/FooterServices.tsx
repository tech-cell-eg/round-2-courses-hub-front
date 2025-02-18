import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

const ServicesDetails = [
    "Web Development",
    "UI/UX Design",
    "Management",
    "Digital Marketing",
    "Blog News"
];

const FooterServices = () => {
    return (
        <div className="p-4">
            <h1 className="text-lg font-semibold mb-3">Our Services:</h1>
            <ul className="space-y-2">
                {ServicesDetails.map((service, index) => (
                    <li key={index} className="flex items-center gap-2  hover:text-[rgba(252,100,65,1)]">
                        <IoMdArrowDropright className="text-xl text-white" />
                        <Link to={`/${service.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
                            {service}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterServices;
