import { Link } from "react-router-dom";
import { ILink } from "../types/types";

export default function SubTitle({ to="", children, className }: ILink) {
    return (
        <Link
            to={to}
            className={`${className} block uppercase text-xs bg-[#E9E2FF] text-[#704FE6] w-fit font-bold tracking-wide px-3 py-1 rounded-md scale`}
        >
            {children}
        </Link>
    );
}
