import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  userName: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const StudentRegistration = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (_, { resetForm }) => {
      setTimeout(() => {
        toast.success('Account Created', {
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
    <div className="py-20">
      <form
        className="bg-[#F3F5F5] w-full lg:px-32 sm:px-8 px-2 py-16"
        onSubmit={formik.handleSubmit}
      >
        <h3 className="uppercase text-4xl font-bold text-[#0E2A46] mb-8">
          Student Registration
        </h3>
        <h4 className="text-lg text-[#0E2A46] font-bold mb-4">
          Fields with <span className="text-red-400">*</span> are required
        </h4>
        <p className="text-[#333931] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        </p>

        <label className="flex flex-col mb-4 gap-1">
          <span className="font-bold">
            First Name <span className="text-red-400">*</span>
          </span>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
          ) : null}
        </label>

        <label className="flex flex-col mb-4 gap-1">
          <span className="font-bold">
            Last Name <span className="text-red-400">*</span>
          </span>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
          ) : null}
        </label>

        <label className="flex flex-col mb-4 gap-1">
          <span className="font-bold">
            User Name <span className="text-red-400">*</span>
          </span>
          <input
            type="text"
            placeholder="User Name"
            name="userName"
            className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className="text-red-500 text-sm">{formik.errors.userName}</div>
          ) : null}
        </label>

        <label className="flex flex-col mb-4 gap-1">
          <span className="font-bold">
            Email <span className="text-red-400">*</span>
          </span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </label>

        <label className="flex flex-col mb-4 gap-1">
          <span className="font-bold">
            Password <span className="text-red-400">*</span>
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </label>

        <label className="flex flex-col mb-8 gap-1">
          <span className="font-bold">
            Confirm Password<span className="text-red-400">*</span>
          </span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-sm">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </label>

        <button
          className="bg-[#7768E5] text-white py-2 px-10 rounded scale w-full"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Loading...' : 'Create Account'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default StudentRegistration;
