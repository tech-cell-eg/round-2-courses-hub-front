import { ITestimonial } from './../types/types';
import QuoteIcon from '../assets/quote.png';
export default function TestimonialSliderCard({
  testimonial,
  className,
}: {
  testimonial: ITestimonial;
  className?: string;
}) {
  return (
    <div
      className={`relative py-10 ps-6 pe-1 border-2 border-[#17254E] rounded-xl shadow hover:shadow-[10px_10px_5px] hover:translate-[-5px] transition-all duration-300 ease-in-out ${className}`}
    >
      <div className="absolute top-0 left-0 -mt-6 -ms-6">
        <img src={QuoteIcon} alt="quote" className="w-14 h-12 mb-4" />
      </div>
      <p className=" leading-7 text-lg text-[#333931] mb-4 pe-8">
        <span className="text-xl font-bold">"</span>
        {testimonial.text}
        <span className="text-xl font-bold">"</span>
      </p>
      <div className="flex items-center gap-4">
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
