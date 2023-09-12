import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { images } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function ResetPassword() {
  const [password, setPassword] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [activeInput, setActiveInput] = useState("");

  const navigate = useNavigate();
  const { id, token } = useParams();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/student/reset-password/${id}/${token}`, {
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Password updated successfully, Login now", {
            draggable: true,
            closeButton: true,
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, // Auto close the toast after 3 seconds
          });
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleInputBlur = () => {
    setActiveInput("");
  };
  const handleInputFocus = (inputId: any) => {
    setActiveInput(inputId);
  };

  return (
    <>
      {" "}
      <div className="flex flex-col lg:flex-row">
        {/* leftSite */}
        <div
          className="lg:w-1/2 p-20 h-screen"
          style={{ backgroundImage: "url(/assets/bg/login-bg.png)" }}
        >
          <img src={images.forAvatar} alt="" className="h-1/2 lg:mt-12" />
          <h1 className="text-center  mt-4 text-2xl font-medium text-gray-900 ">
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
              <img className="h-8" src={images.Logo} alt="" />
              <Link to="/">
                <p className="font-light text-sm underline">Back to Home</p>
              </Link>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <p className="mt-12 text-3xl font-medium">Reset you password</p>

              <p className="text-gray-600 mt-8">Enter your new password.</p>
            </div>
            <div className="space-y-2 mt-8">
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-gray-500 mb-2 block"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        placeholder="Enter your new password"
                        className={`rounded-md px-4 py-3 w-full border ${
                          activeInput === "password"
                            ? "border-redPal"
                            : "border-red-100"
                        } ::placeholder text-sm focus:border-redPal focus:outline-none`}
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
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
                    <br />
                  </div>
                  <button
                    type="submit"
                    className=" mt-5 font-medium w-full p-3 bg-pechelight hover:bg-peche  text-white  rounded-md"
                  >
                    Update Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------- */}
      {/* <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h4>Reset Password</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>New Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Update
            </button>
          </form>
        </div>
      </div> */}
    </>
  );
}

export default ResetPassword;
