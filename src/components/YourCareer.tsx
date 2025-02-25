import SubTitle from './SubTitle';
import BgImage from '../assets/carrer_bg.png';
import Woman from '../assets/carrer_woman.png';
import Man from '../assets/carrer_man.png';
import LinkWithArrow from './LinkWithArrow';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function YourCareer() {
  return (
    <div className="py-20">
      <SubTitle to="/testimonials" className="mx-auto mb-4">
        Choose your career
      </SubTitle>

      <h2 className="mx-auto mb-16 text-center sm:text-5xl text-3xl text-[#0E2A46] font-bold xl:max-w-1/2">
        Discover your gain
      </h2>

      <div className="grid lg:grid-cols-2 gap-6">
        <div
          className="flex bg-[#704FE6] items-center sm:pt-2 pt-10 pl-8 bg-cover rounded shadow-2xl sm:flex-row flex-col sm:gap-2 gap-4"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="sm:w-1/2 w-full">
            <h3 className="mb-4 text-white text-lg">Start from today</h3>
            <p className="mb-6 text-white text-xl font-bold">
              Join our training courses & Build your skill.
            </p>
            <LinkWithArrow
              to={`/pricing`}
              className="flex items-center !bg-[#FFD25D] font-medium scale !pr-1 w-fit !text-[#0E2A46]"
              fullRounded
            >
              <span className="flex items-center gap-1">
                Join Now
                <span
                  className={`md:ml-4 ml-2 h-[30px] w-[30px] flex items-center justify-center rounded-full bg-[#FEB65C] mr-1`}
                >
                  <FaArrowRightLong />
                </span>
              </span>
            </LinkWithArrow>
          </div>
          <div className="sm:w-1/2 w-full h-80">
            <img src={Woman} alt="image" className="w-full h-full" />
          </div>
        </div>

        <div
          className="flex bg-[#FFD25D] items-center sm:pt-2 pt-10 pl-8 bg-cover rounded shadow-2xl sm:flex-row flex-col sm:gap-2 gap-4"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="sm:w-1/2 w-full">
            <h3 className="mb-4 text-black text-lg">Start from today</h3>
            <p className="mb-6 text-black text-xl font-bold">
              Join our training courses & Build your skill.
            </p>
            <LinkWithArrow to="/pricing/" className="" showArrow fullRounded>
              Join Now
            </LinkWithArrow>
          </div>
          <div className="sm:w-1/2 w-full h-80">
            <img src={Man} alt="image" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
