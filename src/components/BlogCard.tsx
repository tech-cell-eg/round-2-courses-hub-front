import React from 'react';
import LinkWithArrow from './LinkWithArrow';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LiaCommentsSolid } from 'react-icons/lia';
import { SlCalender } from 'react-icons/sl';

interface BlogCardProps {
  image: string;
  date: string;
  comments: number;
  title: string;
  to: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, date, comments, title, to }) => {
  return (
    <div className="bg-[#F2F2F2] shadow-lg rounded max-w-sm p-4 flex flex-col">
      <div className="rounded-lg overflow-hidden">
        <img src={image} alt="Blog" className="w-full h-48 object-cover" />
      </div>

      <div className="p-5 grow flex flex-col">
        <div className="flex items-center text-gray-500 text-sm space-x-8">
          <span className="flex items-center gap-0.5">
            <SlCalender className="text-[#704FE6] text-lg mr-2" /> {date}
          </span>
          <span className="flex items-center gap-0.5">
            <LiaCommentsSolid className="text-[#704FE6] text-lg mr-2" /> Comment (
            {comments.toString().padStart(2, '0')})
          </span>
        </div>

        <h3 className="text-lg font-semibold text-[#0E2A46] mt-2 grow">{title}</h3>

        <LinkWithArrow
          to={to}
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
  );
};

export default BlogCard;
