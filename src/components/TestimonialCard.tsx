import { ITestimonial } from './../types/types';
import StarRating from './StarRating';
export default function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: ITestimonial;
  className?: string;
}) {
  return (
    <div
      className={`py-10 ps-6 pe-1 border-2 border-dashed border-[#FC6441] rounded-xl shadow hover:shadow-[10px_10px_5px] hover:translate-[-5px] transition-all duration-300 ease-in-out ${className}`}
    >
      <StarRating rating={testimonial.rating} className="mb-4" />
      <p className=" leading-7 text-lg text-[#333931] mb-4 pe-8">
        <span className="text-xl font-bold">"</span>
        {testimonial.text}
        <span className="text-xl font-bold">"</span>
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-[#FC6441]">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg text-[#0E2A46] font-bold mb-1">
            {testimonial.name}
          </h4>
          <p className="text-sm text-[#704FE6]">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}
