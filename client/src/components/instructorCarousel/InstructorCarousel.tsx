import React from "react";
import Slider from "react-slick";
import Instructor from "../instructor/Instructor";
import { instructors } from "../instructor/instructors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./InstructorCarousel.css";

function InstructorCarousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    customPaging: function (i: any) {
      return <div className="dot"></div>;
    },
    dotsClass: "slick-dots slick-thumb mt-6",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {instructors.map((instructor, index) => (
        <Instructor
          key={index}
          rating={instructor.rating}
          name={instructor.name}
          job={instructor.job}
          avatarSrc={instructor.avatarSrc}
          studentsEnrolled={instructor.studentsEnrolled}
        />
      ))}
    </Slider>
  );
}

export default InstructorCarousel;
