import CategoryItem from "../../components/CategoryItem";
import SubTitle from "../../components/SubTitle";

import categories from "../../api/categories";

// import { IoSettingsOutline } from "react-icons/io5";

const Categories = () => {
    return (
        <div className="py-20">
            <div className="flex flex-col items-center gap-4 mb-16">
                <SubTitle to="/categories/">categories</SubTitle>
                <h2 className="sm:text-4xl text-2xl font-bold text-[#0E2A46]">
                    Browse By Categories
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
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
        </div>
    );
};

export default Categories;
