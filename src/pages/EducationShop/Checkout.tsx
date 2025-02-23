import CheckoutForm from "./CheckoutForm";
import { FaFolder } from "react-icons/fa";
import OrderDetails from "./OrderDetails";
import { Link } from "react-router-dom";

interface TopProps {
    message: string;
    linkMessage: string;
    linkText: string;
}

const Top = ({ message, linkMessage, linkText }: TopProps) => {
    return (
        <div className=" flex items-center gap-2 p-2  border-t-3 border-purple-500 bg-gray-100  w-ful">
            <FaFolder className="text-purple-500 text-lg" />
            <div className="flex gap-2">
                <p className="font-semibold">{message}</p>
                <Link
                    to={linkText}
                    className=" hover:underline"
                >
                    {linkMessage}
                </Link>
            </div>
        </div>
    );
};

const Checkout = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 p-4 ">
            <div className="w-full lg:w-[50%] flex flex-col gap-4">
                <Top
                    message="Have a coupon?"
                    linkMessage="Click here to enter your coupon"
                    linkText="/education-shop"
                />
                <OrderDetails />
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-4">
                <Top
                    message="Returning customer?"
                    linkMessage="Click here to login"
                    linkText="/auth/login"
                />
                <CheckoutForm />
            </div>
        </div>
    );
};

export default Checkout;
