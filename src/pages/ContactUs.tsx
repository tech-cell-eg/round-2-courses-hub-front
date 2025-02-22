import { IoLocationSharp } from 'react-icons/io5';
import { FaClock } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa6';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must be numeric')
    .required('Phone is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string(),
});

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
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
      <div className="relative my-20 py-14 sm:px-14 px-4 bg-[#F2F2F2] flex lg:flex-row flex-col-reverse lg:gap-4 gap-20 justify-between after:content-[''] after:block after:w-100 after:h-100 after:absolute after:bg-[#7768E5] after:bottom-0 after:left-0 after:translate-x-[-46%] after:translate-y-[45%] after:rotate-45 overflow-hidden after:rounded-2xl">
        <div className="lg:w-[45%] w-full relative z-10">
          <h2 className="text-4xl text-[#0E2A46] font-bold mb-4">Get in Touch</h2>
          <p className="mb-8 text-lg text-[#333931] ">
            Suspendisse ultrice gravida dictum fusce placerat
            <br />
            ultricies integer
          </p>

          <ul className="px-8 py-12 bg-white shadow mb-14">
            <li className="flex items-start mb-6 gap-4">
              <div className="w-[40px] h-[40px] bg-[#FC63411A] flex justify-center items-center rounded-full">
                <IoLocationSharp className="text-xl text-[#FC6441]" />
              </div>
              <div>
                <p className="text-[#4D5756] capitalize">Our Address</p>
                <p className="sm:text-lg text-md text-[#0E2A46] font-bold">
                  1564 Goosetown Drive
                </p>
                <p className="sm:text-lg text-md text-[#0E2A46] font-bold">
                  Matthews, NC 28105
                </p>
              </div>
            </li>

            <li className="flex items-start mb-6 gap-4">
              <div className="w-[40px] h-[40px] bg-[#FC63411A] flex justify-center items-center rounded-full">
                <FaClock className="text-xl text-[#FC6441]" />
              </div>
              <div>
                <p className="text-[#4D5756] capitalize">Hours of Operation</p>
                <p className="sm:text-lg text-md text-[#0E2A46] font-bold">
                  Mon - Fri: 9.00am to 5.00pm
                </p>
                <p className="text-[#4D5756]">[2nd sat Holiday]</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-[40px] h-[40px] bg-[#FC63411A] flex justify-center items-center rounded-full">
                <FaPhoneAlt className="text-xl text-[#FC6441]" />
              </div>
              <div>
                <p className="text-[#4D5756] capitalize">contact</p>
                <p className="sm:text-lg text-md text-[#0E2A46] font-bold">
                  +99- 35895-4565
                </p>
                <p className="sm:text-lg text-md text-[#0E2A46] font-bold">
                  supportyou@info.com
                </p>
              </div>
            </li>
          </ul>

          <div className="flex justify-between gap-2 flex-wrap">
            <p className="flex gap-2 items-center text-white">
              <FaArrowDown /> Customers Care
            </p>
            <ul className="flex gap-4">
              <li>
                <a
                  href="#"
                  className="block p-2 bg-white rounded-full text-[#FC6441] scale"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 bg-white rounded-full text-[#FC6441] scale"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 bg-white rounded-full text-[#FC6441] scale"
                >
                  <FaPinterestP />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 bg-white rounded-full text-[#FC6441] scale"
                >
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="lg:w-[45%] w-full" onSubmit={formik.handleSubmit}>
          <label className="flex flex-col mb-4 gap-1">
            <span className="font-bold">Name*</span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </label>

          <label className="flex flex-col mb-4 gap-1">
            <span className="font-bold">Email Address*</span>
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
            <span className="font-bold">Phone*</span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            ) : null}
          </label>

          <label className="flex flex-col mb-4 gap-1">
            <span className="font-bold">Subject*</span>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className="text-red-500 text-sm">{formik.errors.subject}</div>
            ) : null}
          </label>

          <label className="flex flex-col mb-10 gap-1">
            <span className="font-bold">Message</span>
            <textarea
              placeholder="Your Message"
              className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
              rows={4}
            />
          </label>

          <button
            className="bg-[#7768E5] text-white py-2 px-10 rounded scale"
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactUs;
