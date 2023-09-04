import React from "react";
import { useState } from "react";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { addToCart } from "../../pages/cartPage/cartItems";
type CourseCardProps = {
  videoUrl: string;
  discount?: string;
  price: number;
  onAddToCart: () => void;
};
const EnrollCourse: React.FC<CourseCardProps> = ({
  videoUrl,
  discount,
  price,
  onAddToCart,
}) => {
  const [isWishlist, setIsWishlist] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlist(!isWishlist);
  };
  const formattedPrice =
    typeof price === "number" && price !== 0 ? `$${price.toFixed(2)}` : "FREE";

  return (
    <div className=" bg-white rounded-lg p-2 py-5  border border-neutral-200 ">
      <div className="flex flex-col space-y-3 ">
        <iframe
          src={videoUrl}
          className=" border w-full border-neutral-200"
          style={{
            backgroundImage: "url('/assets/coursethumbnail.jpg')",
            backgroundSize: "cover",
          }}
        >
          {" "}
        </iframe>
        <div className="flex  space-x-36 mt-5">
          <p className="font-bold flex-1 text-green-600 text-2xl ">
            {formattedPrice}
          </p>
          {discount && (
            <span className="flex-1 text-gray-500  px-2 rounded-md text-xs">
              {discount}
            </span>
          )}
        </div>
        <div className="flex space-x-6 ">
          <button className="py-1  px-3 border border-red-400 rounded-full text-red-400 text-[13px] hover:bg-red-400 hover:text-white">
            <FiHeart
              className="float-left hover:text-white  "
              color="red-400"
              size={16}
            />
            Add to Cart
          </button>
          <button className="py-1   px-3 border border-red-400 rounded-full text-red-400 text-[13px]  hover:bg-red-400 hover:text-white">
            {" "}
            <FiShare2
              className="float-left  hover:text-white  "
              color="red-400"
              size={16}
            />
            Share
          </button>
        </div>
        <button className=" bg-green-600 hover:bg-green-700 text-white  mx-4  py-3 rounded-full text-[13px]">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default EnrollCourse;
