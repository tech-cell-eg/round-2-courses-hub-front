import { FaArrowRightLong } from 'react-icons/fa6';
import LinkWithArrow from './LinkWithArrow';
import ImageHero from '../assets/hero.png';
import ImageHeroBg1 from '../assets/hero-bg-1.png';
import ImageHeroBg2 from '../assets/hero-bg-2.png';

export default function Hero() {
  return (
    <div className="pl-5 md:pl-20 lg:pl-30 relative flex flex-col lg:flex-row items-center bg-[url('/mnt/data/Background.png')] bg-cover bg-center lg:pt-0 pt-8 lg:gap-4 gap-26">
      <div
        className={`lg:w-1/2 text-center lg:text-left lg:bg-[auto_26%] bg-[auto_0%]`}
        style={{
          backgroundImage: `url(${ImageHeroBg2})`,
          backgroundPosition: '90% 100%',
          //   backgroundSize: '40%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <p className="text-purple-600 font-semibold uppercase">
          Welcome Edunity Online Courses
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold text-[#17254E] mt-4">
          Achieving Your Dreams Through Education
        </h1>
        <p className="text-gray-600 mt-4 max-w-md lg:mx-0 mx-auto mb-8">
          We are experienced in educational platform and skilled strategies for the
          success of our online learning.
        </p>
        <LinkWithArrow
          to={`/courses`}
          className="mt-4 flex items-center bg-[#17254E] !text-white font-medium scale !pr-1 w-fit lg:mx-0 mx-auto"
          fullRounded
        >
          <span className="flex items-center gap-1">
            Find courses
            <span
              className={`md:ml-4 ml-2 h-[40px] w-[40px] flex items-center justify-center rounded-full bg-[#1F3061] mr-1 `}
            >
              <FaArrowRightLong className="text-xl" />
            </span>
          </span>
        </LinkWithArrow>
      </div>
      <div
        className="lg:w-1/2 relative lg:mt-0"
        style={{
          backgroundImage: `url(${ImageHeroBg1})`,
          backgroundPosition: 'left center',
          backgroundSize: '60%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          src={ImageHero}
          alt="Students in Library"
          className="rounded-lg shadow-lg w-full max-w-lg ml-auto"
        />
        <div className="absolute lg:bottom-16 lg:top-auto top-0 lg:-left-6 left-1/2 lg:translate-0 -translate-1/2 bg-white py-4 px-8 shadow-2xl rounded-lg flex flex-col gap-4 sm:w-auto w-4/5">
          <p className="text-[#704FE6] sm:text-2xl text-lg">
            200+ <span className="font-bold text-[#17254E]">Instructor</span>
          </p>
          <div className="flex -space-x-5">
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/thumb/men/5.jpg"
              alt="Instructor"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/thumb/men/15.jpg"
              alt="Instructor"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/thumb/women/5.jpg"
              alt="Instructor"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/thumb/women/15.jpg"
              alt="Instructor"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/thumb/women/25.jpg"
              alt="Instructor"
            />
            <div className="w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-full border-2 border-white">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
