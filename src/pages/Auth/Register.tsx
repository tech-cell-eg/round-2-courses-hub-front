import SignUpImage from '../../assets/sign_up.png';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkWithArrow from '../../components/LinkWithArrow';

import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must be numeric')
    .required('Phone is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
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
          <h3 className="text-3xl text-[#0A0909] uppercase font-bold">Sign up</h3>
          <hr className="border-[#E2E1E1] my-6" />

          <form className="w-full" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name *"
                name="name"
                className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5] w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>

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
                type="tel"
                name="phone"
                placeholder="Phone *"
                className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5] w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm">{formik.errors.phone}</div>
              ) : null}
            </div>

            <div className="mb-8">
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

            <div className="flex justify-between items-center flex-wrap gap-4">
              <LinkWithArrow
                className="bg-[#7768E5] text-white scale capitalize"
                type="button"
                disabled={formik.isSubmitting}
                showArrow
                fullRounded
              >
                {formik.isSubmitting ? 'Loading' : 'sign up'}
              </LinkWithArrow>

              <div className="flex gap-4 items-center flex-wrap">
                <p>Or sign up with</p>
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
            Already have an account?{' '}
            <Link
              to="/auth/login"
              className="text-[#0E2A46] font-bold hover:opacity-80"
            >
              Login
            </Link>
          </p>
        </div>

        <div className="lg:w-[50%] w-[70%] mx-auto overflow-hidden">
          <img
            src={SignUpImage}
            alt="sign up image"
            className="w-full hover:scale-105 hover:rotate-1 transition-all duration-300 h-full"
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
