  import React, { ChangeEvent, useState } from "react";
  import { Link } from "react-router-dom";
  import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
  import GoogleIcon from "@mui/icons-material/Google";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import axios from "axios";
  import "./auth.css";
  // @ts-ignore
  import {showErrMsg,showSuccessMsg} from "../../utils/notification/Notification.jsx";
  // @ts-ignore
  import {isEmpty,isEmail,isLength, isMatch} from "../../utils/validation/Validation";

  interface UserState {
    name: string;
    email: string;
    password: string;
    cf_password: string;
    err: string;
    success: string;
  }

  const initialState: UserState = {
    name: "",
    email: "",
    password: "",
    cf_password: "",
    err: "",
    success: "",
  };

  function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    // register auth
    const [user, setUser] = useState(initialState);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value, err: "", success: "" });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isEmpty(user.name) || isEmpty(user.password))
        return setUser({
          ...user,
          err: "Please fill in all fields.",
          success: "",
        });

      if (!isEmail(user.email))
        return setUser({
          ...user,
          err: "Invalid email.",
          success: "",
        });

      if (!isLength(user.password, { min: 8 }))
        return setUser({
          ...user,
          err: "Password must be at least 8 characters.",
          success: "",
        });

      if (!isMatch(user.password, user.cf_password))
        return setUser({
          ...user,
          err: "Password did not match.",
          success: "",
        });

      try {
        const res = await axios.post("/user/register", {
          name: user.name,
          email: user.email,
          password: user.password,
        });

        setUser({ ...user, err: "", success: res.data.msg });
      } catch (err: any) {
        err.response.data.msg &&
          setUser({ ...user, err: err.response.data.msg, success: "" });
      }
    };

    return (
      
      
        <div className="login_page flex justify-center item-center  min-h-screen overflow-hidden  bg-blue-50">
          {user.err && showErrMsg(user.err)}
          {user.success && showSuccessMsg(user.success)}
          <form onSubmit={handleSubmit}>
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
            <Link
              to="/Login"
              className="font-Lato text-[13px] font-semibold leading-normal  text-bluelink underline absolute right-[85px] top-[73px]"
            >
              Log in
            </Link>
            <div className="absolute left-[330px] top-[110px] space-y-5 text-[15px]">
              <input
                type="text"
                className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400 "
                placeholder="Full Name"
                name="name"
                id="name"
                value={user.name}
                onChange={handleChangeInput}
              />

              <input
                type="email"
                className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
                placeholder="Email Address"
                name="email"
                value={user.email}
                onChange={handleChangeInput}
              />
              <input
                type={showPassword ? "text" : "password"}
                className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChangeInput}
              />
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
                  placeholder="Confirm password"
                  id="cf_password"
                  value={user.cf_password}
                  name="cf_password"
                  onChange={handleChangeInput}
                />
              </div>
              <VisibilityOffIcon
                color="disabled"
                sx={{ fontSize: 20 }}
                className="absolute right-[109px] top-[146px] cursor-pointer"
                onClick={handleTogglePassword}
              />
              <button
                type="submit"
                className=" bg-DarkBluePal text-white px-12 py-1 hover:bg-darkBluePLusPal   rounded-2xl font-Lato text-[13px] font-semibold  drop-shadow-xl shadow-stone-700 "
              >
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
          </form>
        </div>
      
    );
  }
  export default Register;
