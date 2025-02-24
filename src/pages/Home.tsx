import TestimonialSlider from '../components/TestimonialSlider';
import Blog from './Blog/Blog';
import Categories from './Categories/Categories';
import Courses from './Courses/Courses';

const Home = () => {
  return (
    <div>
      <Categories />
      <Courses showMore={false} />
      <TestimonialSlider />
      <div>
        <Blog show3 />
      </div>
    </div>
  );
};

export default Home;
