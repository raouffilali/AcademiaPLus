import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function ComingSoon() {
  const [email, setEmail] = React.useState("");
  const [days, setDays] = React.useState(201);
  const [hours, setHours] = React.useState(11);
  const [minutes, setMinutes] = React.useState(7);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle the form submission here
    console.log(email);
    // Reset the email field
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-r from-amber-50 to-blue-50 min-h-screen">
      <div className="p-5 flex flex-col space-y-4 items-center">
        <img src="assets/logo.svg" alt="" className="h-8" />
        <p className="text-2xl">WE ARE COMING SOON!!</p>
        <p>Stay tuned for something amazing</p>
        <div className="flex flex-row space-x-4">
          <div className="py-2 px-4 space-y-1 text-center text-white bg-neutral-400 h-24 w-24 rounded-xl">
            <p className="font-medium text-2xl">{days}</p>
            <hr />
            <p className="text-lg font-light">Days</p>
          </div>
          <div className="py-2 px-4 space-y-1 text-center text-white bg-neutral-400 h-24 w-24 rounded-xl">
            <p className="font-medium text-2xl">{hours}</p>
            <hr />
            <p className="text-lg font-light">Hrs</p>
          </div>
          <div className="py-2 px-4 space-y-1 text-center text-white bg-neutral-400 h-24 w-24 rounded-xl">
            <p className="font-medium text-2xl">{minutes}</p>
            <hr />
            <p className="text-lg font-light">mins</p>
          </div>
        </div>
        <img src="assets/come-soon.png" alt="" className="h-36" />
        <p className="text-2xl">
          Subscribe to our mailing list to get the latest updates
        </p>
        <form className="grid grid-cols-6" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="col-span-5 py-2 px-2 border text-sm border-gray-300 rounded-l-md focus:outline-none focus:border-gray-300"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button
            type="submit"
            className="col-span-1 py-2 px-4 bg-redPal hover:bg-red-500 text-sm text-white rounded-r-md"
          >
            Subscribe
          </button>
        </form>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-redPal"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-redPal"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-redPal"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-redPal"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
