import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/api/student/forgot-password", { email })
        .then((res) => {
          if (res.status === 201) {
            toast.success("Email sent successful!", {
              draggable: true,
              closeButton: true,
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000, // Auto close the toast after 3 seconds
            });
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* leftSite */}
      <div
        className="lg:w-1/2 p-20 h-screen"
        style={{ backgroundImage: "url(assets/bg/login-bg.png)" }}
      >
        <img src="assets/login-img1.png" alt="" className="h-1/2 lg:mt-12" />
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
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <p className="mt-12 text-3xl font-medium">Forgot Password ?</p>

            <p className="text-gray-600 mt-8">
              Enter your email to reset your password.
            </p>
          </div>
          <div className="space-y-4 mt-8">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="text-gray-500 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`rounded-md px-4 py-3 w-full border
                 border-red-100
                } ::placeholder text-sm focus:border-redPal focus:outline-none`}
                />
                              <button
                type="submit"
                className=" mt-5 font-medium w-full p-3 bg-pechelight hover:bg-peche  text-white  rounded-md"
              >
                Send Email
              </button>
              </form>


            </div>
          </div>
        </div>
      </div>
    </div>

    //   <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    //     <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    //       <form className="space-y-6" onSubmit={handleSubmit}>
    //         <div>
    //           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    //             Email address
    //           </label>
    //           <div className="mt-1">
    //             <input
    //               id="email"
    //               name="email"
    //               type="email"
    //               autoComplete="email"
    //               required
    //               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>
    //         </div>

    //         <div>
    //           <button
    //             type="submit"
    //             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blueLink hover:bg-bluePal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //           >
    //             Submit
    //           </button>
    //         </div>
    //         {status && (
    //           <div
    //             className={`${
    //               status === 'User Not Exists!!' ? 'text-red-500' : 'text-green-500'
    //             } text-center`}
    //           >
    //             {status}
    //           </div>
    //         )}
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ForgotPassword;
