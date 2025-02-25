import { FaArrowRightLong } from 'react-icons/fa6';
import LinkWithArrow from './LinkWithArrow';
import SubTitle from './SubTitle';
import { Link } from 'react-router-dom';
import { FaShareAlt } from 'react-icons/fa';

const instructorData = [
  {
    id: 1,
    image: 'https://randomuser.me/api/portraits/women/76.jpg',
    name: 'Sophia Bennett',
    title: 'Junior Instructor',
  },
  {
    id: 2,
    image: 'https://randomuser.me/api/portraits/men/79.jpg',
    name: 'Michael Carter',
    title: 'Junior Instructor',
  },
  {
    id: 3,
    image: 'https://randomuser.me/api/portraits/men/61.jpg',
    name: 'Daniel Lee',
    title: 'Junior Instructor',
  },
  {
    id: 4,
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
    name: 'George Anderson',
    title: 'Junior Instructor',
  },
];

export default function InstructorHome() {
  return (
    <div className="py-20 flex lg:flex-row flex-col gap-10 justify-between items-center">
      <div className="lg:w-3/7 w-full">
        <SubTitle to="/instructors" className="mb-4">
          OUR INSTRUCTOR
        </SubTitle>
        <h2 className="sm:text-4xl text-2xl font-bold text-[#0E2A46] mb-8">
          Meet Our Expert Instructor
        </h2>
        <p className="text-[##333931] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris..
        </p>

        <div className="text-base flex items-center gap-4 flex-wrap">
          <LinkWithArrow to="/contact-us/" className="" showArrow fullRounded>
            Contact Us
          </LinkWithArrow>

          <LinkWithArrow
            to={`/courses`}
            className="flex items-center !bg-[#17254E] !text-white font-medium scale !pr-1 w-fit "
            fullRounded
          >
            <span className="flex items-center gap-1">
              Find courses
              <span
                className={`md:ml-4 ml-2 h-[36px] w-[36px] flex items-center justify-center rounded-full bg-[#1F3061] mr-1 `}
              >
                <FaArrowRightLong />
              </span>
            </span>
          </LinkWithArrow>
        </div>
      </div>
      <div className="lg:w-4/7 w-full grid sm:grid-cols-2 gap-8 lg:justify-around justify-center">
        {instructorData.map((instructor) => (
          <div
            key={instructor.id}
            className="relative h-74 border-4 border-[#704FE6] rounded-xl shadow hover:shadow-[10px_10px_5px] hover:translate-[-5px] transition-all duration-300 ease-in-out"
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className="h-full w-full"
            />
            <button className="absolute top-3 right-3 bg-[#704FE6] text-white p-3  text-xl rounded-full scale">
              <FaShareAlt />
            </button>
            <Link
              to={`/instructors/${instructor.id}`}
              className="absolute w-[90%] bg-white bottom-4 left-[50%] translate-x-[-50%] px-4 py-1 rounded-md shadow-lg flex justify-between items-center scale"
            >
              <div>
                <h3 className="text-xl font-bold text-[#0E2A46]">
                  {instructor.name}
                </h3>
                <p className="text-[#333931]">{instructor.title}</p>
              </div>
              <span
                className={`md:ml-4 ml-2 h-[36px] w-[36px] flex items-center justify-center rounded-full bg-[#E9E2FF] mr-1 text-[#704FE6] `}
              >
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
