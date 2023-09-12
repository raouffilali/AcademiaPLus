import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/student/login', formData);
      console.log(response.data);
      // Redirect to XO game page
      return <Navigate to="/xo-game" />;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="identifier"
          placeholder="Email/phone number"
          className="border border-gray-300 rounded-md px-4 py-2 mb-2"
          value={formData.identifier}
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
