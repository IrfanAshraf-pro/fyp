import React, { useState } from "react";
import LoginLeft from "../../assests/login_image.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRole, setUser } from "../../app/Slices/AuthSlice";
// import LoginStudent from "../../repository/LoginRepo";

//importing form validations
import useForm from "../CustomHooks/Login/useForm";
import validate from "../CustomHooks/Login/LoginFormValidationRules";
import { LoginUser } from "../../repository/TemporaryCalss/LoginFunctions";



const Login = () => {
  const [resError,setResError]=useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async () => {
    console.log('calling login function');
    const response = await LoginUser(values.email, values.password)
    console.log('response is ,', response);
    if (typeof (response) === "object") {
      dispatch(setRole({ item: response.Role }));
      dispatch(setUser({user:response.data}));
      navigate("/dashboard");
    }else{
      setResError(response)
    }
  }
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);
  return (
    <div className="flex items-center justify-center py-4 bg-gradient-to-r from-green-400 to-blue-500 h-100vh">
      {/* *This is card container  */}
      <div className="flex flex-row items-center justify-center w-11/12 rounded-xl drop-shadow-xl sm:w-5/6 md:w-4/6 lg:w-9/12 bg-slate-200 h-5/6 ">
        {/* image container or left side  */}
        <div className="items-center justify-center hidden w-5/12 h-full lg:flex ">
          <img
            src={LoginLeft}
            alt="login left side"
            className="h-full max-w-3/4 rounded-l-xl"
          />
        </div>
        {/*  right side container */}
        <div className="flex flex-col w-full gap-4 px-2 py-2 text-center h-5/6 sm:w-10/12 lg:w-7/12 lg:h-full lg:px-4 lg:py-4 md:gap-2 lg:gap-4 lg:justify-center ">
          <h1 className="mt-1 mb-2 text-5xl font-medium leading-tight text-center text-main">
            Login
          </h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className={`flex flex-col items-center justify-center w-5/6 gap-2 px-4 py-2 h-[80%]  mx-auto ${(errors.email | errors.password) ? 'md:gap-4' : 'md:gap-6'} lg:w-5/6`}>
              <label className="flex flex-col justify-between w-full  text-lg text-left text-gray-500 sm:flex-row sm:items-center sm:gap-2">
                Email
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full max-w-xs input input-bordered ${errors.email && 'border-red-400'} sm:w-9/12 `}
                  onChange={handleChange} value={values.email || ''} required
                />
              </label>
              {errors.email && (
                <p className="text-red-400  text-md">{errors.email}</p>
              )}
              <label className="flex flex-col justify-between w-full text-lg text-left text-gray-500 sm:flex-row sm:items-center sm:gap-2">
                Password
                <input
                  placeholder="Enter your Password"
                  className={`w-full max-w-xs input input-bordered sm:w-9/12 ${errors.password && 'border-red-400'}`}
                  type="password" name="password" onChange={handleChange} value={values.password || ''} required
                />

              </label>
              {errors.password && (
                <p className="text-red-400 text-md">{errors.password}</p>
              )}
            </div>
            {
              resError && <p className="text-red-400 text-md">{resError}</p>
            }
            <div className="w-5/6 px-4 mt-4 md:mt-2 mx-auto lg:w-5/6">
              <button
                className="w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Login
              </button>
            </div>
          </form>
          <div className="w-5/6 px-4 mx-auto lg:w-5/6">
            <div className="flex items-center justify-center gap-2 py-2 mt-2">
              <p className="text-sm text-raisinBlack">
                Don't have an account ?
              </p>
              <p><NavLink className="text-decoration-none fs-6" to="/signup">
                SignUp
              </NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
