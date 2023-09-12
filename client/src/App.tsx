import "./App.css";
// import {Footer} from "./components/index"
import { Route, Routes } from "react-router-dom";
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
import InstructorDashboard from "./pages/instructorDashboard/InstructorDashboard";
import CreateCourse from "./pages/instructorDashboard/CreateCourse";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import EducationalCoursesPage from "./pages/academicfieldPage/ EducationalCoursesPage/ EducationalCoursesPage";
import AcademicCourseDetails from "./components/AcademicCourseDetails/AcademicCourseDetails";
import VideoSummaries from "./pages/academicfieldPage/VideoSummaries/VideoSummaries";
import ExamsPage from "./pages/academicfieldPage/examsPage/ExamsPage";
import PdfSummaries from "./pages/academicfieldPage/PdfSummeries/PdfSummaries";
import GrpChat from "./pages/academicfieldPage/grpChat/GrpChat";
import GamesPage from "./pages/academicfieldPage/GamesPage/GamesPage";
import CheckoutComp from "./components/checkoutComponent/CheckoutComp";
import VirtualLab from "./pages/VirtualLab/VirtualLab";
import ResetPassword from "./pages/ResetPassword";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/educational-courses" element={<EducationalCoursesPage />} />
      <Route path="/create-course" element={<CreateCourse />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/becomeaTeacher" element={<BecomeaTeacherPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishList" element={<WishList />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/category/:categoryName" element={<CategoryPage/>} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/checkout" element={<CheckoutComp />} />
      <Route path="/courseDetails/:courseName" element={<CourseDetails />} />
      <Route
        path="/course-details/:courseId"
        element={<AcademicCourseDetails />}
      />
      <Route path="/video-summaries" element={<VideoSummaries />} />
      <Route path="/pdf-summaries" element={<PdfSummaries />} />
      <Route path="/games" element={<GamesPage />} />
      <Route path="/group-chat" element={<GrpChat />} />
      <Route path="/exams" element={<ExamsPage />} />
      <Route path="/allCourses" element={<AllCourses />} />
      <Route path="/primarySchool" element={<PrimarySchoolPage />} />
      <Route path="/middleSchool" element={<MiddleSchoolPage />} />
      <Route path="/highSchool" element={<HighSchoolPage />} />
      <Route path="/university" element={<UniversityPage />} />

      <Route path="/subscription" element={<SubscriptionPackagesPage />} />
      <Route path="/virtual-lab" element={<VirtualLab />} />
    </Routes>
  );
}

export default App;
