import Bg1 from '../assets/newsletter_1.png';
import Bg2 from '../assets/newsletter_2.png';

export default function Newsletter() {
  return (
    <div
      className="mt-20 py-20 bg-[#704FE6] px-5 md:px-20 lg:px-30"
      style={{
        backgroundImage: `url(${Bg1}), url(${Bg2})`,
        backgroundPosition: 'right bottom, left top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '16%, 10%',
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-4xl text-white font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-lg text-white">
            Subscribe our newsletter to get our latest update & news.
          </p>
        </div>
        <form className="relative lg:w-2/4 w-full">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-4 rounded-md bg-white"
          />
          <button
            type="submit"
            className="text-white bg-black py-2 px-4 rounded-md md:mt-0 absolute right-2 top-2 font-bold"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
}
