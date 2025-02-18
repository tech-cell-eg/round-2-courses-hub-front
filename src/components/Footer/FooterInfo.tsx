import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterInfoDetails = [
    {
        logo: <FaLocationDot />, // Use the actual component
        title: "Address",
        details: "1925 Boggess Street",
    },
    {
        logo: <FaPhoneAlt />,
        title: "Phone",
        details: "(00) 875 784 568",
    },
    {
        logo: <MdEmail />,
        title: "Email",
        details: "info@gmail.com",
    }
];

const FooterInfo = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between  py-5 px-5 md:px-15 lg:px-20 border-b- border-gray-200">
            {FooterInfoDetails.map((info, index) => (
                <div key={index} className="flex items-center gap-4 py-4 ">
                    <div className="text-2xl p-2 rounded-full border border-1-gray-300 bg-blue-950">{info.logo}</div>    
                    <div>
                        <p className="font-medium">{info.title}</p>
                        <h2 className="text-lg">{info.details}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FooterInfo;
