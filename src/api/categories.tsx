import {
    FaBusinessTime,
    FaPalette,
    FaCode,
    FaUserCircle,
    FaMobileAlt,
} from "react-icons/fa";
import { MdDesignServices, MdVideoCameraBack } from "react-icons/md";
import { RiMarkPenFill } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";

import { IconType } from "react-icons";

type Category = {
    id: number;
    name: string;
    definition: string;
    icon: IconType;
    image: string;
    videoLink: string;
    longDescription: string;
    shortDescription: string;
    requirements: string;
    whatYouWillLearn: string;
    careerOpportunities: string;
    tags: string[];
    color: string;
    backgroundColor: string;
};

const categories: Category[] = [
    {
        id: 1,
        name: "Business Management",
        definition:
            "Business management involves planning, organizing, and overseeing business operations to achieve organizational goals.",
        icon: FaBusinessTime,
        image: "",
        videoLink: "https://www.youtube.com/watch?v=example1",
        longDescription:
            "Business management focuses on strategies for effective leadership, resource allocation, and decision-making to drive business success.",
        shortDescription: "Planning and organizing business operations.",
        requirements:
            "Basic understanding of business principles and leadership skills.",
        whatYouWillLearn:
            "You will learn about leadership, project management, and business strategy.",
        careerOpportunities:
            "Business managers can work as project managers, operations managers, or business consultants.",
        tags: ["Leadership", "Project Management", "Strategy", "Operations"],
        color: "#1B75E8",
        backgroundColor: "#EAF6FF",
    },
    {
        id: 2,
        name: "Arts & Design",
        definition:
            "Arts & Design involves creating visual and creative works to express ideas and emotions.",
        icon: FaPalette,
        image: "",
        videoLink: "https://www.youtube.com/watch?v=example2",
        longDescription:
            "Arts & Design focuses on creativity, aesthetics, and visual communication through various mediums like painting, sculpture, and digital art.",
        shortDescription: "Creating visual and creative works.",
        requirements: "Creative thinking and basic knowledge of design tools.",
        whatYouWillLearn:
            "You will learn about color theory, composition, and design principles.",
        careerOpportunities:
            "Artists and designers can work as illustrators, graphic designers, or art directors.",
        tags: ["Creativity", "Visual Arts", "Design", "Aesthetics"],
        color: "#FF6881",
        backgroundColor: "#FEF2F4",
    },
    {
        id: 3,
        name: "Development",
        definition:
            "Development involves creating software, applications, and systems to solve problems and improve efficiency.",
        icon: FaCode,
        image: "",
        videoLink: "https://www.youtube.com/watch?v=example3",
        longDescription:
            "Development focuses on coding, debugging, and deploying software solutions for various platforms and industries.",
        shortDescription: "Building software and applications.",
        requirements: "Basic programming knowledge and problem-solving skills.",
        whatYouWillLearn:
            "You will learn programming languages, software architecture, and debugging techniques.",
        careerOpportunities:
            "Developers can work as software engineers, web developers, or system architects.",
        tags: ["Programming", "Software", "Web Development", "Debugging"],
        color: "#00BC65",
        backgroundColor: "#EEFBF5",
    },
    {
        id: 4,
        name: "UI/UX Design",
        definition:
            "UI/UX Design involves creating user-friendly and visually appealing interfaces for digital products.",
        icon: FaUserCircle,
        image: "",
        videoLink: "https://www.youtube.com/watch?v=example4",
        longDescription:
            "UI/UX Design focuses on understanding user behavior, creating wireframes, and designing interfaces that enhance user experience.",
        shortDescription: "Designing user-friendly digital interfaces.",
        requirements: "Basic knowledge of design tools like Figma or Adobe XD.",
        whatYouWillLearn:
            "You will learn about user research, wireframing, and prototyping.",
        careerOpportunities:
            "UI/UX designers can work as product designers, interaction designers, or user researchers.",
        tags: ["User Experience", "User Interface", "Figma", "Prototyping"],
        color: "#F2A700",
        backgroundColor: "#FFFAEF",
    },
    {
        id: 5,
        name: "Graphic Design",
        definition:
            "Graphic Design involves creating visual content to communicate messages effectively.",
        icon: MdDesignServices,
        image: "",
        videoLink: "https://www.youtube.com/watch?v=example5",
        longDescription:
            "Graphic Design focuses on typography, color theory, and layout design to create visually appealing content for print and digital media.",
        shortDescription: "Creating visual content for communication.",
        requirements:
            "Basic knowledge of design tools like Adobe Photoshop or Illustrator.",
        whatYouWillLearn:
            "You will learn about typography, branding, and visual communication.",
        careerOpportunities:
            "Graphic designers can work as brand designers, illustrators, or art directors.",
        tags: [
            "Typography",
            "Branding",
            "Illustration",
            "Adobe Creative Suite",
        ],
        color: "#4500D0",
        backgroundColor: "#F7F3FF",
    },
    {
        id: 6,
        name: "Digital Marketing",
        definition:
            "Digital Marketing involves promoting products or services using digital channels like social media, email, and search engines.",
        icon: RiMarkPenFill,
        image: "",
        videoLink: "https://www.youtube.com/watch?v=example6",
        longDescription:
            "Digital Marketing focuses on strategies like SEO, content marketing, and social media advertising to reach and engage target audiences.",
        shortDescription: "Promoting products or services online.",
        requirements:
            "Basic understanding of marketing principles and digital tools.",
        whatYouWillLearn:
            "You will learn about SEO, social media marketing, and analytics.",
        careerOpportunities:
            "Digital marketers can work as SEO specialists, social media managers, or content strategists.",
        tags: ["SEO", "Social Media", "Content Marketing", "Analytics"],
        color: "#BB0064",
        backgroundColor: "#FFF0F8",
    },
    {
        id: 7,
        name: "Exclusive Man",
        definition:
            "Exclusive Man focuses on personal development, style, and leadership for men.",
        icon: GiClothes,
        image: "",
        videoLink: "https://www.youtube.com/watch?v=example7",
        longDescription:
            "Exclusive Man provides guidance on personal branding, fashion, and leadership skills to help men excel in their personal and professional lives.",
        shortDescription: "Personal development and style for men.",
        requirements: "Interest in personal growth and self-improvement.",
        whatYouWillLearn:
            "You will learn about personal branding, fashion, and leadership.",
        careerOpportunities:
            "This field is more about personal growth than specific careers.",
        tags: [
            "Personal Branding",
            "Fashion",
            "Leadership",
            "Self-Improvement",
        ],
        color: "#0011BB",
        backgroundColor: "#F3F4FE",
    },
    {
        id: 8,
        name: "Product Design",
        definition:
            "Product Design involves creating functional and aesthetically pleasing products for users.",
        icon: MdDesignServices,
        image: "",
        videoLink: "https://www.youtube.com/watch?v=example8",
        longDescription:
            "Product Design focuses on understanding user needs, prototyping, and designing products that are both functional and visually appealing.",
        shortDescription: "Designing user-centered products.",
        requirements: "Basic knowledge of design tools and user research.",
        whatYouWillLearn:
            "You will learn about prototyping, user research, and design thinking.",
        careerOpportunities:
            "Product designers can work in industries like tech, fashion, or consumer goods.",
        tags: ["Prototyping", "User Research", "Design Thinking", "Aesthetics"],
        color: "#D16900",
        backgroundColor: "#FFF7EF",
    },
    {
        id: 9,
        name: "Video & Photography",
        definition:
            "Video & Photography involves capturing and editing visual content for various purposes.",
        icon: MdVideoCameraBack,
        image: "",
        videoLink: "https://www.youtube.com/watch?v=example9",
        longDescription:
            "Video & Photography focuses on storytelling through visual media, including techniques for shooting, editing, and post-production.",
        shortDescription: "Creating visual stories through video and photos.",
        requirements: "Basic knowledge of cameras and editing software.",
        whatYouWillLearn:
            "You will learn about composition, lighting, and video editing.",
        careerOpportunities:
            "Photographers and videographers can work in media, advertising, or freelance.",
        tags: ["Storytelling", "Editing", "Composition", "Lighting"],
        color: "#00A9ED",
        backgroundColor: "#F1FBFF",
    },
    {
        id: 10,
        name: "Mobile Application Development",
        definition:
            "Mobile Application Development involves creating apps for smartphones and tablets.",
        icon: FaMobileAlt,
        image: "",
        videoLink: "https://www.youtube.com/watch?v=example10",
        longDescription:
            "Mobile Application Development focuses on building apps for iOS and Android platforms using programming languages like Swift, Kotlin, or React Native.",
        shortDescription: "Building apps for mobile devices.",
        requirements:
            "Basic knowledge of programming languages like Java, Swift, or JavaScript.",
        whatYouWillLearn:
            "You will learn about mobile app architecture, UI design, and debugging.",
        careerOpportunities:
            "Mobile developers can work as iOS developers, Android developers, or cross-platform developers.",
        tags: ["iOS", "Android", "React Native", "Mobile UI"],
        color: "",
        backgroundColor: "",
    },
];

export default categories;
