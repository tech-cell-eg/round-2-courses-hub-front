import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaPinterestP } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const FooterSocial = () => {
    return (
        <div className="flex flex-col items-center text-center p-4">
            <img src="/footerLogo.png" alt="Footer Logo" className="w-28 md:w-48 h-auto mb-3" />
            <p className=" text-sm max-w-md mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius ab nemo quibusdam nesciunt impedit voluptatem, maxime commodi voluptates quas blanditiis? Doloremque, ipsum. Recusandae corporis ducimus aliquid unde quasi accusantium!
            </p>
            <div className="flex gap-4">
                {[FaFacebookF, FaInstagram, FaPinterestP, FaTwitter].map((Icon, index) => (
                    <div
                        key={index}
                        className="w-10 h-10 flex items-center justify-center rounded-full 
                                   bg-[rgba(77,87,86,1)] text-[rgba(252,100,65,1)] text-xl
                                   hover:opacity-80 transition-opacity cursor-pointer"
                    >
                        <Icon />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FooterSocial;
