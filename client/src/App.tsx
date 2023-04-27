import "./App.css";
import SubscriptionPackagesPage from "./scenes/subscriptionPackagesPage/SubscriptionPackagesPage";
// import {Footer} from "./components/index"
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navBar/NavBar";
import SignupPage from "./scenes/SignupPage/SignupPage";
import LandingPage from "./scenes/landingPage/LandingPage";
import InstructorProfilePage from "./scenes/instructorProfilePage/InstructorProfilePage";
import StudentProfilePage from "./scenes/studentProfilePage/StudentProfilePage";
import BecomeaTeacherPage from "./scenes/BecomeaTeacherPage/BecomeaTeacherPage";
import TeacherStudioPage from "./scenes/teacherStudioPage/TeacherStudioPage";
import TeacherStudioPageB from "./scenes/teacherStudioPage/TeacherStudioPageB";
import AddNewLesson from "./scenes/teacherStudioPage/AddNewLesson";
import SideBar from "./components/sideBar/SideBar";

import EditDetailLesson from "./scenes/teacherStudioPage/EditDetailLesson";
import Form from "./components/BecomeInstructorForm/Form";
import AcademicfieldPage from "./scenes/academicfieldPage/AcademicfieldPage";


function App() {
  return (
    <>
    {/* <SignupPage/> */}
    {/* <LandingPage/> */}
    {/* <BecomeaTeacherPage/> */}
    <Form/>
      {/* <AddNewLesson/> */}
      {/* <EditDetailLesson/> */}
    </>
  );
}

export default App;
