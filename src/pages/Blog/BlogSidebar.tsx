import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import data from '../../api/blogs.json';
import LinkWithArrow from '../../components/LinkWithArrow';
import { FaArrowRightLong } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';
import { LiaCommentsSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const tags = [
  'Balance',
  'Coaching',
  'Motivation',
  'Courses',
  'Life Guide',
  'Strategy',
  'Education',
  'Coach',
];

export default function BlogSidebar() {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('web design');
  const filteredData = data.filter((post) => post.category === category);
  const postsPerPage = 3;
  const totalPages = Math.ceil(filteredData.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category: string) => {
    setCategory(category);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const displayedPosts = filteredData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="py-20 min-h-screen grid grid-cols-7 gap-10">
      <div className="container mx-auto lg:col-span-5 col-span-full mb-10">
        {displayedPosts.map((post) => (
          <div key={post.id} className="p-4 mb-8 rounded-xl shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover rounded"
            />
            <div className="mt-4">
              <div className="flex items-center text-gray-500 text-sm space-x-8">
                <span className="flex items-center gap-0.5">
                  <SlCalender className="text-[#704FE6] text-lg mr-2" /> {post.date}
                </span>
                <span className="flex items-center gap-0.5">
                  <LiaCommentsSolid className="text-[#704FE6] text-lg mr-2" />{' '}
                  Comment ({post.comments.count.toString().padStart(2, '0')})
                </span>
              </div>
              <h2 className="text-xl font-bold mt-2">{post.title}</h2>
              <LinkWithArrow
                to={`/blog/${post.id}`}
                className="mt-4 flex items-center bg-[#E9E2FF] !text-[#704FE6] font-medium scale !pr-1"
                fullRounded
              >
                <span className="flex items-center gap-1">
                  Read More{' '}
                  <span
                    className={`md:ml-4 ml-2 h-[40px] w-[40px] flex items-center justify-center rounded-full bg-[#E3DBFF] mr-1 `}
                  >
                    <FaArrowRightLong className="text-xl" />
                  </span>
                </span>
              </LinkWithArrow>
            </div>
          </div>
        ))}
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex space-x-2 mt-6 text-white">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1 ? 'bg-[#704FE6]' : 'bg-gray-700'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
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
              <button
                key={index}
                className="scale"
                onClick={() => handleCategoryChange(cat)}
              >
                <li
                  className={`${
                    category === cat ? 'bg-[#7768E5] text-white' : ''
                  } hover:bg-[#7768E5] hover:text-white w-full h-full  p-2 border border-[#E2E1E1] duration-300 transition-all flex justify-between items-center gap-1`}
                >
                  {cat}
                  <MdKeyboardArrowRight />
                </li>
              </button>
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
            {tags.map((tag, i) => (
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
