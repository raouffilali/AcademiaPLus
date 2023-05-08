import React, { useState } from "react";
import "./LoginPage.css";
import { VisibilityOff, Google, Facebook } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5174/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      mode: "cors", // added to enable CORS
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          // window.localStorage.setItem("token", data.data);
          // window.localStorage.setItem("loggedIn", true.toString());

          navigate("/landingPage");
        }
      });
  };

  return (
    <div className="flex justify-center item-center  min-h-screen overflow-hidden mt-2  bg-blue-50">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row  w-[680px] h-[480px]  bg-DarkBluePal shadow-md rounded-2xl relative">
          <div className="rectangle absolute inset-y-0 right-0">
            <p className="  right-[280px] top-[36px] font-Lato text-2xl font-bold leading-normal text-gray-800 absolute ">
              Log in
            </p>
          </div>
          <p className="font-Lato text-20 font-normal leading-normal  text-gray-400  absolute  right-[178px] top-[70px]">
            Don't have an account ?
          </p>
          <p className="max-w-245px font-Lato text-[27px] font-bold leading-normal text-white absolute left-[25px] top-[25px]">
            Welcome Back!
          </p>
          <img
            src="./public/assets/login.png"
            alt="Login Image"
            className=" w-[350px] h-[350px] absolute  -left-[40px] top-[70px]"
          />
         <Link to="/" className="font-Lato text-[13px] font-semibold leading-normal  text-bluelink underline absolute right-[130px] top-[73px]">
            Sign up
          </Link>
          <div className="absolute left-[330px] top-[110px] space-y-5 text-[15px] mt-12">
            <input
              type="email"
              className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type={showPassword ? "text" : "password"}
              className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleToggleRememberMe}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className=" text-gray-400">
                Remember me
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <button
               type="submit" className=" bg-DarkBluePal text-white px-12 py-1 hover:bg-darkBluePLusPal   rounded-2xl font-Lato text-[13px] font-semibold  drop-shadow-xl shadow-stone-700 "
              >
                Log in
              </button>
              <Link to="/forgotPassword" className="font-Lato text-[13px] font-semibold leading-normal text-blueLink  px-5 py-2 rounded-md  hover:bg-gray-100 transition-colors">
                Forgot password?
              </Link>
            </div>
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

export default LoginPage;
