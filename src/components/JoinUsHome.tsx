import FullBg from '../assets/home_full_bg.png';
import LinkWithArrow from './LinkWithArrow';

export default function JoinUsHome() {
  return (
    <div
      style={{
        backgroundImage: `url(${FullBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      <div className="px-5 md:px-20 lg:px-30 py-20 bg-[#0e2a46DD]">
        <h2 className="text-xl font-bold text-[#FFD25D] mb-4">
          Join Our New Session
        </h2>
        <p className="text-white mb-8 text-4xl font-bold">
          Call To Enroll Your Child
          <br />
          (+91)958423452
        </p>
        <LinkWithArrow to="/contact-us/" className="" showArrow fullRounded>
          Join With Us
        </LinkWithArrow>
      </div>
    </div>
  );
}
