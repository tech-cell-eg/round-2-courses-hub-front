import Image from '../assets/home_about.jpg';
import LinkWithArrow from './LinkWithArrow';
import SubTitle from './SubTitle';

export default function HomeAbout() {
  return (
    <div className="flex lg:flex-row flex-col-reverse gap-8 justify-between items-end py-20">
      <div className="lg:w-[47%] w-[80%] mx-auto">
        <img src={Image} alt="home about" className="w-full h-full" />
      </div>
      <div className="lg:w-[47%] w-full">
        <SubTitle to="/about-us/" className="mb-4">
          Our about us
        </SubTitle>
        <h2 className="sm:text-4xl text-2xl font-bold text-[#0E2A46] mb-8">
          Learn & Grow your <span className="word-with-circle">Skills</span>
          <br />
          From anywhere
        </h2>
        <p className="text-[#333931] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris..
        </p>

        <div className="flex sm:flex-row flex-col gap-8 justify-between mb-8">
          <div>
            <h3 className="text-[#0E2A46] text-md font-bold mb-1 capitalize">
              Flexible class Days
            </h3>
            <p className="text-[#0E2A46] text-sm">
              Suspendisse ultrice gravida dictum fusce placerat ultricies integer
              quis auctor elit sed vulputate mi sit.
            </p>
          </div>
          <div>
            <h3 className="text-[#0E2A46] text-md font-bold mb-1 capitalize">
              Flexible class Days
            </h3>
            <p className="text-[#0E2A46] text-sm">
              Suspendisse ultrice gravida dictum fusce placerat ultricies integer
              quis auctor elit sed vulputate mi sit.
            </p>
          </div>
        </div>

        <LinkWithArrow to="/about-us/" className="" showArrow fullRounded>
          Learn More
        </LinkWithArrow>
      </div>
    </div>
  );
}
