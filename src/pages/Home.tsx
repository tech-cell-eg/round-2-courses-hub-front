import TestimonialSlider from '../components/TestimonialSlider';
import Categories from './Categories/Categories';
import Courses from './Courses/Courses';

const Home = () => {
  return (
    <div>
      <Categories />
      <Courses showMore={false} />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
