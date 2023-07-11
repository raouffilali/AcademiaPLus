// SponsorsCarousel.tsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Sponsor {
  id: number;
  name: string;
  imageUrl: string;
}

interface SponsorsCarouselProps {
  sponsors: Sponsor[];
}

const SponsorsCarousel: React.FC<SponsorsCarouselProps> = ({ sponsors }) => {
  const settings = {
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
    <div>
      <Slider {...settings}>
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="p-4 mt-4">
            <img src={sponsor.imageUrl} alt={sponsor.name} className="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SponsorsCarousel;
