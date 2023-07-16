import "./App.css";
// import {Footer} from "./components/index"
import { useState } from "react";
import LoginPage from "./scenes/loginPage/LoginPage";
import SignupPage from "./scenes/SignupPage/SignupPage";
import LandingPage from "./scenes/landingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
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
import InstructorProfilePage from "./scenes/instructorProfilePage/InstructorProfilePage";
import LearningCourse from "./scenes/LearningCourse/LearningCourse";
import SubscriptionPackagesPage from "./scenes/subscriptionPackagesPage/SubscriptionPackagesPage";
import TeacherStudioPage from "./scenes/teacherStudioPage/TeacherStudioPage";
import EditDetailLesson from "./scenes/teacherStudioPage/EditDetailLesson";
import CheckoutComp from "./components/checkoutComponent/CheckoutComp";
import ComingSoon from "./components/Error/ComingSoon";
import NotFound from "./components/Error/NotFound";
import ServerError from "./components/Error/ServerError";
import UnderConstr from "./components/Error/UnderConstr";
import Form from "./components/BecomeInstructorForm/Form";
import AcademicfieldPage from "./scenes/academicfieldPage/AcademicfieldPage";
import MyCoursesPage from "./scenes/myCoursesPage/MyCoursesPage";
import EnrollCourse from "./components/EnrollCourse/EnrollCourse";
import Test from "./scenes/test/Test";
import PrimarySchoolPage from "./scenes/academicfieldPage/PrimarySchoolPage";
import HighSchoolPage from "./scenes/academicfieldPage/HighSchoolPage";
import MiddleSchoolPage from "./scenes/academicfieldPage/MiddleSchoolPage";
import UniversityPage from "./scenes/academicfieldPage/UniversityPage";
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="BecomeaTeacherPage" element={<BecomeaTeacherPage/>} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/CategoryPage" element={<CategoryPage />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />
        <Route path="/PrimarySchoolPage" element={<PrimarySchoolPage />} />
        <Route path="/MiddleSchoolPage" element={<MiddleSchoolPage />} />
        <Route path="/HighSchoolPage" element={<HighSchoolPage/>} />
        <Route path="/UniversityPage" element={<UniversityPage/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
