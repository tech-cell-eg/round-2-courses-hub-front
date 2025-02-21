import { Link } from "react-router-dom";
import BgImage from "../assets/pricing-bg.png";
import { FaRegCheckCircle } from "react-icons/fa";

export default function PricingCard({
    primerColor,
    secondColor,
    bgColor,
    textColor,
    title,
    price,
    features,
    text,
    to,
}: {
    primerColor: string;
    secondColor?: string;
    bgColor: string;
    textColor: string;
    title: string;
    price: string;
    features: string[];
    text: string;
    to: string;
}) {
    return (
        <div
            style={{
                color: textColor,
                backgroundColor: primerColor,
                backgroundImage: `url(${BgImage})`,
            }}
            className="bg-cover bg-center pt-20 relative shadow-lg"
        >
            <h3 className="bg-[#7768E5] uppercase text-white w-fit min-w-[80%] text-center relative -top-[20%] left-1/2 transform -translate-x-1/2 p-2 rounded-sm">
                {title}
            </h3>
            {/* <div className="mt-20"></div> */}
            <div
                style={{ backgroundColor: bgColor }}
                className="pt-20 rounded-t-full relative"
            >
                <h3
                    className="w-34 h-34 bg-white rounded-full flex justify-center items-center absolute -top-[20%] left-1/2 transform -translate-x-1/2 p-2 border-2"
                    style={{ borderColor: secondColor || primerColor }}
                >
                    <div>
                        <span
                            style={{ color: primerColor }}
                            className="text-3xl font-bold"
                        >
                            {price}
                        </span>
                        <sub className="text-[#0E2A46] text-md"> / Month</sub>
                    </div>
                </h3>
                <p className="text-center opacity-80 mb-4 px-12">{text}</p>
                <ul className="px-8 flex flex-col gap-2 w-fit mb-10">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <FaRegCheckCircle className="text-[#FC6441]" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <div className="px-8 pb-8">
                    <Link
                        to={to}
                        className="w-full text-center block py-4 text-white text-lg uppercase font-bold rounded-md scale"
                        style={{ backgroundColor: secondColor || primerColor }}
                    >
                        Purchase now
                    </Link>
                </div>
            </div>
        </div>
    );
}
