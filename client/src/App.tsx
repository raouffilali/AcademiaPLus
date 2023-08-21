import "./App.css";
// import {Footer} from "./components/index"
import {  Route, Routes } from "react-router-dom";
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
      <Route
        path="/subscription"
        element={<SubscriptionPackagesPage />}
      />
    </Routes>
  );
}

export default App;
