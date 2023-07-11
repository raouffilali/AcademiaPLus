import React from "react";
import Slider from "react-slick";
import { Testimonials } from "./Testemonials";

function TestemonialsCard() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div className="justify-center pt-10 space-y-10">
      <p className="text-lg font-medium text-white">Check out these real reviews</p>
      <p className="text-4xl font-medium text-white">Users-love-us Don't take it from us.</p>
      <div className="relative bg-gradient-to-b from-neutral-500 to-neutral-100 rounded-3xl border-[12px] border-gradient-neutral items-center w-1/2 h-full p-6">
        <img src="/assets/qute.png" className="absolute -left-8 -top-10 h-20" />
        <img
              src="/assets/qute-01.png"
              className="absolute top-8 right-2   "
            />

        <Slider {...settings}>
          {Testimonials.map((testimonial, index) => (
            <div key={index}>
              <p className="text-lg text-white font-medium italic mt-8 p-4">{testimonial.testimonial}</p>
              <img
                src="./public/assets/Instructor.png"
                alt={testimonial.name}
                className="h-16 w-16 mx-auto rounded-full mb-2"
              />
              
              <h4 className="text-2xl font-bold">{testimonial.name}</h4>
              <h2 className="text-gray-500 ml-auto">{testimonial.job}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

function SamplePrevArrow(props:any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      Previous
    </div>
  );
}

function SampleNextArrow(props:any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      Next
    </div>
  );
}

export default TestemonialsCard;
