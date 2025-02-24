import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import JoinUsHome from '../components/JoinUsHome';
import TestimonialSlider from '../components/TestimonialSlider';
import WhyUs from '../components/WhyUs';
import Blog from './Blog/Blog';
import Categories from './Categories/Categories';
import Courses from './Courses/Courses';

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="px-5 md:px-20 lg:px-30">
        <Categories />
        <Courses showMore={false} />
        <HomeAbout />
      </section>
      <JoinUsHome />

      <section className="px-5 md:px-20 lg:px-30">
        <WhyUs />
        <TestimonialSlider />
        <div>
          <Blog show3 />
        </div>
      </section>
    </div>
  );
};

export default Home;
