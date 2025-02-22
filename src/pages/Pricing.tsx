import PricingCard from "../components/PricingCard";

interface IPlan {
    primerColor: string;
    secondColor?: string;
    bgColor: string;
    textColor: string;
    title: string;
    price: string;
    features: string[];
    text: string;
    to: string;
}

const plans: IPlan[] = [
    {
        primerColor: "#0E2A46",
        secondColor: "#7768E5",
        bgColor: "#F4F4F4",
        textColor: "#0E2A46",
        title: "Basin Plan",
        price: "$20",
        features: [
            "7-Days Shipping World Wide",
            "3 Kg Weight Max /Package",
            "Free Wood Crate",
            "Get in touch to discuss",
            "Use Personal And Commercial",
            "24/7 Support",
        ],
        text: "Advanced features for pros who need more customization.",
        to: "/contact-us",
    },
    {
        primerColor: "#FC6441",
        bgColor: "#0E2A46",
        textColor: "#FFFFFF",
        title: "standard plan",
        price: "$20",
        features: [
            "7-Days Shipping World Wide",
            "3 Kg Weight Max /Package",
            "Free Wood Crate",
            "Get in touch to discuss",
            "Use Personal And Commercial",
            "24/7 Support",
        ],
        text: "Advanced features for pros who need more customization.",
        to: "/contact-us",
    },
    {
        primerColor: "#0E2A46",
        secondColor: "#7768E5",
        bgColor: "#F4F4F4",
        textColor: "#0E2A46",
        title: "premium plan",
        price: "$20",
        features: [
            "7-Days Shipping World Wide",
            "3 Kg Weight Max /Package",
            "Free Wood Crate",
            "Get in touch to discuss",
            "Use Personal And Commercial",
            "24/7 Support",
        ],
        text: "Advanced features for pros who need more customization.",
        to: "/contact-us",
    },
];

const Pricing = () => {
    return (
        <div className="py-20 flex lg:flex-row flex-col xl:gap-10 lg:gap-2 gap-20 justify-between lg:items-stretch items-center">
            {plans.map((plan, index) => (
                <PricingCard
                    key={index}
                    primerColor={plan.primerColor}
                    bgColor={plan.bgColor}
                    textColor={plan.textColor}
                    title={plan.title}
                    price={plan.price}
                    features={plan.features}
                    text={plan.text}
                    to={plan.to}
                    secondColor={plan.secondColor}
                />
            ))}
        </div>
    );
};

export default Pricing;
