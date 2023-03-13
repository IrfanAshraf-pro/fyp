import React,{useState} from 'react'
import Logo from '../../assests/login_image.jpg'
import { NavLink,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-green-400 to-blue-500">
    <div>
      <div className="bg-white shadow-md md:rounded-lg sm:mx-auto sm:w-full sm:max-w-md">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img src={Logo} className="mx-auto h-12 w-auto" alt="WorkFlow" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          {" "}
          Login to your account{" "}
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Or{" "}
          <NavLink
            to='/signup'
            className="font-medium ml-2 no-underline text-indigo-600 hover:text-indigo-500 focus:outline-none hover:underline transition ease-in-out duration-150"
          >
            {" "}
            Create an Account{" "}
          </NavLink>
        </p>
      </div>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <form className=" py-8 px-4  sm:px-10" onSubmit={handleSubmit} noValidate>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-5 mb-1 text-gray-700"
            >
              {" "}
              E-mail{" "}
            </label>
            <div>
            <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300  transition duration-150 ease-in-out sm:text-sm sm:leading-5 `}
                  onChange={handleChange} value={values.email || ''} required
                />
              {errors.email && (
                <p className="text-red-500  text-xs mt-1">{errors.email}</p>
              )}
            </div>
            {/* <div>
              {!emailTouched && email.length < 1 && (
                <div className="text-xs text-red-500">
                   Esse campo é obrigatório
                </div>
              )}
            </div> */}
          </div>
          <div className="mt-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              {" "}
              Password{" "}
            </label>
            <div>
            <input
                  placeholder="Enter your Password"
                  className={`w-full form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'}`}
                  type="password" name="password" onChange={handleChange} value={values.password || ''} required
                />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-end">
            <div className="text-sm leading-5">
              <NavLink
                to='/resetPassword'
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                {" "}
                Reset Password?{" "}
              </NavLink>
            </div>
          </div>
          {
              resError && <p className="text-red-500 text-xs my-1">{resError}</p>
            }
          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 hover:shadow-md focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                {" "}
                Login{" "}
              </button>
            </span>
          </div>
        </form>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Login