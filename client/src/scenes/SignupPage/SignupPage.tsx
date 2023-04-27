import React, {ChangeEvent, useState } from "react";
import "./SignupPage.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
interface FormDataType {
  [key: string]: any;
}
function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/signup", formData);
      // handle success
      console.log(response.data); // 
    } catch (error) {
      // handle error
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center item-center  min-h-screen overflow-hidden  bg-blue-50">
      <div className="flex flex-row  w-[680px] h-[480px]  bg-DarkBluePal shadow-md rounded-2xl relative">
        <div className="rectangle absolute inset-y-0 right-0">
          <p className="  right-[190px] top-[36px] font-Lato text-2xl font-bold leading-normal text-gray-800 absolute ">
            Create Account
          </p>
        </div>
        <p className="font-Lato text-20 font-normal leading-normal  text-gray-400  absolute  right-[130px] top-[70px]">
          You already have an account ?
        </p>
        <p className="max-w-245px font-Lato text-[27px] font-bold leading-normal text-white absolute left-[25px] top-[25px]">
          Vboard Find <br /> the right <br />
          instructor for <br /> you!
        </p>
        <img
          src="./public/assets/signup.png"
          alt="SignUp Image"
          className=" w-[300px] h-[220px] absolute left-[25px] top-[180px]"
        />
        <a
          href="/login"
          className="font-Lato text-[13px] font-semibold leading-normal  text-bluelink underline absolute right-[85px] top-[73px]"
        >
          Log in
        </a>
        <div className="absolute left-[330px] top-[110px] space-y-5 text-[15px]">
          <input
            type="text"
            className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400 "
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type={showPassword ? "text" : "password"}
            className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <VisibilityOffIcon
            color="disabled"
            sx={{ fontSize: 20 }}
            className="absolute right-[109px] top-[146px] cursor-pointer"
            onClick={handleTogglePassword}
          />
          <button className=" bg-DarkBluePal text-white px-12 py-1 hover:bg-darkBluePLusPal   rounded-2xl font-Lato text-[13px] font-semibold  drop-shadow-xl shadow-stone-700 "
          onClick={handleSignup}>

            Create Account
          </button>
          <p className=" text-gray-400 text-sm mt-0 ">
            __________________ OR ____________________
          </p>

          <div className="static flex justify-center space-x-6 mt-5 ml-0 ">
            <button className=" absolute right-[200px]  bg-red-500 text-white py-1 px-4 rounded-full flex items-center  font-Lato text-[10px] ">
              <GoogleIcon />
              <span>Sign up with Google</span>
            </button>
            <button className=" absolute right-[30px] bg-blue-600 text-white px-4 py-1 rounded-full flex items-center  font-Lato text-[10px] ">
              <FacebookIcon />
              <span>Sign up with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
