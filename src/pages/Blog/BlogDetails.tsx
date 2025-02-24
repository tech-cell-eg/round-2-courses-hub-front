import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import data from '../../api/blogs.json';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';
import { LiaCommentsSolid } from 'react-icons/lia';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IBlogPost } from '../../types/types';

import BlogDetailsImage1 from '../../assets/blog-details-1.png';
import BlogDetailsImage2 from '../../assets/blog-details-2.png';

import { FaQuoteRight } from 'react-icons/fa';
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
  message: Yup.string(),
});

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState<IBlogPost>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
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

  useEffect(() => {
    const postDate = data.find((post) => `${post.id}` === id);

    if (!postDate) navigate('/404/');
    setPost(postDate);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="py-20 min-h-screen grid grid-cols-7 gap-10">
      <div className="container mx-auto lg:col-span-5 col-span-full mb-10">
        {post && (
          <div className="p-4 mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full max-h-100 object-cover rounded"
            />
            <div className="mt-4">
              <div className="flex items-center text-gray-500 text-sm space-x-8 mb-8">
                <span className="flex text-lg items-center gap-0.5">
                  <SlCalender className="text-[#704FE6] mr-2" /> {post.date}
                </span>
                <span className="flex  text-lg items-center gap-0.5">
                  <LiaCommentsSolid className="text-[#704FE6] mr-2" /> Comment (
                  {post.comments.count.toString().padStart(2, '0')})
                </span>
              </div>
              <h2 className="text-4xl text-[#202124] font-bold mb-8">
                {post.title}
              </h2>

              <div className="mb-10">
                <p className="text-lg text-[#333931]">{post.blogText}</p>
                <br />
                <p className="text-lg text-[#333931]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat aute irure dolor in reprehenderit.
                </p>
                <br />
                <p className="text-lg text-[#333931]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat aute irure dolor in reprehenderit.
                </p>
              </div>

              <div className="flex gap-4 justify-between mb-8">
                <div className="w-[48%] overflow-hidden">
                  <img
                    src={BlogDetailsImage1}
                    alt="Blog Details"
                    className="w-full hover:scale-105 hover:rotate-2 transition-all duration-300"
                  />
                </div>
                <div className="w-[48%] overflow-hidden">
                  <img
                    src={BlogDetailsImage2}
                    alt="Blog Details"
                    className="w-full hover:scale-105 hover:rotate-2 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-3xl text-[#0E2A46] font-bold capitalize mb-4">
                  Latest Articles Updated Daily
                </h3>
                <p className="text-[#333931] text-lg leading-8">
                  With worldwide annual spend on digital advertising surpassing $325
                  billion, it’s no surprise that different approaches to online
                  marketing are becoming available. One of these new approaches is
                  performance marketing or digital performance marketing. Keep
                  reading to learn all about performance marketing
                </p>
              </div>

              <div className="flex flex-col items-center gap-6 p-4 mb-8">
                <FaQuoteRight className="text-6xl text-[#7768E5]" />
                <p className="text-2xl text-[#0E2A46] font-bold text-center">
                  {post.quote.text}
                </p>
                <h4 className="text-lg text-[#333931] font-semibold">
                  {post.quote.author}
                </h4>
              </div>

              <div className="flex justify-between items-center gap-4 flex-wrap mb-20">
                <div className="flex gap-4 items-center">
                  <h5 className="text-[#0E2A46] text-lg font-bold">Posted in:</h5>
                  <ul className="flex gap-2">
                    {post?.publishedIn.map((tag, i) => (
                      <li
                        key={i}
                        className="bg-[#F2F2F2] text-[#4D5756] p-2 flex justify-center items-center uppercase font-bold"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 items-center">
                  <h5 className="text-[#0E2A46] text-lg font-bold">Share:</h5>
                  <ul className="flex gap-2">
                    <li>
                      <a
                        href="#"
                        className="block p-2 hover:bg-[#0E2A46] hover:text-white bg-[#F2F2F2] text-[#0E2A46] scale"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block p-2 hover:bg-[#0E2A46] hover:text-white bg-[#F2F2F2] text-[#0E2A46] scale"
                      >
                        <FaInstagram />
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block p-2 hover:bg-[#0E2A46] hover:text-white bg-[#F2F2F2] text-[#0E2A46] scale"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                {post.comments.data.map((comment, i) => (
                  <div
                    key={i}
                    className="flex gap-6 items-center mb-8 border border-[#704FE6] px-6 py-8"
                  >
                    <div className="w-[120px] h-[120px] bg-[#F2F2F2] flex justify-center items-center rounded-full overflow-hidden">
                      <img
                        src={comment.image}
                        alt={comment.name}
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <div className="grow">
                      <div className="flex items-center gap-4 justify-between">
                        <p className="text-md text-[#333931]">
                          {comment.dateAndTime}
                        </p>
                        <button className="text-[#0E2A46] font-bold">Reply</button>
                      </div>
                      <h5 className="text-xl text-[#0E2A46] font-bold my-2">
                        {comment.name}
                      </h5>
                      <p className="text-[#333931] text-lg">{comment.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <form
          className="bg-[#F2F2F2] px-16 py-20 w-full"
          onSubmit={formik.handleSubmit}
        >
          <h2 className="text-4xl text-[#0E2A46] font-bold mb-4">
            Let’s Get in Touch
          </h2>
          <p className="mb-8 text-[#333931]">
            Your email address will not be published. Required fields are marked *
          </p>
          <div className="flex gap-6 justify-between">
            <div className="flex flex-col mb-4 gap-1 grow">
              <input
                type="text"
                placeholder="Name *"
                name="name"
                className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="flex flex-col mb-4 gap-1 grow">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col mb-4 gap-1">
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            ) : null}
          </div>

          <div className="flex flex-col mb-10 gap-1">
            <textarea
              placeholder="Your Message"
              className="bg-white py-2 px-4 outline-none border border-transparent focus:border-[#7768E5]"
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              name="message"
            />
          </div>

          <button
            className="bg-[#7768E5] text-white py-2 px-10 rounded scale"
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <ToastContainer />
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-2 col-span-full p-4 h-fit lg:sticky static top-2">
        <div className="relative mb-10">
          <input
            type="text"
            className="w-full ps-6 pe-8 py-2 outline-none border border-[#E2E1E1]"
            placeholder="Search"
          />
          <FaSearch className="absolute right-3 top-3.5 text-[#0E2A46]" />
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-[#0E2A46] font-bold uppercase mb-4">
            service category
          </h3>
          <ul className="flex flex-col gap-1">
            {[
              'web design',
              'graphic design',
              'it and software',
              'sales management',
              'art and humanities',
              'mobile application',
            ].map((cat, index) => (
              <Link
                key={index}
                className="scale"
                to="/blog/sidebar"
                state={{ categoryName: cat }}
              >
                <li
                  className={`${
                    post?.category === cat ? 'bg-[#7768E5] text-white' : ''
                  } hover:bg-[#7768E5] hover:text-white w-full h-full  p-2 border border-[#E2E1E1] duration-300 transition-all flex justify-between items-center gap-1`}
                >
                  {cat}
                  <MdKeyboardArrowRight />
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <h3 className="text-xl text-[#0E2A46] font-bold uppercase mb-4">
            Recent Post
          </h3>
          <ul className="flex flex-col gap-4">
            {data
              .reverse()
              .slice(0, 6)
              .map((post) => (
                <li key={post.id}>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex gap-4 items-center px-1 py-2 bg-[#F2F2F2]"
                  >
                    <div className="w-1/5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-4/5">
                      <span className="flex items-center gap-0.5">
                        <SlCalender className="text-[#704FE6] text-sm mr-2" />{' '}
                        {post.date}
                      </span>
                      <h3 className="font-bold text-[#0E2A46]">{post.title}</h3>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-[#0E2A46] font-bold uppercase mb-4">
            popular tag:
          </h3>
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-2">
            {post?.tags.map((tag, i) => (
              <li
                key={i}
                className="bg-[#F2F2F2] text-[#4D5756] p-2 w-full h-full flex justify-center items-center"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
