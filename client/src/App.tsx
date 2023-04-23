import "./App.css";
import SubscriptionPackagesPage from "./scenes/subscriptionPackagesPage/SubscriptionPackagesPage";
// import {Footer} from "./components/index"
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navBar/NavBar";
import SignupPage from "./scenes/SignupPage/SignupPage";
import LandingPage from "./scenes/landingPage/LandingPage";
import InstructorProfilePage from "./scenes/instructorProfilePage/InstructorProfilePage";
import StudentProfilePage from "./scenes/studentProfilePage/StudentProfilePage";
import GeneralCoursesPage from "./scenes/generalCoursesPage/GeneralCoursesPage";

function App() {
  return (
    <>
      <GeneralCoursesPage />
      <LandingPage />
    </>
  );
}

export default App;
