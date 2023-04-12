import React from "react";

function EmptyCart() {
  return (
    <div>
      <h1 className=" text-[40px] font-bold text-gray-800	">Shopping Cart</h1>{" "}
      <br />
      <h3 className=" text-[17px]  text-gray-800	 font-[700] leading-2">
        0 course in cart
      </h3>
      {/* Creacting div where courses are added to shopping cart */}
      <div className=" flex flex-col flex-wrap space-y-5 justify-center items-center border-solid border-2 border-grey shadow-md h-full  mt-2 ">
        {/* <Lottie animationData={SearchingCart} loop={true} />; */}
        <img
          src="../../../public/assets/searchingCart2.gif"
          style={{ width: "320px" }}
          alt="Your cart is empty. Keep shopping to find a course!"
        />
        <p className=" font-medium text-gray-800">
          Your cart is empty. Keep shopping to find a course!
        </p>
        <button
          className="middle  w-52 none center mr-3 rounded-lg bg-lightYelloPal py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blueWhitePLusPal transition-all hover:shadow-lg hover:shadow-darkBluePLusPal focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Keep Shopping
        </button>
        <br />
      </div>
    </div>
  );
}

export default EmptyCart;
