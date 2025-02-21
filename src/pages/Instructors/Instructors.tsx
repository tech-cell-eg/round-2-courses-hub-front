import { Outlet } from "react-router-dom";

import InstructorCards from "./instructorCards";


const Instructors = () => {
    return (

        <div>

            <InstructorCards />
            <Outlet />
        </div>

    )
};

export default Instructors;
