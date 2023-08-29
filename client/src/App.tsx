import "./App.css";
// import {Footer} from "./components/index"
import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import BecomeaTeacherPage from "./pages/BecomeaTeacherPage/BecomeaTeacherPage";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import SignupPage from "./pages/SignupPage/SignupPage";
import HighSchoolPage from "./pages/academicfieldPage/HighSchoolPage";
import MiddleSchoolPage from "./pages/academicfieldPage/MiddleSchoolPage";
import PrimarySchoolPage from "./pages/academicfieldPage/PrimarySchoolPage";
import UniversityPage from "./pages/academicfieldPage/UniversityPage";
import CartPage from "./pages/cartPage/CartPage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import LandingPage from "./pages/landingPage/LandingPage";
import LoginPage from "./pages/loginPage/LoginPage";
import SubscriptionPackagesPage from "./pages/subscriptionPackagesPage/SubscriptionPackagesPage";
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
        <Route path="/subscriptionPackagesPage" element={<SubscriptionPackagesPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
