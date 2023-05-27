import React from "react";
import { useState } from "react";
import { FiHeart,FiShare2 } from 'react-icons/fi';
type CourseCardProps = {
  videoUrl: string;
  discount?: string;
  price: number;
};
const EnrollCourse: React.FC<CourseCardProps> = ({
  videoUrl,
  discount,
  price,
}) => {
  const [isWishlist, setIsWishlist] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlist(!isWishlist);
  };
  const formattedPrice = price === 0 ? 'FREE' : `$${price.toFixed(2)}`;
  return (
    <div className=" bg-white rounded-lg w-[320px] h-[350px] border border-neutral-200 ">
      <div className="flex flex-col space-y-3 ">
        <iframe
          src={videoUrl}
          className=" mt-5  w-[280px] h-[160px] border border-neutral-200"
          style={{
            backgroundImage: "url('/assets/coursethumbnail.jpg')",
            backgroundSize: "cover",
          }}
        >
          {" "}
        </iframe>
        <div className="flex space-x-36 mt-5">
        <p className="font-bold text-green-600 text-2xl ">{formattedPrice}</p>
        {discount && (
          <span className=" text-gray-500  px-2 rounded-md text-xs">
            {discount}
          </span>
        )}
       
        </div>
        <div className="flex space-x-6 ">
          <button className="p-2 w-32 border border-red-400 rounded-full text-red-400 text-[13px] hover:bg-red-400 hover:text-white"
          onClick={handleWishlistClick}>
          <FiHeart className="float-left hover:text-white  " color="red-400" size={16} />
            Add to Wishlist
          </button>
          <button className="p-2 w-32 border border-red-400 rounded-full text-red-400 text-[13px]  hover:bg-red-400 hover:text-white">
            {" "}
            <FiShare2 className="float-left  hover:text-white  " color="red-400" size={16}  />
            Share
          </button>
        </div>
        <button className=" bg-green-600 hover:bg-green-700 text-white  mx-4  py-3 rounded-full text-[13px]">
          Enroll Now
        </button>
        
      </div>
      
    </div>
  );
}

export default EnrollCourse;
