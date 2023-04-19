import { FaTelegram } from "react-icons/fa";

function CheckoutComp() {
  const myRipValue = "0799999002391238";
  const myCCPValue = "00231923128937 cle 11";

  return (
    <>
      <form id="checkout">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
          <div className="md:flex">
            <div className="w-full p-3 px-6 py-10">
              <div className="text-center">
                <span className="text-2xl font-semibold  text-gray-700">
                  Fill the Form below
                </span>
              </div>

              <div className="mt-3 relative">
                <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400">
                  First name
                </span>
                <input
                  type="text"
                  className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="mt-4 relative">
                <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400">
                  Last name
                </span>
                <input
                  type="text"
                  className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="mt-4 relative">
                <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400">
                  Phone Number
                </span>
                <input
                  type="text"
                  className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="mt-4 relative">
                <select
                  className=" h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-blue-600"
                  name="cars"
                  id="cars"
                >
                  <option value="volvo">Golden Pack</option>
                  <option value="saab">Diamond Pack</option>
                </select>
              </div>

              <div className="mt-4 relative">
                <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400">
                  Baridi Mob RIP Number
                </span>
                <input
                  type="text"
                  value={myRipValue}
                  disabled={true}
                  className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="mt-4 relative">
                <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400">
                  CCP Number
                </span>
                <input
                  type="text"
                  value={myCCPValue}
                  disabled={true}
                  className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="mt-2">
                {" "}
                <button className="h-12 w-full bg-blue-800 text-white rounded hover:bg-blue-700">
                  Send Confirmation
                </button>
              </div>
              <div className="  mt-4 text-center">
                <h3 className="text-2xl font-bold text-gray-700  py-2 px-4 bg-white">
                  You don't have BaridiMob or CCP?
                </h3>
                <div className="flex justify-center items-center">
                  <h5 className="text-2xl font-semiBold text-gray-700 mb-4 py-2 px-4 bg-white ">
                    Let's get in touch in{" "}
                    <span className=" text-blue-800">Telegram</span>{" "}
                  </h5>
                  <FaTelegram size={"25px"} color="blue" />
                </div>
              </div>

              <div>
                <button className="h-12 w-full bg-blue-800 text-white rounded hover:bg-blue-700">
                  Go to Telegram
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default CheckoutComp;
