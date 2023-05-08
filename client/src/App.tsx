import "./App.css";
// import {Footer} from "./components/index"
import { useState } from "react";
import LoginPage from "./scenes/loginPage/LoginPage";
import SignupPage from "./scenes/SignupPage/SignupPage";
import LandingPage from "./scenes/landingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./scenes/forgotPassword/ForgotPassword";
import AdminDashboard from "./scenes/adminDashboard/AdminDashboard";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
