import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselStyle.css";

interface Category {
  name: string;
  image: string;
  instructors: number;
}

interface CarouselProps {
  categories: Category[];
}

const TopCategoryCarousel: React.FC<CarouselProps> = ({ categories }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null); // Create a ref for the Slider component

  const handleDotClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Go to the desired slide using the slickGoTo method
      setCurrentSlide(index);
    }
  };

  const renderIndicator = (
    onClickHandler: any,
    isSelected: boolean,
    index: number
  ) => {
    const handleIndicatorClick = () => {
      onClickHandler();
      handleDotClick(index); // Call the custom handleDotClick function
    };
    const indicatorClassName = isSelected ? "active" : "";

    
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    focusOnSelect:true,
    customPaging: function (i: number) {
      return (
        <div
          className={`dot ${currentSlide === i ? "active" : ""}`}
          onClick={() => handleDotClick(i)} // Call handleDotClick when the dot is clicked
        ></div>
      );
    },
    dotsClass:"slick-dots slick-thumb mt-6",
     responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
   
  };

  return (
    <div className="lg:max-w-screen-xl lg:mx-auto mt-10">
      <Slider ref={sliderRef} {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="px-2">
            <div
              className="border-gray-200 border rounded-lg overflow-hidden hover:border-cyan-900 hover:bg-cyan-900 duration-500 hover:text-white h-full w-full p-2 lg:w-[235px] lg:h-[250px]"
              
            >
              <div className="pt-8 space-y-5 hover:text-white">
                <div className="rounded-full bg-gray-50 w-[90px] h-[90px] overflow-hidden">
                  <img
                    src={category.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-bold text-[20px]">
                  {category.name}
                </p>
                <p className="text-center text-gray-500 text-sm">
                  Instructors: {category.instructors}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopCategoryCarousel;
