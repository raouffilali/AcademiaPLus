import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

// configures toast notifications

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/student/register",
        formData
      );
      console.log(response.data);
      // Show toast notification for email verification
      toast.success("Please check your email for verification instructions.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000, // 5 seconds
      });
      // Redirect to email verification page
      return <Navigate to="/login" />;
    } catch (error) {
      console.error(error);
    }
  };


    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Register</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-2"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-2"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md px-4 py-2 mb-2"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="border border-gray-300 rounded-md px-4 py-2 mb-2"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md px-4 py-2 mb-2"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
      </div>
    );
};

export default Register;
