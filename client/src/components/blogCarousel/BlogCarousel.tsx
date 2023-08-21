import React from "react";
import Slider from "react-slick";
import { blogData } from "./blogData";
import "./BlogCarousel.css";
import { Link } from "react-router-dom";

// Import CSS styles for React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import FontAwesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

// Define the interface for blog card data
interface BlogCardData {
  id?: string; // Make the id property optional
  thumbnail: string;
  name: string;
  category: string;
  datePosted: string;
}

// Define the props interface for BlogCarousel component
interface BlogCarouselProps {
  blogs: BlogCardData[];
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({ blogs }) => {
  // React Slick settings
  const settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 2,
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
    <div className="">
      <Slider {...settings}>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <div className="bg-gray-50 w-60 rounded-xl border border-gray-200 shadow-sm items-start text-center">
                <img
                  className="mx-auto h-56 rounded-t-xl w-full"
                  src={blog.thumbnail}
                  alt={blog.name}
                />
                <div className="space-y-2 p-6">
                  <div className="mb-1 text-xl font-medium leading-tight">
                    {blog.name}
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {blog.category}
                  </p>
                  <div className="text-redPal text-sm">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="mr-2 inline-block align-middle"
                    />
                    <span className="inline-block align-middle">
                      {blog.datePosted}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCarousel;
