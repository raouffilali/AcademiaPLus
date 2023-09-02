import "./App.css";
// import {Footer} from "./components/index"
import {  Route, Routes } from "react-router-dom";
import HighSchoolPage from "./pages/academicfieldPage/HighSchoolPage";
import MiddleSchoolPage from "./pages/academicfieldPage/MiddleSchoolPage";
import PrimarySchoolPage from "./pages/academicfieldPage/PrimarySchoolPage";
import UniversityPage from "./pages/academicfieldPage/UniversityPage";
import AllCourses from "./pages/AllCourses/AllCourses";
import BecomeaTeacherPage from "./pages/BecomeaTeacherPage/BecomeaTeacherPage";
import CartPage from "./pages/cartPage/CartPage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import LandingPage from "./pages/landingPage/LandingPage";
import LoginPage from "./pages/loginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SubscriptionPackagesPage from "./pages/subscriptionPackagesPage/SubscriptionPackagesPage";
import WishList from "./pages/WishList/WishList";
import CommingSoonv2 from "./pages/CommingSoon/CommingSoonv2";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/becomeaTeacher" element={<BecomeaTeacherPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishList" element={<WishList />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/courseDetails/:courseName" element={<CourseDetails />} />
      <Route path="/allCourses" element={<AllCourses />} />
      <Route path="/primarySchool" element={<PrimarySchoolPage />} />
      <Route path="/middleSchool" element={<MiddleSchoolPage />} />
      <Route path="/highSchool" element={<HighSchoolPage />} />
      <Route path="/university" element={<UniversityPage />} />
      <Route path="/coming-soon" element={<CommingSoonv2 />} />
      <Route path="/subscription" element={<SubscriptionPackagesPage />} />
    </Routes>
  );
}

export default App;
