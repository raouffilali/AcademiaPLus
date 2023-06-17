import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaStar } from "react-icons/fa";


const RatingSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const rating = useRef(0);
  const previousScrollY = useRef(0);

  const increaseRating = () => {
    rating.current += 1;
  };

  const renderStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <FaStar key={i} className="ml-4 text-goldPal text-[20px]" />
      );
    }
    return stars;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < previousScrollY.current) {
        increaseRating();
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-gray-900 font-bold text-5xl flex items-start absolute" ref={ref}>
      {inView ? (
        <>
          <CountUp
            end={1000}
            duration={2}
            start={rating.current}
            onEnd={increaseRating}
          />
          <p className="ml-2">+</p>
          <p className="ml-10 mr-2">4.4</p>
          {renderStars(5)}
        </>
      ) : (
        <span>0</span>
      )}
    </div>
  );
};

export default RatingSection;
