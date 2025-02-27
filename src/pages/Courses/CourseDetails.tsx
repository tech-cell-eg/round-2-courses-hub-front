import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../../api/courses.json';
import { ICourse } from '../../types/types';
import StarRating from '../../components/StarRating';
import { IoIosPaper, IoIosClock, IoMdPerson } from 'react-icons/io';
import LinkWithArrow from '../../components/LinkWithArrow';
import { useCourserCart } from '../../context/CourseCartContext';
import { useAuth } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, cart } = useCourserCart();
  const { token } = useAuth();

  const [course, setCourse] = useState<ICourse | undefined>();
  const [tap, setTap] = useState(0);

  const API_URL =
    import.meta.env.VITE_BASE_URL ||
    'https://round2-courses-hub.digital-vision-solutions.com/api';

  useEffect(() => {
    const course = data.courses.find((course) => `${course.id}` === id);
    if (!course) navigate('/404/');
    setCourse(course);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [id, navigate]);

  const handleTap = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    setTap(Number(target.dataset.tap));
  };

  const addToCartHandler = async () => {
    if (!token) {
      navigate('/auth/login');
      toast.error('Please Login First', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (course && token) {
      try {
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `https://round2-courses-hub.digital-vision-solutions.com/api/student/cart/add/${course.id}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.request(config);

        if (response.status === 200) {
          addToCart({ ...course, price: course.price.current });
          toast.success('Course Added To Cart', {
            position: 'bottom-left',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } catch (error: any) {
        if (error.status === 409) {
          toast.warn('Course Already In Cart', {
            position: 'bottom-left',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error('Add To Cart failed. Please try again.', {
            position: 'bottom-left',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      }
    }
  };

  const goToCartHandler = () => {
    navigate('/courses/cart');
  };

  return (
    <>
      <div className="py-20 grid grid-cols-7 gap-10">
        <div className="lg:col-span-5 col-span-full lg:order-none order-2 ">
          <div className="w-full h-120 overflow-hidden mb-10 lg:block hidden">
            <img
              className="w-full h-full object-cover scale-105 transition-all duration-300 hover:scale-110 hover:rotate-1"
              src={`/${course?.image}`}
              alt={course?.name}
            />
          </div>
          <div className="flex gap-3 items-center">
            <StarRating rating={course?.rating.value || 0} />
            <div>
              <span className="text-gray-500 mr-2">{course?.rating.value}</span>
              <span className="text-gray-500">({course?.rating.count})</span>
            </div>
          </div>

          <h2 className="text-4xl text-[#0E2A46] font-bold my-5">{course?.name}</h2>

          <div className="flex sm:items-center sm:flex-row flex-col gap-6 mb-4 border-b border-[#4D575680] p-2 pb-4">
            <div className="flex gap-1 items-center">
              <IoIosPaper className="text-[#7768E5]" />
              <span className="text-sm">Lesson {course?.contents.length}</span>
            </div>
            <div className="flex gap-1 items-center">
              <IoIosClock className="text-[#7768E5]" />
              <span className="text-sm">{course?.total_duration}</span>
            </div>
            <div className="flex gap-1 items-center">
              <IoMdPerson className="text-[#7768E5]" />
              <span className="text-sm">Students {course?.enrolled}+</span>
            </div>
          </div>

          <div className="flex sm:gap-6 gap-2 my-10 sm:flex-row flex-col">
            <button
              data-tap={0}
              onClick={handleTap}
              className={`px-4 py-2 capitalize scale ${
                tap === 0 ? 'bg-[#7768E5] text-white' : 'bg-[#F0F4F8] text-[#0E2A46]'
              } rounded-sm`}
            >
              overview
            </button>
            <button
              data-tap={1}
              onClick={handleTap}
              className={`px-4 py-2 capitalize scale ${
                tap === 1 ? 'bg-[#7768E5] text-white' : 'bg-[#F0F4F8] text-[#0E2A46]'
              } rounded-sm`}
            >
              curriculum
            </button>
            <button
              data-tap={2}
              onClick={handleTap}
              className={`px-4 py-2 capitalize scale ${
                tap === 2 ? 'bg-[#7768E5] text-white' : 'bg-[#F0F4F8] text-[#0E2A46]'
              } rounded-sm`}
            >
              instructor
            </button>
            <button
              data-tap={3}
              onClick={handleTap}
              className={`px-4 py-2 capitalize scale ${
                tap === 3 ? 'bg-[#7768E5] text-white' : 'bg-[#F0F4F8] text-[#0E2A46]'
              } rounded-sm`}
            >
              reviews
            </button>
          </div>

          <div>
            {tap === 0 && (
              <div>
                <h3 className="text-2xl font-bold text-[#0E2A46] uppercase mb-3">
                  Course Description
                </h3>
                <p className="text-[#4D5756] text-md leading-7 mb-8">
                  {course?.description}
                </p>
                <h3 className="text-2xl font-bold text-[#0E2A46] uppercase mb-3">
                  What Will I Learn From This Course?
                </h3>
                <ul className="list-disc list-inside text-[#4D5756] text-md mb-8">
                  {course?.benefits.map((item, index) => (
                    <li key={index} className="text-[#4D5756] text-md mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tap === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-[#0E2A46] uppercase mb-3">
                  Course content
                </h3>

                <ol className="text-[#4D5756] text-md mb-8">
                  {course?.contents.map((item, index) => (
                    <li
                      key={index}
                      className="text-md mb-2 bg-[#F0F4F8] px-4 py-2 rounded-sm flex justify-between items-center"
                    >
                      <span className="font-bold text-[#4D5756]">
                        <span className="opacity-40">{index + 1} - </span>
                        {item.lesson}
                      </span>
                      <span className="text-[#7768E5]">{item.duration}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {tap === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-[#0E2A46] uppercase mb-6">
                  Course instructor
                </h3>
                <div className="flex gap-5 items-center">
                  <img
                    className="w-20 h-20 object-cover rounded-full"
                    src={`/${course?.instructor.image}`}
                    alt={course?.instructor.name}
                  />
                  <div>
                    <h4 className="text-lg font-bold text-[#0E2A46]">
                      {course?.instructor.name}
                    </h4>
                    <Link
                      to={`/instructors/${course?.instructor.id}`}
                      className="text-[#7768E5] hover:underline scale"
                    >
                      Go to Instructor Page
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {tap === 3 && (
              <div>
                <h3 className="text-2xl font-bold text-[#0E2A46] uppercase mb-6">
                  Course Reviews
                </h3>
                <div className="flex gap-5 flex-col w-fit">
                  {course?.reviews.map((review, index) => (
                    <div key={index} className="bg-[#F0F4F8] p-4">
                      <div className="flex items-center gap-3">
                        <div>
                          <h4 className="text-lg font-bold text-[#0E2A46] mb-1">
                            {review.name}
                          </h4>
                          <div className="text-sm flex items-center gap-2">
                            <StarRating rating={review.rating} />
                            <span className="text-sm text-[#4D5756]">
                              ({review.rating})
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#4D5756] text-md leading-7 mt-1">
                        {review.review}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-span-2 col-span-full lg:order-none order-1 bg-[#E8E8F4] p-4 h-fit lg:sticky static top-2">
          <div className="overflow-hidden w-full lg:h-40 h-120 mb-5">
            <img
              className="w-full h-full object-cover scale-105 transition-all duration-300 hover:scale-110 hover:rotate-1"
              src={`/${course?.image}`}
              alt={course?.name}
            />
          </div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-sm capitalize">course fee</span>
            <div className="flex items-center gap-2">
              <span className="text-lg text-[#0E2A46] font-bold">
                ${course?.price.current}
              </span>
              {course?.price.discount && (
                <span className="text-sm line-through">
                  ${course?.price.original}
                </span>
              )}
            </div>
          </div>

          <p className="text-[#0E2A46] capitalize mb-5">
            29-day money-back guarantee
          </p>

          <LinkWithArrow
            type="button"
            className={`capitalize w-full flex justify-center mb-5 scale ${
              cart.find((c) => `${c.id}` === id) && '!bg-[#FFD25D] !text-black'
            }`}
            clickHandler={
              cart.find((c) => `${c.id}` === id) ? goToCartHandler : addToCartHandler
            }
          >
            {cart.find((c) => `${c.id}` === id) ? 'Go To Cart' : 'Buy now'}
          </LinkWithArrow>

          <div className="flex items-center justify-between gap-2 mb-4 text-[#4D5756]">
            <span className="capitalize font-bold">schedule</span>
            <span>{course?.schedule}</span>
          </div>

          <div className="flex items-center justify-between gap-2 mb-4 text-[#4D5756]">
            <span className="capitalize font-bold">enrolled</span>
            <span>{course?.enrolled}</span>
          </div>

          <div className="flex items-center justify-between gap-2 mb-4 text-[#4D5756]">
            <span className="capitalize font-bold">lectures</span>
            <span>{course?.contents.length}</span>
          </div>

          <div className="flex items-center justify-between gap-2 mb-4 text-[#4D5756]">
            <span className="capitalize font-bold">skill level</span>
            <span>{course?.skill_level}</span>
          </div>

          <div className="flex justify-between flex-wrap gap-2 mb-4 text-[#4D5756]">
            <span className="capitalize font-bold">class days:</span>
            <span className="pl-2">{course?.course_days.join(' - ')}</span>
          </div>

          <div className="flex items-center justify-between gap-2 mb-4 text-[#4D5756]">
            <span className="capitalize font-bold">language</span>
            <span>{course?.language}</span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CourseDetails;
