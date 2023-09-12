import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { images } from "../../constants";

interface FormData {
  identifier: string;
  password: string;
  rememberMe?: boolean;
}
function SignupPage() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userFormData, setUserFormData] = useState<FormData>({
    identifier: "",
    password: "",
    rememberMe: false,
  });
  // const [password, setPassword] = useState("");
  const [activeInput, setActiveInput] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formErrors, setFormErrors] = useState<FormData>({
    identifier: "",
    password: "",
  });
  const [globalError, setGlobalError] = useState("");

  const handleInputFocus = (inputId: any) => {
    setActiveInput(inputId);
  };

  const handleInputBlur = () => {
    setActiveInput("");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData({
      ...userFormData,
      password: event.target.value,
    });
  };
  const handleEmailPhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserFormData({
      ...userFormData,
      identifier: event.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleCheckboxChange = () => {
    setAgreedToTerms(!agreedToTerms);
  };

  // Submit handler for the form
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Clear previous errors
    setFormErrors({ identifier: "", password: "" });
    setGlobalError("");

    // Validation
    let isValid = true;
    let concatenatedError = "";

    if (!userFormData.identifier && !userFormData.password) {
      concatenatedError = "Email/Phone and password are required.";
      isValid = false;
    } else {
      if (!userFormData.identifier) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          identifier: "Email/Phone is required.",
        }));
        isValid = false;
      }

      if (!userFormData.password) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password is required.",
        }));
        isValid = false;
      }
    }

    if (isValid) {
      // Send the formData to your backend API here and handle the response
      // You can use fetch or any other method to make the API request
      const apiUrl = "http://localhost:5000/api/student/login";
      try {
        const response = await fetch(`${apiUrl}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userFormData),
        });

        if (response.ok) {
          // Handle success, e.g., redirect to a dashboard
          const data = await response.json();
          const authToken = data.token;
          const userIdentifier = data.userIdentifier;
          // Save the token in local storage
          localStorage.setItem("authToken", authToken);
          toast.success(`Login successful! with your ${userIdentifier}`, {
            draggable: true,
            closeButton: true,
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000, // Auto close the toast after 3 seconds
          });
          navigate("/");
        } else if (response.status === 401) {
          // Handle errors here
          console.error("Verify your account");
          toast.error("You must verify your account first", {
            draggable: true,
            closeButton: true,
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 7000, // Auto close the toast after 5 seconds
          });
        } else {
          const data = await response.json();
          if (data.message === "Invalid email/phone number or Password") {
            toast.error("Incorrect Password", {
              draggable: true,
              closeButton: true,
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 7000, // Auto close the toast after 4 seconds
            });
          } else if (data.message === "Email/Phone Number does not exist") {
            toast.error("Incorrect Email", {
              draggable: true,
              closeButton: true,
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 7000, // Auto close the toast after 4 seconds
            });
          } else {
            toast.error("Login failed. Please check your Credentials", {
              draggable: true,
              closeButton: true,
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 7000, // Auto close the toast after 4 seconds
            });
          }

          if (data.error) {
            setGlobalError(data.error);
            // Show an error toast
            navigate("/login");
          }
        }
      } catch (error) {
        console.error("Error:", error);
        setGlobalError("An error occurred while processing your request.");
      }
    } else {
      setGlobalError(concatenatedError); // Set the concatenated error message
    }
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
        <form onSubmit={handleSubmit}>
          <div className="p-20">
            <div className="flex space-x-4 lg:space-x-48">
              <img className="h-8" src="assets/logo.svg" alt="" />
              <Link to="/">
                <p className="font-light text-sm underline">Back to Home</p>
              </Link>
            </div>
            <p className="mt-12 text-3xl font-medium">Login</p>
            <div className="space-y-4 mt-8">
              <div>
                <label htmlFor="email" className="text-gray-500 mb-2 block">
                  Email/Phone
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className={`rounded-md px-4 py-3 w-full border ${
                    activeInput === "email" ? "border-redPal" : "border-red-100"
                  } ::placeholder text-sm focus:border-redPal focus:outline-none`}
                  value={userFormData.identifier}
                  onChange={handleEmailPhoneChange}
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
                    value={userFormData.password}
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
                <Link to="/forgot-password">
                  <p className="text-sm text-blueLink mt-3 font-medium hover:text-redPal">
                    Forgot Password?
                  </p>
                </Link>
              </div>
              <div className="flex items-center  pt-2 pb-4 space-x-2">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  className="form-checkbox h-4 w-4  accent-red-500 checked:bg-red-500 focus:ring-red-500"
                  checked={agreedToTerms}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="termsCheckbox"
                  className="text-sm text-gray-500 "
                >
                  Remember me{" "}
                </label>
              </div>
              <div>
                {formErrors.identifier && (
                  <div className="text-red-500 bg-red-100 border border-red-500 p-2 mb-4 rounded-lg">
                    {formErrors.identifier}
                  </div>
                )}
                {formErrors.password && (
                  <div className="text-red-500 bg-red-100 border border-red-500 p-2 mb-4 rounded-lg">
                    {formErrors.password}
                  </div>
                )}
                {globalError && (
                  <div className="text-red-500 bg-red-100 border border-red-500 p-2 mb-4 rounded-lg">
                    {globalError}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className=" font-medium w-full p-3 bg-pechelight hover:bg-peche  text-white  rounded-md"
              >
                Login
              </button>
            </div>
          </div>
        </form>

        <div className=" bg-amber-50 text-sm p-10 text-gray-700 text-center w-full">
          <span>Or sign in with</span>
          <div className="flex justify-center mt-6 items-center ">
            <img
              src="assets/socialMedia/google.svg"
              alt="Google Icon"
              className="h-7 w-7"
            />
            <Link to="" className=" hover:text-gray-800 text-black ">
              Sign In using Google
            </Link>
            <div className="h-8 w-px bg-gray-800"></div> {/* Divider */}
            <img
              src="assets/socialMedia/facebook.svg"
              alt="Facebook Icon"
              className="h-8 w-8"
            />
            <Link to="" className="text-black hover-gray-800">
              Sign In using Facebook
            </Link>
          </div>
          <p className="mt-4">
            New user?{" "}
            <Link to="/Signup" className="text-red-500 ">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

// import React, { useState } from "react";
// import "./LoginPage.css";
// import { VisibilityOff, Google, Facebook } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
// function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleToggleRememberMe = () => {
//     setRememberMe(!rememberMe);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     console.log(email, password);
//     fetch("http://localhost:5174/login-user", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//       mode: "cors", // added to enable CORS
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "userRegister");
//         if (data.status === "ok") {
//           alert("login successful");
//           // window.localStorage.setItem("token", data.data);
//           // window.localStorage.setItem("loggedIn", true.toString());

//           navigate("/landingPage");
//         }
//       });
//   };

//   return (
//     <div className="flex justify-center item-center  min-h-screen overflow-hidden mt-2  bg-blue-50">
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-row  w-[680px] h-[480px]  bg-DarkBluePal shadow-md rounded-2xl relative">
//           <div className="rectangle absolute inset-y-0 right-0">
//             <p className="  right-[280px] top-[36px] font-Lato text-2xl font-bold leading-normal text-gray-800 absolute ">
//               Log in
//             </p>
//           </div>
//           <p className="font-Lato text-20 font-normal leading-normal  text-gray-400  absolute  right-[178px] top-[70px]">
//             Don't have an account ?
//           </p>
//           <p className="max-w-245px font-Lato text-[27px] font-bold leading-normal text-white absolute left-[25px] top-[25px]">
//             Welcome Back!
//           </p>
//           <img
//             src="./public/assets/login.png"
//             alt="Login Image"
//             className=" w-[350px] h-[350px] absolute  -left-[40px] top-[70px]"
//           />
//           <Link
//             to="/SignupPage"
//             className="font-Lato text-[13px] font-semibold leading-normal  text-bluelink underline absolute right-[130px] top-[73px]"
//           >
//             Sign up
//           </Link>
//           <div className="absolute left-[330px] top-[110px] space-y-5 text-[15px] mt-12">
//             <input
//               type="email"
//               className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
//               placeholder="Email Address"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type={showPassword ? "text" : "password"}
//               className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 checked={rememberMe}
//                 onChange={handleToggleRememberMe}
//                 className="mr-2"
//               />
//               <label htmlFor="rememberMe" className=" text-gray-400">
//                 Remember me
//               </label>
//             </div>
//             <div className="flex items-center space-x-3">
//               <button
//                 type="submit"
//                 className=" bg-DarkBluePal text-white px-12 py-1 hover:bg-darkBluePLusPal   rounded-2xl font-Lato text-[13px] font-semibold  drop-shadow-xl shadow-stone-700 "
//               >
//                 Log in
//               </button>
//               <Link
//                 to="/forgotPassword"
//                 className="font-Lato text-[13px] font-semibold leading-normal text-blueLink  px-5 py-2 rounded-md  hover:bg-gray-100 transition-colors"
//               >
//                 Forgot password?
//               </Link>
//             </div>
//             <p className=" text-gray-400 text-sm mt-0 ">
//               __________________ OR ____________________
//             </p>

//             <div className="static flex justify-center space-x-6 mt-5 ml-0 ">
//               <button className=" absolute right-[200px]  bg-red-500 text-white py-1 px-4 rounded-full flex items-center  font-Lato text-[10px] ">
//                 <GoogleIcon />
//                 <span>Sign up with Google</span>
//               </button>
//               <button className=" absolute right-[30px] bg-blue-600 text-white px-4 py-1 rounded-full flex items-center  font-Lato text-[10px] ">
//                 <FacebookIcon />
//                 <span>Sign up with Facebook</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
