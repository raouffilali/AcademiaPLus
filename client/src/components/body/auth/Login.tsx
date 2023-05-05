import React, { useState } from "react";
import { VisibilityOff, Google, Facebook } from '@mui/icons-material';
import "./auth.css";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// @ts-ignore
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
// @ts-ignore
import {dispatchLogin} from '../../../redux/actions/authAction'
import {useDispatch} from 'react-redux'
interface UserState {
 
  email: string;
  password: string;
 
  err: string;
  success: string;
}

const initialState: UserState = {
  
  email: "",
  password: "",
  
  err: "",
  success: "",
};
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleRememberMe = () => {
    setRememberMe(!rememberMe);
  }; 
  const [user, setUser] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {email, password, err, success} = user

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
          const res = await axios.post('/user/login', {email, password})
          setUser({...user, err: '', success: res.data.msg})

          localStorage.setItem('firstLogin', true.toString())

          dispatch(dispatchLogin())
          navigate("/")

      } catch (err:any) {
          err.response.data.msg && 
          setUser({...user, err: err.response.data.msg, success: ''})
      }
  }

  const responseGoogle = async (response:any) => {
      try {
          const res = await axios.post('/user/google_login', {tokenId: response.tokenId})

          setUser({...user, err:'', success: res.data.msg})
          localStorage.setItem('firstLogin', true.toString())

          dispatch(dispatchLogin())
          navigate('/')
      } catch (err:any) {
          err.response.data.msg && 
          setUser({...user, err: err.response.data.msg, success: ''})
      }
  }

  const responseFacebook = async (response:any) => {
      try {
          const {accessToken, userID} = response
          const res = await axios.post('/user/facebook_login', {accessToken, userID})

          setUser({...user, err:'', success: res.data.msg})
          localStorage.setItem('firstLogin', true.toString())

          dispatch(dispatchLogin())
          navigate('/')
      } catch (err:any) {
          err.response.data.msg && 
          setUser({...user, err: err.response.data.msg, success: ''})
      }
  }
  return (
    <div className="flex justify-center item-center  min-h-screen overflow-hidden mt-2  bg-blue-50">
      {user.err && showErrMsg(user.err)}
        {user.success && showSuccessMsg(user.success)}
        <form onSubmit={handleSubmit} >
      <div className="flex flex-row  w-[680px] h-[480px]  bg-DarkBluePal shadow-md rounded-2xl relative">
        <div className="rectangle absolute inset-y-0 right-0">
          <p className="  right-[280px] top-[36px] font-Lato text-2xl font-bold leading-normal text-gray-800 absolute ">
            Log in
          </p>
        </div>
        <p className="font-Lato text-20 font-normal leading-normal  text-gray-400  absolute  right-[178px] top-[70px]">
          Don't have an account ?
        </p>
        <p className="max-w-245px font-Lato text-[27px] font-bold leading-normal text-white absolute left-[25px] top-[25px]">
          Welcome Back!
        </p>
        <img
          src="./public/assets/login.png"
          alt="Login Image"
          className=" w-[350px] h-[350px] absolute  -left-[40px] top-[70px]"
        />
        <a
          href="/login"
          className="font-Lato text-[13px] font-semibold leading-normal  text-bluelink underline absolute right-[130px] top-[73px]"
        >
          Sign up
        </a>
        <div className="absolute left-[330px] top-[110px] space-y-5 text-[15px] mt-12">
          <input
            type="email"
            className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
            placeholder="Email Address"
            id="email"
            value={email} name="email" onChange={handleChangeInput}
          />
          <input
            type={showPassword ? "text" : "password"}
            className="border-b-2 border-gray-400 focus:border-blue-500 outline-none px-2 py-1 placeholder-gray-400"
            placeholder="Password"
            id="password"
                    value={password} name="password" onChange={handleChangeInput}
          />
          <VisibilityOff
            color="disabled"
            sx={{ fontSize: 20 }}
            className="absolute right-[109px] top-[40px] cursor-pointer"
            onClick={handleTogglePassword}
          />
          <div className="flex items-start -ml-10  mr-1">
            <div className="flex  mt-4">
              <input
                type="checkbox"
                className="mr-1"
                checked={rememberMe}
                onChange={handleToggleRememberMe}
              />
              <label className="font-Lato text-gray-800 text-sm">
                Remember Me
              </label>
            </div>
            <a
              href="/forgot-password"
              className="font-Lato text-bluelink  text-sm  mt-4"
            >
              Forgot password?
            </a>
          </div>
          <button type="submit" className=" bg-DarkBluePal text-white px-16 py-1 p-6 m-12 hover:bg-darkBluePLusPal rounded-2xl font-Lato text-[13px] font-semibold  drop-shadow-xl shadow-stone-700 ">
            Log in
          </button>
          <p className=" text-gray-400 text-sm mt-0 ">
            __________________ OR ____________________
          </p>

          <div className="static flex justify-center space-x-6 mt-5 ">
            <button className=" absolute right-[200px]  bg-red-500 text-white py-1 px-4 rounded-full flex items-center  font-Lato text-[10px] ">
              <Google />
              <span>Sign in with Google</span>
            </button>
            <button className=" absolute right-[30px] bg-blue-600 text-white px-4 py-1 rounded-full flex items-center  font-Lato text-[10px] ">
              <Facebook />
              <span>Sign in with Facebook</span>
            </button> 
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
export default Login;
