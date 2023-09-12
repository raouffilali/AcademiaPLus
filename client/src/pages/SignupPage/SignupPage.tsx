import React, { useState } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
// Define the type of formData
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  agreedToTerms: boolean;
}

function SignupPage() {
  // const [agreedToTerms, setAgreedToTerms] = useState(false);
  // const [password, setPassword] = useState("");
  const [errorMessagePhone, setErrorMessagePhone] = useState<string | null>(
    null
  );
  const [errorMessageEmail, setErrorMessageEmail] = useState<string | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [activeInput, setActiveInput] = useState("");
  const [userFormData, setUserFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    agreedToTerms: false,
  });

  const validateFormData = () => {
    // Clear any previous error messages
    setErrorMessage(null);

    let hasError = false;

    if (userFormData.firstName.trim() === "") {
      setErrorMessage("Please enter your First Name.");
      hasError = true;
    }

    if (userFormData.lastName.trim() === "") {
      setErrorMessage("Please enter your Last Name.");
      hasError = true;
    }

    if (userFormData.email.trim() === "") {
      setErrorMessage("Please enter your Email.");
      hasError = true;
    }

    if (userFormData.phone.trim() === "") {
      setErrorMessage("Please enter your Phone Number.");
      hasError = true;
    }

    if (userFormData.password.trim() === "") {
      setErrorMessage("Please enter your Password.");
      hasError = true;
    }

    if (hasError) {
      return false;
    }
    setErrorMessage("");

    return true;
  };

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

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserFormData({
      ...userFormData,
      firstName: event.target.value,
    });
  };
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData({
      ...userFormData,
      lastName: event.target.value,
    });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;

    // Validation
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!email) {
      // If the email is empty, set the error message
      setErrorMessageEmail("Email must not be empty");
    } else if (!regex.test(email)) {
      // If the email is invalid, set the error message
      setErrorMessageEmail("Invalid email");
    } else {
      // If the email is valid, clear the error message
      setErrorMessageEmail("");
    }

    setUserFormData({
      ...userFormData,
      email: email,
    });
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Extract the phone number from the input
    const phoneNumber = event.target.value;

    // Validation
    const regex = /^(07|05|06)[0-9]{8}$/;
    if (!phoneNumber) {
      // If the phone number is empty, set the error message
      setErrorMessagePhone("Phone number must not be empty");
    } else if (!regex.test(phoneNumber)) {
      // If the phone number is invalid, set the error message
      setErrorMessagePhone(
        "Invalid phone number, must start with 07, 05, or 06"
      );
    } else {
      // If the phone number is valid, clear the error message
      setErrorMessagePhone("");
    }

    // Update the userFormData regardless of validity
    setUserFormData({
      ...userFormData,
      phone: phoneNumber,
    });
  };

  const checkPasswordStrength = () => {
    let strength = 0;
    let message = "";

    if (userFormData.password.length < 8) {
      message = "Weak. Must contain at least 8 characters";
    } else if (
      /[A-Z]/.test(userFormData.password) &&
      /[0-9]/.test(userFormData.password)
    ) {
      strength += 1;
    } else {
      message = "Average. Must contain at least 1 uppercase letter and number";
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(userFormData.password)) {
      strength += 1;
    } else if (message === "") {
      message = "Almost. Must contain special symbol";
    }

    if (strength === 2) {
      message = "Awesome! You have a secure password.";
    }

    return message;
  };

  // test that phone number must be 10 numbers and start with 07, 05 or 06

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const getPasswordStrengthColor = () => {
    const passwordLength = userFormData.password.length;
    if (passwordLength === 0) {
      return "text-gray-500";
    } else if (passwordLength < 8) {
      return "text-red-500";
    } else if (
      !/[A-Z]/.test(userFormData.password) ||
      !/[0-9]/.test(userFormData.password)
    ) {
      return "text-orange-500";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(userFormData.password)) {
      return "text-blue-500";
    } else {
      return "text-green-500";
    }
  };

  const handleCheckboxChange = () => {
    setUserFormData({
      ...userFormData,
      agreedToTerms: !userFormData.agreedToTerms,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate the form data
    if (!validateFormData()) {
      return; // Prevent form submission if validation fails
    }

    const apiUrl = "http://localhost:5000/api/student/register";
    try {
      const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userFormData),
      });

      if (response.ok) {
        // Account created successfully, you can redirect or perform other actions
        console.log("Account created successfully!");
        toast.success("Account created successfully 🎉 ", {
          draggable: true,
          closeButton: true,
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000, // Auto close the toast after 3 seconds
        });
        // set a time out to navigate to login page
      } else if (response.status === 409) {
        // Handle errors here
        console.error("user already exist");
        toast.error("User already exists. Please log in to your account. ", {
          draggable: true,
          closeButton: true,
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 7000, // Auto close the toast after 5 seconds
        });
      } else {
        // Handle errors here
        console.error("Failed to create account");
        toast.error("Failed to create account, Try again ", {
          draggable: true,
          closeButton: true,
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 4000, // Auto close the toast after 5 seconds
        });
      }
      setUserFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        agreedToTerms: false,
      });
    } catch (error) {
      console.error("Error:", error);
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
      <form
        className="lg:w-1/2 h-screen lg:overflow-y-scroll  "
        onSubmit={handleSubmit}
      >
        <div className="p-20">
          <div className="flex space-x-4 lg:space-x-48">
            <img className="h-8" src="assets/logo.svg" alt="" />
            <Link to="/">
              <p className="font-light text-sm underline">Back to Home</p>
            </Link>
          </div>
          <p className="mt-12 text-3xl font-medium">Sign up</p>
          <div className="space-y-4 mt-8">
            <div className="flex flex-col sm:flex-row">
              <div className="flex-grow sm:w-1/2 sm:mr-4">
                <label htmlFor="firstName" className="text-gray-500 mb-2 block">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your First Name"
                  className={`rounded-md px-4 py-3 w-full border ${
                    activeInput === "firstName"
                      ? "border-redPal"
                      : "border-red-100"
                  } ::placeholder text-sm focus:border-redPal focus:outline-none`}
                  value={userFormData.firstName}
                  onChange={handleFirstNameChange}
                  onFocus={() => handleInputFocus("firstName")}
                  onBlur={handleInputBlur}
                />
              </div>
              <div className="flex-grow sm:w-1/2">
                <label htmlFor="lastName" className="text-gray-500 mb-2 block">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your Last Name"
                  className={`rounded-md px-4 py-3 w-full border ${
                    activeInput === "lastName"
                      ? "border-redPal"
                      : "border-red-100"
                  } ::placeholder text-sm focus:border-redPal focus:outline-none`}
                  value={userFormData.lastName}
                  onChange={handleLastNameChange}
                  onFocus={() => handleInputFocus("lastName")}
                  onBlur={handleInputBlur}
                />
              </div>
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
                value={userFormData.email}
                onChange={handleEmailChange}
                onFocus={() => handleInputFocus("email")}
                onBlur={handleInputBlur}
              />
              {errorMessageEmail && (
                <div className="mt-2 text-red-500 bg-red-100 border border-red-500 p-2 mb-4 rounded-lg">
                  {errorMessageEmail}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="text-gray-500 mb-2 block">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="phone number: 07xx-xx-xx-xx"
                className={`rounded-md px-4 py-3 w-full border ${
                  activeInput === "phone" ? "border-redPal" : "border-red-100"
                } ::placeholder text-sm focus:border-redPal focus:outline-none`}
                value={userFormData.phone}
                onChange={handlePhoneChange}
                onFocus={() => handleInputFocus("phone")}
                onBlur={handleInputBlur}
              />
              {errorMessagePhone && (
                <div className="mt-2 text-red-500 bg-red-100 border border-red-500 p-2 mb-4 rounded-lg">
                  {errorMessagePhone}
                </div>
              )}
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
              <div className="flex space-x-2 mt-4">
                <div
                  className={`w-1/4 h-1 rounded-md ${
                    userFormData.password.length === 0
                      ? "bg-gray-300"
                      : userFormData.password.length < 8
                      ? "bg-red-500"
                      : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`w-1/4 h-1 rounded-md bg-gray-300 ${
                    (!/[A-Z]/.test(userFormData.password) ||
                      !/[0-9]/.test(userFormData.password)) &&
                    userFormData.password.length >= 8
                      ? "bg-orange-500"
                      : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`w-1/4 h-1 rounded-md bg-gray-300 ${
                    !/[!@#$%^&*(),.?":{}|<>]/.test(userFormData.password) &&
                    /[A-Z]/.test(userFormData.password) &&
                    /[0-9]/.test(userFormData.password) &&
                    userFormData.password.length >= 8
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`w-1/4 h-1 rounded-md bg-gray-300 ${
                    /[A-Z]/.test(userFormData.password) &&
                    /[0-9]/.test(userFormData.password) &&
                    /[!@#$%^&*(),.?":{}|<>]/.test(userFormData.password) &&
                    userFormData.password.length >= 8
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                ></div>
              </div>
              {userFormData.password && (
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
                checked={userFormData.agreedToTerms} // Use userFormData.agreedToTerms
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

            <button
              type="submit"
              disabled={!userFormData.agreedToTerms}
              className=" font-medium w-full p-3 bg-pechelight hover:bg-peche  text-white  rounded-md"
            >
              Create Account
            </button>
            {errorMessage && (
              <div className="text-red-500 bg-red-100 border border-red-500 p-2 mb-4 rounded-lg">
                {errorMessage}
              </div>
            )}
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
            <Link to="/login" className="text-red-500 ">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
