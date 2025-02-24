import Slider from 'react-slick';
import testimonials from '../api/testimonials';
import TestimonialSliderCard from '../components/TestimonialSliderCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SubTitle from './SubTitle';

export default function TestimonialSlider() {
  const settings = {
    className: 'center gap-4',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <div className="py-20">
      <SubTitle to="/testimonials" className="mx-auto mb-4">
        testimonials
      </SubTitle>

      <h2 className="mx-auto mb-8 text-center sm:text-5xl text-3xl text-[#0E2A46] font-bold xl:max-w-1/2">
        Creating A Community Of Life Long Learners.
      </h2>

      <div className="slider-container">
        <Slider {...settings}>
          {testimonials.slice(0.6).map((testimonial, i) => (
            <TestimonialSliderCard
              key={i}
              testimonial={testimonial}
              className="mx-6"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
