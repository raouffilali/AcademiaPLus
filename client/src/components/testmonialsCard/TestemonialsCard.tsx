import React from "react";
import { Testimonials } from "./Testemonials";

function TestemonialsCard() {
  return (
    <div className=" mt-16 text-gray-800">
      <div className="text-center py-10">
        <h5 className="text-blue-400 mt-2">Testimonials</h5>
        <h1 className="text-4xl w-96 mx-auto leading-normal text-darkBluePLusPal font-bold mb-16">
          Read What Others Saying About Us
        </h1>
        <div className=" snap-mandatory snap-x">
          <div className=" snap-center flex max-w-5xl justify-center mx-auto space-x-8 group">
            {Testimonials.slice(0,3).map((testimonial) => (
              <div
                className="bg-gray-100 h-72 cursor-pointer group-hover:scale[1] hover:!scale-10 duration-500 group-hover:blur-[3px] hover:!blur-none p-2 rounded-xl w-auto"
                key={testimonial.name}
              >
                <img
                  src="./public/assets/Instructor.png"
                  alt={testimonial.name}
                  className="h-20 w-20 mx-auto rounded-full mb-2"
                />
                <h4 className="text-xl font-bold">{testimonial.name}</h4>
                <h2 className="text-sm text-gray-400 ml-auto ">
                  {testimonial.company}
                </h2>
                <p className="text-sm leading-7 my-3 font-light opacity-60">
                  {testimonial.testimonial}
                </p>
              </div>
            ))}
          </div>
        </div>  
      </div>
    </div>
  );
}

export default TestemonialsCard;