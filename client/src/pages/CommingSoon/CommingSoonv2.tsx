import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { images } from "../../../public/constants";
import CountdownTimer from "../../components/Error/CountdownTimer";
import NavBarV2 from "../../components/navBar/NavBarV2";
import { MainLayout } from "../../constants";

const CommingSoonv2 = () => {
  const targetDate = new Date("2023-12-31T23:59:59").getTime();
  // Set the props to simulate a logged-in regular user
  const isAuthenticated = true; // Set to true for a logged-in user
  const isTeacher = false; // Set to false for a regular user

  return (
    <>
      {/* <header className="container mx-auto px-6 py-8 flex flex-wrap justify-between items-center gap-y-4">
        <div className="flex items-center">
          <img src={images.Logo} alt="app Logo" className="w-1/2 h-auto" />
        </div>
        <div className="flex items-center">
          <div className="relative">
            <FiSearch className="text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 pl-10 pr-4 py-2 rounded-md"
          />
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Home
          </Link>
        </div>
      </header> */}
      <NavBarV2   isAuthenticated={isAuthenticated}
        isTeacher={isTeacher}
        handleLogout={() => {
          // Define a mock logout function if needed
          console.log("User logged out"); // Display a message for testing
        }} />
      <section className="container mx-auto flex flex-col lg:flex-row">
        <main className="flex flex-col gap-y-4 items-center lg:items-start justify-center mx-4 lg:mx-10">
          <div>
            <h1 className="font-bold text-[#1e293b] text-3xl lg:text-5xl leading-tight mb-2 tracking-tight text-center lg:text-left">
              We're coming soon
            </h1>
            <p className="font-semibold text-gray-400 text-center lg:text-left">
              Our website is under construction. We'll be here soon with our new
              awesome site. Subscribe to be notified.
            </p>
          </div>
        </main>
        <div className="mt-8 lg:mt-12 mx-4 lg:mx-[80px] flex flex-col items-center">
          <h1 className="text-2xl lg:text-3xl">Countdown Timer</h1>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </section>
    </>
  );
};

export default CommingSoonv2;
