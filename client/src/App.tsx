import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import SubscriptionPackagesPage from "./scenes/subscriptionPackagesPage/SubscriptionPackagesPage";
// import {Footer} from "./components/index"
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navBar/NavBar";
import SignupPage from "./scenes/SignupPage/SignupPage";
import LandingPage from "./scenes/landingPage/LandingPage";
import InstructorProfilePage from "./scenes/instructorProfilePage/InstructorProfilePage";
import StudentProfilePage from "./scenes/studentProfilePage/StudentProfilePage";
import GeneralCoursesPage from "./scenes/generalCoursesPage/GeneralCoursesPage";
import CatCard from "./components/difrrentCategoriesCard/CatCard";
import CategoryPage from "./scenes/categoryPage/CategoryPage";
import Register from "./components/body/auth/Register";
import Login from "./components/body/auth/Login";


function App() {
  
  return (
    <Router>
    <>
    
     <Register/>
 
      

    </>
    </Router>
  );
}

export default App;
