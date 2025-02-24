import SubTitle from './SubTitle';

import { BiCheckCircle } from 'react-icons/bi';
import Image from '../assets/whyus.png';
import Bg from '../assets/hero-bg-1.png';

export default function WhyUs() {
  return (
    <div className="py-20">
      <div className="flex lg:flex-row flex-col gap-10 justify-between items-end">
        <div className="lg:w-[47%] w-full mb-14">
          <SubTitle to="#" className="mb-4">
            WHY CHOOSE US
          </SubTitle>
          <h2 className="sm:text-4xl text-2xl font-bold text-[#0E2A46] mb-8">
            Creating A Community Of
            <br />
            Life Long <span className="word-with-circle">Learners</span>
          </h2>
          <p className="text-[#333931] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris..
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#E9E2FF] px-4 py-6">
              <h3 className="text-lg flex items-center gap-4 mb-4">
                <BiCheckCircle className="text-[#704FE6]" />
                <span className="text-[#0E2A46]">World className Trainers</span>
              </h3>
              <p className="text-[#4D5756]">
                Gravida dictum fusce placerat ultricies integer
              </p>
            </div>
            <div className="bg-[#E9E2FF] px-4 py-6">
              <h3 className="text-lg flex items-center gap-4 mb-4">
                <BiCheckCircle className="text-[#704FE6]" />
                <span className="text-[#0E2A46]">Easy Learning</span>
              </h3>
              <p className="text-[#4D5756]">
                Gravida dictum fusce placerat ultricies integer
              </p>
            </div>
            <div className="bg-[#E9E2FF] px-4 py-6">
              <h3 className="text-lg flex items-center gap-4 mb-4">
                <BiCheckCircle className="text-[#704FE6]" />
                <span className="text-[#0E2A46]">Flexible</span>
              </h3>
              <p className="text-[#4D5756]">
                Gravida dictum fusce placerat ultricies integer
              </p>
            </div>
            <div className="bg-[#E9E2FF] px-4 py-6">
              <h3 className="text-lg flex items-center gap-4 mb-4">
                <BiCheckCircle className="text-[#704FE6]" />
                <span className="text-[#0E2A46]">Affordable Price</span>
              </h3>
              <p className="text-[#4D5756]">
                Gravida dictum fusce placerat ultricies integer
              </p>
            </div>
          </div>
        </div>
        <div
          className="lg:w-[47%] w-full lg:pl-0 sm:pl-20 sm:pr-20 sm:pt-20 px-10 pt-10"
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundSize: '60%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
          }}
        >
          <div className=" relative border-8 border-white after:content-[''] after:absolute after:-top-6 after:-left-6 after:w-0 after:h-0 after:border-t-[300px] after:border-r-[300px] after:border-t-[#FFD25D] after:border-r-transparent after:z-[-1] before:content-[''] before:absolute before:-bottom-6 before:-right-6 before:w-0 before:h-0 before:border-b-[300px] before:border-l-[300px] before:border-b-[#FFD25D] before:border-l-transparent before:z-[-1] hover:after:top-0 hover:after:left-0 hover:before:bottom-0 hover:before:right-0 after:transition-all after:duration-300 before:transition-all before:duration-300 sm:after:block after:hidden sm:before:block before:hidden">
            <img src={Image} alt="why us" className="w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
