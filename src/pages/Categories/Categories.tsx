import CategoryItem from "../../components/CategoryItem";
import SubTitle from "../../components/SubTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import { ICategory } from "../../types/types";

// import { IoSettingsOutline } from "react-icons/io5";
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
import { IoAppsOutline } from "react-icons/io5"; 

const iconMap: Record<string, React.ComponentType> = {
    "Web Development": FaCode, 
    "Mobile App Development": FaMobileAlt , 
    "Data Science": FaBusinessTime,
    "Machine Learning": FaUserCircle, 
    "Artificial Intelligence": MdDesignServices, 
    "Cybersecurity": RiMarkPenFill, 
    "Cloud Computing": GiClothes,
    "DevOps": MdDesignServices,
    "Game Development": MdVideoCameraBack,
    "Blockchain": FaPalette,
};

const colorMap: Record<string, string> = {
    "Web Development": "#1B75E8",
    "Mobile App Development": "#FF6881",
    "Data Science": "#00BC65",
    "Machine Learning": "#F2A700",
    "Artificial Intelligence": "#4500D0",
    "Cybersecurity": "#BB0064",
    "Cloud Computing": "#0011BB",
    "DevOps": "#D16900",
    "Game Development": "#00A9ED",
    "Blockchain": "#009688",
};

const bgColorMap: Record<string, string> = {
    "Web Development": "#EAF6FF",
    "Mobile App Development": "#FEF2F4",
    "Data Science": "#EEFBF5",
    "Machine Learning": "#FFFAEF",
    "Artificial Intelligence": "#F7F3FF",
    "Cybersecurity": "#FFF0F8",
    "Cloud Computing": "#F3F4FE",
    "DevOps": "#FFF7EF",
    "Game Development": "#F1FBFF",
    "Blockchain": "#E0F2F1",
};

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://round2-courses-hub.digital-vision-solutions.com/api/category");
                setCategories(response.data.data);
            } catch (error) {
                setError("Failed to fetch categories.");
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);
    return (
        <div className="py-20">
            <div className="flex flex-col items-center gap-4 mb-16">
                <SubTitle to="/categories/">categories</SubTitle>
                <h2 className="sm:text-4xl text-2xl font-bold text-[#0E2A46]">
                    Browse By Categories
                </h2>
            </div>
            {loading && <p className="text-center text-gray-500">Loading categories...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && !error && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                
            {categories.map((category:ICategory) => {
                    const defaultIcon = IoAppsOutline; 
                    const defaultColor = "#1B75E8"; 
                    const defaultBgColor = "#EAF6FF"; 
                    return (
                        <CategoryItem
                            key={category.id}
                            to={`/categories/${category.id}`}
                            icon={iconMap[category.name] || defaultIcon}
                            color={ colorMap[category.name] || defaultColor}
                            bgColor={ bgColorMap[category.name] || defaultBgColor}
                        >
                            {category.name}
                        </CategoryItem>
                    );
                })}
            </div>)}
        </div>
    );
};

export default Categories;
