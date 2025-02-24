import { useEffect, useState } from 'react';
import BlogCard from '../../components/BlogCard';
import data from '../../api/blogs.json';
import { IBlogPost } from '../../types/types';

const Blog = ({ show3 = false }) => {
  const [blogs, setBlogs] = useState<IBlogPost[]>([]);

  useEffect(() => {
    setBlogs(data);

    !show3 &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  }, []);

  return (
    <div
      className={`grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 ${
        !show3 ? 'py-20' : ''
      }`}
    >
      {blogs.slice(0, show3 ? 3 : undefined).map((blog, index) => (
        <BlogCard
          key={index}
          image={blog.image}
          date={blog.date}
          comments={blog.comments.count}
          title={blog.title}
          to={`/blog/${blog.id}`}
        />
      ))}
    </div>
  );
};

export default Blog;
