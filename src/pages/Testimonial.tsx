import { useEffect } from 'react';
import testimonials from '../api/testimonials';
import TestimonialCard from '../components/TestimonialCard';

const Testimonial = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, i) => (
        <TestimonialCard key={i} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default Testimonial;
