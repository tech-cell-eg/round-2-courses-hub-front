import FooterGallery from "./FooterGallery";
import FooterInfo from "./FooterInfo";
import FooterServices from "./FooterServices";
import FooterSocial from "./FooterSocial";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
    return (
        <div className="bg-black text-white flex flex-col flex-wrap p-6">
            {/* First Row */}
            <FooterInfo />

            {/* Second Row - 2 Columns on md+ screens */}
            <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
                <FooterSocial />
                <FooterServices />
                <FooterGallery />
                <FooterSubscribe />
            </div>
        </div>
    );
};

export default Footer;
