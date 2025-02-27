import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import JoinUsHome from '../components/JoinUsHome';
import Stats from '../components/Stats';
import TestimonialSlider from '../components/TestimonialSlider';
import WhyUs from '../components/WhyUs';
import Blog from './Blog/Blog';
import Categories from './Categories/Categories';
import Courses from './Courses/CoursesPage';

import TestimonialImageBg from '../assets/testimonial_home_bg.jpg';
import InstructorHome from '../components/InstructorHome';
import YourCareer from '../components/YourCareer';
import LinkWithArrow from '../components/LinkWithArrow';
import SubTitle from '../components/SubTitle';
import Newsletter from '../components/Newsletter';

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
      </section>

      <div
        style={{ backgroundImage: `url(${TestimonialImageBg})` }}
        className="bg-cover bg-center bg-no-repeat px-5 md:px-20 lg:px-30 pt-10"
      >
        <Stats />
        <TestimonialSlider />
      </div>

      <section className="px-5 md:px-20 lg:px-30">
        <InstructorHome />
        <YourCareer />

        <div className="py-20">
          <SubTitle to="/blog/">Blogs</SubTitle>
          <div className="mt-2 mb-8 flex md:flex-row flex-col justify-between md:items-center">
            <h2 className="sm:text-4xl text-2xl font-bold text-[#0E2A46]">
              Most Popular Post.
            </h2>

            <LinkWithArrow
              to="/blog"
              className="mt-6 ml-auto md:text-xl sm:text-lg text-sm scale"
              fullRounded
              showArrow
            >
              All Blog Posts
            </LinkWithArrow>
          </div>
          <Blog show3 />
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default Home;
