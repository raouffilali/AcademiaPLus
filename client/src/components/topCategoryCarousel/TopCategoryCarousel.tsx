import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

  const renderIndicator = (onClickHandler: any, isSelected: boolean, index: number) => {
    const handleIndicatorClick = () => {
      onClickHandler();
      setCurrentSlide(index);
    };

    const indicatorClassName = isSelected ? "active" : "";

    return (
      <li
        key={index}
        className={`custom-dot ${indicatorClassName}`}
        onClick={handleIndicatorClick}
        onMouseEnter={() => setCurrentSlide(index)}
      />
    );
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: any) => (
      <div className="custom-dots">
        <ul style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          {dots.map((dot: any, index: number) => (
            <li key={index} style={{ listStyleType: "none" }}>
              {renderIndicator(
                () => dot.props.onClick(),
                index === currentSlide,
                index
              )}
            </li>
          ))}
        </ul>
      </div>
    ),
    afterChange: (current: number) => {
      setCurrentSlide(current);
    },
  };

  // Group the categories into chunks of 4 for each slide
  const groupedCategories = Array.from(
    { length: Math.ceil(categories.length / 4) },
    (_, index) => categories.slice(index * 4, index * 4 + 4)
  );

  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <Carousel {...settings}>
        {groupedCategories.map((group, index) => (
          <div key={index} className="p-4">
            <div className="grid grid-cols-4 gap-4">
              {group.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="border-gray-200 border rounded-lg overflow-hidden hover:border-darkBluePLusPal hover:bg-darkBluePLusPal duration-500 hover:text-white"
                  style={{ width: "235px", height: "250px" }}
                >
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-auto"
                      style={{ width: "100%", height: "70%" }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <p className="text-gray-500">
                      Instructors: {category.instructors}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopCategoryCarousel;
