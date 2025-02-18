import FooterGallery from "./FooterGallery";
import FooterInfo from "./FooterInfo";
import FooterServices from "./FooterServices";
import FooterSocial from "./FooterSocial";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
    return (
        <div className="bg-black text-white flex flex-col  gap-y-8">
            {/* First Row */}
            <FooterInfo />

            {/* Second Row - Responsive Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <FooterSocial />
                <FooterServices />
                <FooterGallery />
                <FooterSubscribe />
            </div>

            {/* Copyright Section */}
            <div style={{ backgroundColor: "rgba(34, 34, 34, 1)" }} className="p-4 text-center text-white">
                <p>
                    Copyright © 2024 
                    <span className="text-[rgba(252,100,65,1)]"> edunity </span> 
                    || All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
