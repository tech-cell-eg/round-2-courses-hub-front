import "../../styles/styles.css";
import data from "../../api/courses.json";
import Courses from "../../components/Courses";

const CoursesPage = () => {
    const DataCourses = data.courses;
    return (
        <div>
            <Courses courses={DataCourses} showMore={false} title="popular"/>
        </div>
    );
};

export default CoursesPage;
