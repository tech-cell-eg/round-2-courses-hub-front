import ShoppingCards from "./ShoppingCards";
import { Outlet } from "react-router-dom";


const EducationShop = () => {
    return (
        <div>
            <ShoppingCards />
            <Outlet />
        </div>

    )
};

export default EducationShop;
