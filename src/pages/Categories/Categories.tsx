import CategoryItem from "../../components/CategoryItem";
import SubTitle from "../../components/SubTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import { ICategory } from "../../types/types";
import { IoAppsOutline } from "react-icons/io5"; 
import categories from "../../api/categories"; 

const Categories = () => {
    const [categoriesapi, setCategoriesapi] = useState<ICategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://round2-courses-hub.digital-vision-solutions.com/api/category");
                const apiCategories = response.data.data;
                const updatedCategories = apiCategories.map((apiCategory: ICategory) => {
                    const matchedCategory = categories.find(c => c.name === apiCategory.name) as Partial<ICategory> || {}; 

                    return {
                        ...apiCategory,
                        icon: matchedCategory.icon || IoAppsOutline,  
                        color: matchedCategory.color || "#1B75E8",  
                        backgroundColor: matchedCategory.backgroundColor || "#EAF6FF", 
                        
                    };
                });
                console.log(apiCategories,'apicate');
                
                setCategoriesapi(updatedCategories);
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
                <SubTitle to="/categories/">Categories</SubTitle>
                <h2 className="sm:text-4xl text-2xl font-bold text-[#0E2A46]">
                    Browse By Categories
                </h2>
            </div>
            {loading && <p className="text-center text-gray-500">Loading categories...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && !error && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categoriesapi.map((category) => (
                        <CategoryItem
                            key={category.id}
                            to={`/categories/${category.id}`}
                            icon={category.icon}
                            color={category.color}
                            bgColor={category.backgroundColor}
                        >
                            {category.name}
                        </CategoryItem>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Categories;
