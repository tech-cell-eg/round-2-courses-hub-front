import SignInImage from '../../assets/sign_in.png';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkWithArrow from '../../components/LinkWithArrow';

import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (_, { resetForm }) => {
      setTimeout(() => {
        toast.success('Message sent successfully!', {
          position: 'bottom-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        resetForm();
      }, 1000);
    },
  });
  return (
    <>
      <div className="my-20 flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between">
        <div className="lg:w-[50%] w-full px-18 py-24 bg-[#F2F2F2]">
          <h3 className="text-3xl text-[#0A0909] uppercase font-bold">Sign in</h3>
          <hr className="border-[#E2E1E1] my-6" />

          <form className="w-full" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5] w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password *"
                className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5] w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="mb-8 flex justify-between items-center sm:gap-3 gap-1 flex-wrap">
              <Link
                to="/auth/forgot-password"
                className="text-red-600 hover:opacity-80"
              >
                Forgot password?
              </Link>

              <label className="flex items-center gap-2 mt-4">
                <input
                  type="checkbox"
                  name="remember"
                  className="w-[20px] h-[20px]"
                />
                <span>Remember me</span>
              </label>
            </div>

            <div className="flex justify-between items-center flex-wrap gap-4">
              <LinkWithArrow
                className="bg-[#7768E5] text-white scale capitalize"
                type="button"
                disabled={formik.isSubmitting}
                showArrow
                fullRounded
              >
                {formik.isSubmitting ? 'Loading' : 'sign in'}
              </LinkWithArrow>

              <div className="flex gap-4 items-center flex-wrap">
                <p>Or sign in with</p>
                <ul className="flex gap-2 items-center ">
                  <li className="text-3xl">
                    <a
                      href="#"
                      className="block p-2 bg-white rounded-full text-[#FC6441] scale"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="text-3xl">
                    <a
                      href="#"
                      className="block p-2 bg-white rounded-full text-[#FC6441] scale"
                    >
                      <FaGoogle />
                    </a>
                  </li>
                  <li className="text-3xl">
                    <a
                      href="#"
                      className="block p-2 bg-white rounded-full text-[#FC6441] scale"
                    >
                      <FaApple />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>

          <p className="mt-8">
            Don't have an account?{' '}
            <Link
              to="/auth/register"
              className="text-[#0E2A46] font-bold hover:opacity-80"
            >
              Sign Up
            </Link>
          </p>
        </div>

        <div className="lg:w-[50%] w-[70%] mx-auto overflow-hidden">
          <img
            src={SignInImage}
            alt="sign in image"
            className="w-full hover:scale-105 hover:rotate-1 transition-all duration-300 h-full"
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
