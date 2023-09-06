import React from "react";
import { useState } from "react";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { addToCart } from "../../pages/cartPage/cartItems";
type CourseCardProps = {
  videoUrl: string;
  discount?: string;
  price: number;
  onAddToCart: () => void;
  onAddToWishlist: () => void; // Add a function to handle adding to wishlist

};

const EnrollCourse: React.FC<CourseCardProps> = ({
  videoUrl,
  discount,
  price,
  onAddToCart,
  onAddToWishlist,
}) => {
  const [isWishlist, setIsWishlist] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlist(!isWishlist);
    onAddToWishlist(); // Call the function to add/remove from wishlist
  };
  const formattedPrice =
    typeof price === "number" && price !== 0 ? `DA${price.toFixed(2)}` : "FREE";
  const priceColor = price === 0 ? " text-green-500" : "text-red-500";
  // Determine the discount text based on the price value
  const discountText = price === 0 ? "100% Off" : "";
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
          <p className={`font-bold ${priceColor}flex-1 text-2xl`}>
            {formattedPrice}
          </p>
          {discountText && (
            <span className="flex-1 text-gray-500  px-2 rounded-md text-xs">
              {discountText}
            </span>
          )}
        </div>
        <div className="flex space-x-6 ">
          <button  onClick={onAddToCart}  className="py-1  px-3 border border-red-400 rounded-full text-red-400 text-[13px] hover:bg-red-400 hover:text-white" >
          <FiHeart
              className={`float-left hover:text-white ${
                isWishlist ? "text-red-500" : ""
              }`}
              color="red-400"
              size={16}
              onClick={handleWishlistClick}
            />
            {isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
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
        <Link to="/checkout">
        <button className=" bg-green-600 hover:bg-green-700 text-white px-28  py-3 rounded-full text-[13px]">
        
          Enroll Now
        </button></Link>
        
      </div>
    </div>
  );
};

export default EnrollCourse;
