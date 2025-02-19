import Categories from "./Categories/Categories";
import Courses from "./Courses/Courses";

const Home = () => {
    return (
        <div>
            <Categories />
            <Courses showMore={false} />
        </div>
    );
};

export default Home;
