import "./App.css";
// import {Footer} from "./components/index"
import { useState } from "react";
import LoginPage from "./scenes/loginPage/LoginPage";
import SignupPage from "./scenes/SignupPage/SignupPage";
import LandingPage from "./scenes/landingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./scenes/forgotPassword/ForgotPassword";
import AdminDashboard from "./scenes/adminDashboard/AdminDashboard";
import CategoryPage from "./scenes/categoryPage/CategoryPage";
import GeneralCoursesPage from "./scenes/generalCoursesPage/GeneralCoursesPage";
import Sidebar from "./scenes/adminDashboard/Sidebar";
import BecomeaTeacherPage from "./scenes/BecomeaTeacherPage/BecomeaTeacherPage";
import CartPage from "./scenes/cartPage/CartPage";
import CourseDetails from "./scenes/CourseDetails/CourseDetails";
import PathPage from "./components/PathPage/PathPage";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import WishList from "./scenes/WishList/WishList";
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<WishList/>} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="BecomeaTeacherPage" element={<BecomeaTeacherPage/>} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
