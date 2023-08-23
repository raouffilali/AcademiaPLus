// import React, {ChangeEvent, useState } from "react";
// import "./SignupPage.css";
// import { Link } from "react-router-dom";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import axios from "axios";

// function SignupPage() {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("");
//   const [secretKey, setSecretKey] = useState("");
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     // if (userType == "Admin" && secretKey != "AdarshT") {
//     //   e.preventDefault();
//     //   alert("Invalid Admin");
//     // } else {
//       e.preventDefault();
//       console.log(fname, lname, email, password);
//       fetch("http://localhost:5174/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//         },
//         body: JSON.stringify({
//           fname,
//           email,
//           lname,
//           password,
//           userType,
//         }),
//         mode: 'cors', // added to enable CORS
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data, "userRegister");
//           if (data.status == "ok") {
//             alert("Registration Successful");
//           } else {
//             alert("Something went wrong");
//           }
//         });
//     // }
//   };

//   return (
//     <div className="flex justify-center item-center  min-h-screen overflow-hidden  bg-blue-50">
//       <form onSubmit={handleSubmit}>
//       <div className="flex flex-row  w-[680px] h-[480px]  bg-DarkBluePal shadow-md rounded-2xl relative">
//         <div className="rectangle absolute inset-y-0 right-0">
//           <p className="  right-[190px] top-[36px] font-Lato text-2xl font-bold leading-normal text-gray-800 absolute ">
//             Create Account
//           </p>
//         </div>
//         <p className="font-Lato text-20 font-normal leading-normal  text-gray-400  absolute  right-[130px] top-[70px]">
//           You already have an account ?
//         </p>
//         <p className="max-w-245px font-Lato text-[27px] font-bold leading-normal text-white absolute left-[25px] top-[25px]">
//           Vboard Find <br /> the right <br />
//           instructor for <br /> you!
//         </p>
//         <img
//           src="./public/assets/signup.png"
//           alt="SignUp Image"
//           className=" w-[300px] h-[220px] absolute left-[25px] top-[180px]"
//         />
//         <Link to="/loginPage"  className="font-Lato text-[13px] font-semibold leading-normal  text-bluelink underline absolute right-[85px] top-[73px]">

//           Log in
//         </Link>
//         <div className="absolute left-[330px] top-[110px] space-y-5 text-[15px]">
//           <input
//             type="text"
//             className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400 "
//             placeholder="First Name"
//             name="firstName"
//             value={fname}
//             onChange={(e) => setFname(e.target.value)}
//           />
//           <input
//             type="text"
//             className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
//             placeholder="Last Name"
//             name="lastName"
//             value={lname}
//             onChange={(e) => setLname(e.target.value)}
//           />
//           <input
//             type="email"
//             className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
//             placeholder="Email Address"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type={showPassword ? "text" : "password"}
//             className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <VisibilityOffIcon
//             color="disabled"
//             sx={{ fontSize: 20 }}
//             className="absolute right-[109px] top-[146px] cursor-pointer"
//             onClick={handleTogglePassword}
//           />
//           <button type="submit" className=" bg-DarkBluePal text-white px-12 py-1 hover:bg-darkBluePLusPal   rounded-2xl font-Lato text-[13px] font-semibold  drop-shadow-xl shadow-stone-700 "
//           >

//             Create Account
//           </button>
//           <p className=" text-gray-400 text-sm mt-0 ">
//             __________________ OR ____________________
//           </p>

//           <div className="static flex justify-center space-x-6 mt-5 ml-0 ">
//             <button className=" absolute right-[200px]  bg-red-500 text-white py-1 px-4 rounded-full flex items-center  font-Lato text-[10px] ">
//               <GoogleIcon />
//               <span>Sign up with Google</span>
//             </button>
//             <button className=" absolute right-[30px] bg-blue-600 text-white px-4 py-1 rounded-full flex items-center  font-Lato text-[10px] ">
//               <FacebookIcon />
//               <span>Sign up with Facebook</span>
//             </button>
//           </div>
//         </div>
//       </div>
//       </form>
//     </div>
//   );
// }
// export default SignupPage;
import React, { useState } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function SignupPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [activeInput, setActiveInput] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
 
  const handleInputFocus = (inputId:any) => {
    setActiveInput(inputId);
  };

  const handleInputBlur = () => {
    setActiveInput("");
  };

  const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
  };

  const checkPasswordStrength = () => {
    let strength = 0;
    let message = "";

    if (password.length < 8) {
      message = "Weak. Must contain at least 8 characters";
    } else if (/[A-Z]/.test(password) && /[0-9]/.test(password)) {
      strength += 1;
    } else {
      message = "Average. Must contain at least 1 uppercase letter and number";
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength += 1;
    } else if (message === "") {
      message = "Almost. Must contain special symbol";
    }

    if (strength === 2) {
      message = "Awesome! You have a secure password.";
    }

    return message;
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const getPasswordStrengthColor = () => {
    if (password.length === 0) {
      return "text-gray-500";
    } else if (password.length < 8) {
      return "text-red-500";
    } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      return "text-orange-500";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "text-blue-500";
    } else {
      return "text-green-500";
    }
  };

  const handleCheckboxChange = () => {
    setAgreedToTerms(!agreedToTerms);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* leftSite */}
      <div
        className="lg:w-1/2 p-20 h-screen"
        style={{ backgroundImage: "url(assets/bg/login-bg.png)" }}
      >
        <img src="assets/login-img.png" alt="" className="h-1/2 lg:mt-12" />
        <h1 className="text-center  mt-6 text-2xl font-medium text-gray-900 ">
          Welcome To <br /> Academia Plus Platform!
        </h1>
        <p className="mt-4 text-sm font-light lg:text-left">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      {/* rightSide */}
      <div className="lg:w-1/2 h-screen lg:overflow-y-scroll  ">
        <div className="p-20">
          <div className="flex space-x-4 lg:space-x-48">
            <img className="h-8" src="assets/logo.svg" alt="" />
            <Link to="/">
              <p className="font-light text-sm underline">Back to Home</p>
            </Link>
          </div>
          <p className="mt-12 text-3xl font-medium">Sign up</p>
          <div className="space-y-4 mt-8">
            <div>
              <label htmlFor="fullName" className="text-gray-500 mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className={`rounded-md px-4 py-3 w-full border ${
                  activeInput === "fullName"
                    ? "border-redPal"
                    : "border-red-100"
                } ::placeholder text-sm focus:border-redPal focus:outline-none`}
                onFocus={() => handleInputFocus("fullName")}
                onBlur={handleInputBlur}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-500 mb-2 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={`rounded-md px-4 py-3 w-full border ${
                  activeInput === "email" ? "border-redPal" : "border-red-100"
                } ::placeholder text-sm focus:border-redPal focus:outline-none`}
                onFocus={() => handleInputFocus("email")}
                onBlur={handleInputBlur}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-500 mb-2 block">
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className={`rounded-md px-4 py-3 w-full border ${
                    activeInput === "password"
                      ? "border-redPal"
                      : "border-red-100"
                  } ::placeholder text-sm focus:border-redPal focus:outline-none`}
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => handleInputFocus("password")}
                  onBlur={handleInputBlur}
                />
                <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                    size="sm"
                    className={`${
                      passwordVisible ? "text-redPal" : "text-gray-500"
                    }`}
                  />
                </div>
              </div>
              <div className="flex space-x-2 mt-4">
                <div
                  className={`w-1/4 h-1 rounded-md ${
                    password.length === 0
                      ? "bg-gray-300"
                      : password.length < 8
                      ? "bg-red-500"
                      : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`w-1/4 h-1 rounded-md bg-gray-300 ${
                    (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) &&
                    password.length >= 8
                      ? "bg-orange-500"
                      : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`w-1/4 h-1 rounded-md bg-gray-300 ${
                    !/[!@#$%^&*(),.?":{}|<>]/.test(password) &&
                    /[A-Z]/.test(password) &&
                    /[0-9]/.test(password) &&
                    password.length >= 8
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`w-1/4 h-1 rounded-md bg-gray-300 ${
                    /[A-Z]/.test(password) &&
                    /[0-9]/.test(password) &&
                    /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
                    password.length >= 8
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                ></div>
              </div>
              {password && (
                <p
                  className={`text-sm mt-2 ${getPasswordStrengthColor()} font-medium`}
                >
                  {checkPasswordStrength()}
                </p>
              )}
            </div>
            <div className="flex items-center  pt-8 pb-4 space-x-2">
              <input
                type="checkbox"
                id="termsCheckbox"
                className="form-checkbox h-4 w-4  accent-red-500 checked:bg-red-500 focus:ring-red-500"
                checked={agreedToTerms}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="termsCheckbox" className="text-sm  ">
                I agree to the{" "}
                <Link className="text-red-500" to="/TermsofService">
                  {" "}
                  Terms of Service{" "}
                </Link>
                and{" "}
                <Link to="/PrivacyPolicy" className="text-red-500">
                  Privacy Policy
                </Link>{" "}
                .
              </label>
            </div>

            <button className=" font-medium w-full p-3 bg-pechelight hover:bg-peche  text-white  rounded-md">
              Create Account
            </button>
          </div>
        </div>

        <div className=" bg-amber-50 text-sm p-10 text-gray-700 text-center w-full">
          <span>Or sign up with</span>
          <div className="flex justify-center mt-6 items-center ">
            <img
              src="assets/socialMedia/google.svg"
              alt="Google Icon"
              className="h-7 w-7"
            />
            <Link to="" className=" hover:text-gray-800 text-black ">
              Sign Up using Google
            </Link>
            <div className="h-8 w-px bg-gray-800"></div> {/* Divider */}
            <img
              src="assets/socialMedia/facebook.svg"
              alt="Facebook Icon"
              className="h-8 w-8"
            />
            <Link to="" className="text-black hover-gray-800">
              Sign Up using Facebook
            </Link>
          </div>
          <p className="mt-4">
            Already have an account?{" "}
            <Link to="/loginPage" className="text-red-500 ">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

