import Image404 from '../assets/404.png';
import LinkWithArrow from '../components/LinkWithArrow';

const NotFound = () => {
  return (
    <div className="py-20 flex justify-between items-center sm:flex-row flex-col-reverse sm:gap-4 gap-16">
      <div className="sm:w-[47%] w-full sm:text-start text-center">
        <h2 className="text-4xl text-[#0E2A46] font-bold uppercase mb-4">
          Sorry, Page Not Found!
        </h2>
        <p className="text-[#333931] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <LinkWithArrow
          to="/"
          fullRounded
          showArrow
          className="capitalize sm:mx-0 mx-auto"
          reverseIcon
        >
          Back to Home
        </LinkWithArrow>
      </div>
      <div className="sm:w-[47%] w-full">
        <img src={Image404} alt="404" />
      </div>
    </div>
  );
};

export default NotFound;
