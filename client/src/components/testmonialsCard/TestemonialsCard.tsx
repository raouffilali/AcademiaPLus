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
      <p className="lg:text-lg text-sm font-medium text-white">Check out these real reviews</p>
      <p className="text-3xl lg:text-4xl font-medium text-white mx-[2px]">Users-love-us Don't take it from us.</p>
      <div className="relative bg-gradient-to-b from-neutral-500 to-neutral-100 rounded-3xl border-[12px] border-gradient-neutral items-center lg:w-1/2 w-5/6 h-full  lg:p-6">
        <img src="/assets/qute.png" className="absolute lg:-left-8 lg:-top-10 -top-4 lg:h-20 h-8" />
        <img
              src="/assets/qute-01.png"
              className="absolute top-8 right-2 h-4 lg:h-10   "
            />

        <Slider {...settings}>
          {Testimonials.map((testimonial, index) => (
            <div key={index}>
              <p className="lg:text-lg text-sm text-white font-medium italic lg:mt-8 p-4">{testimonial.testimonial}</p>
              <img
                src={testimonial.imgURl}
                alt={testimonial.name}
                className="lg:h-16 lg:w-16 h-12 w-12 mx-auto rounded-full mb-2"
              />
              
              <h4 className="lg:text-2xl text-lg font-bold">{testimonial.name}</h4>
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
