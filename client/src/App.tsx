import "./App.css";
// import {Footer} from "./components/index"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HighSchoolPage from "./scenes/academicfieldPage/HighSchoolPage";
import MiddleSchoolPage from "./scenes/academicfieldPage/MiddleSchoolPage";
import PrimarySchoolPage from "./scenes/academicfieldPage/PrimarySchoolPage";
import UniversityPage from "./scenes/academicfieldPage/UniversityPage";
import AllCourses from "./scenes/AllCourses/AllCourses";
import BecomeaTeacherPage from "./scenes/BecomeaTeacherPage/BecomeaTeacherPage";
import CartPage from "./scenes/cartPage/CartPage";
import CategoryPage from "./scenes/categoryPage/CategoryPage";
import CourseDetails from "./scenes/CourseDetails/CourseDetails";
import ForgotPassword from "./scenes/forgotPassword/ForgotPassword";
import LandingPage from "./scenes/landingPage/LandingPage";
import LoginPage from "./scenes/loginPage/LoginPage";
import SignupPage from "./scenes/SignupPage/SignupPage";
import SubscriptionPackagesPage from "./scenes/subscriptionPackagesPage/SubscriptionPackagesPage";
import WishList from "./scenes/WishList/WishList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/loginPage" element={<LoginPage />} />

      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/BecomeaTeacherPage" element={<BecomeaTeacherPage />} />
      <Route path="/CartPage" element={<CartPage />} />
      <Route path="/WishList" element={<WishList />} />
      <Route path="/SignupPage" element={<SignupPage />} />
      <Route path="/CategoryPage" element={<CategoryPage />} />
      <Route path="/CourseDetails/:courseName" element={<CourseDetails />} />
      <Route path="/AllCourses" element={<AllCourses />} />
      <Route path="/PrimarySchoolPage" element={<PrimarySchoolPage />} />
      <Route path="/MiddleSchoolPage" element={<MiddleSchoolPage />} />
      <Route path="/HighSchoolPage" element={<HighSchoolPage />} />
      <Route path="/UniversityPage" element={<UniversityPage />} />
      <Route
        path="/subscriptionPackagesPage"
        element={<SubscriptionPackagesPage />}
      />
    </Routes>
  );
}

export default App;
