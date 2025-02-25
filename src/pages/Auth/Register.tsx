import { useNavigate } from 'react-router-dom';
import SignUpImage from '../../assets/sign_up.png';
import { FaUserGraduate, FaChalkboardTeacher, FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="my-20 flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between">
        <div className="lg:w-[50%] w-full px-18 py-24 bg-[#F2F2F2]">
          <h3 className="text-3xl text-[#0A0909] uppercase font-bold">Sign up</h3>
          <hr className="border-[#E2E1E1] my-6" />

          <p className="mb-6 text-lg font-medium">Choose your role to proceed:</p>

          {/* Role Selection Buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate('/auth/student-registration')}
              className="flex items-center gap-3 bg-[#7768E5] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition"
            >
              <FaUserGraduate className="text-xl" />
              Register as Student
            </button>

            <button
              onClick={() => navigate('/auth/instructor-registration')}
              className="flex items-center gap-3 bg-[#FC6441] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition"
            >
              <FaChalkboardTeacher className="text-xl" />
              Register as Instructor
            </button>
          </div>

          {/* Social Login Options */}
          <div className="mt-6 text-center">
            <p className="text-gray-700 text-lg font-medium mb-4">Or sign up with</p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="p-3 bg-white border border-gray-300 rounded-full text-blue-600 hover:bg-gray-100 transition"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="#"
                className="p-3 bg-white border border-gray-300 rounded-full text-red-600 hover:bg-gray-100 transition"
              >
                <FaGoogle className="text-2xl" />
              </a>
              <a
                href="#"
                className="p-3 bg-white border border-gray-300 rounded-full text-black hover:bg-gray-100 transition"
              >
                <FaApple className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Login Link */}
          <p className="mt-8 text-center">
            Already have an account?{' '}
            <Link
              to="/auth/login"
              className="text-[#0E2A46] font-bold hover:opacity-80"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-[50%] w-[70%] mx-auto overflow-hidden">
          <img
            src={SignUpImage}
            alt="sign up"
            className="w-full hover:scale-105 hover:rotate-1 transition-all duration-300 h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
