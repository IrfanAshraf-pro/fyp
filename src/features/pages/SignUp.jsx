import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "reactstrap";

//importing Form validations

import useSignUpForm from '../CustomHooks/SignUp/useSignUpForm'
import validateSignUp from "../CustomHooks/SignUp/SignUpFormValidation";
import { SignupUser } from "../../repository/TemporaryCalss/SignUpFunctions";

const SignUp = () => {
  const [maleChecked, setMaleChecked] = useState(true);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [student, setStudent] = useState(true)
  const [tutor, setTutor] = useState(false)
  const [resError, setResError] = useState(false)
  const navigate = useNavigate();
  const handleSignup = async () => {
    console.log('about to send response', values);
    const response = await SignupUser(values)
    if (response.localeCompare('Signed up successfully')) {
      navigate("/");
    } else {
      setResError(response)
    }
  };
  //form validation 
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useSignUpForm(handleSignup, validateSignUp, tutor)


  function handleMaleCheck() {
    setMaleChecked(!maleChecked);
    if (femaleChecked) setFemaleChecked(false);
  }

  function handleFemaleCheck() {
    setFemaleChecked(!femaleChecked);
    if (maleChecked) setMaleChecked(false);
  }
  function handleStudentCheck() {
    setStudent(!student);
    if (tutor) setTutor(false);
  }

  function handleTutorCheck() {
    setTutor(!tutor);
    if (student) setStudent(false);
  }

  const handleFormSubmit = (event) => {
    if (event) event.preventDefault();
    maleChecked ? values.gender = 'male' : values.gender = 'female'
    tutor ? values.type = 'tutor' : values.type = 'student'
    handleSubmit(event)
  }

  return (
    <div className="flex items-center justify-center py-4 bg-gradient-to-r from-green-400 to-blue-500 h-100vh">
      <div className="w-11/12 px-4 py-6 bg-white shadow md:w-8/12 rounded-4">
        <h1 className="text-center md:mb-4 display-5 text-accent">Sign Up</h1>
        <form onSubmit={handleFormSubmit} >
          <div className="row">
            <div className="gap-2 md:gap-3 col-12 col-md-6">
              {/* <div className="flex-md-row d-flex flex-column justify-content-center"> */}
              {/* <Label htmlFor="email" className="text-gray-600 fs-5">Email:</Label> */}
              <Input
                id="name"
                type="text"
                required
                className={`px-2 py-2 mb-3 login__form__input ${errors.name && 'border-red-400'} w-100`}
                name="name"
                placeholder="Enter Your Name"
                onChange={handleChange}
                value={values.name || ''}
              ></Input>
              {errors.name && (
                <p className="text-red-400  text-md">{errors.name}</p>
              )}
              {/* </div> */}
              <Input
                id="email"
                type="email"
                required
                className={`px-2 py-2 mb-3 login__form__input ${errors.email && 'border-red-400'} w-100`}
                placeholder="Enter Your Email"
                name="email"
                onChange={handleChange}
                value={values.email || ''}
              ></Input>
              {errors.email && (
                <p className="text-red-400  text-md">{errors.email}</p>
              )}
              <Input
                id="semester"
                type="number"
                name="semester"
                required
                className={`px-2 py-2 mb-3 login__form__input ${errors.semester && 'border-red-400'} w-100`}
                placeholder="Please Enter your Semester"
                onChange={handleChange}
                value={values.semester || ''}
              ></Input>
              {errors.semester && (
                <p className="text-red-400  text-md">{errors.semester}</p>
              )}
              <Input
                id="contact"
                name="contact"
                type="number"
                required
                className={`px-2 py-2 mb-3 login__form__input ${errors.contact && 'border-red-400'} w-100`}
                placeholder="Enter Your Contact No"
                onChange={handleChange}
                value={values.contact || ''}
              ></Input>
              {errors.contact && (
                <p className="text-red-400  text-md">{errors.contact}</p>
              )}
            </div>
            <div className="col-12 col-md-6">
              <Input
                name="cgpa"
                id="cgpa"
                type="number"
                step="0.01"
                required
                className={`px-2 py-2 mb-3 login__form__input ${errors.cgpa && 'border-red-400'} w-100`}
                placeholder="Enter Your CGPA"
                onChange={handleChange}
                value={values.cgpa || ''}
              ></Input>
              {errors.cgpa && (
                <p className="text-red-400  text-md">{errors.cgpa}</p>
              )}
              {
                !tutor && (
                  <Input
                    type="number"
                    name="fathercnic"
                    id="fathercnic"
                    required
                    className={`px-2 py-2 mb-3 login__form__input ${errors.fathercnic && 'border-red-400'} w-100`}
                    placeholder="Please Enter YOur Father CNIC"
                    onChange={handleChange}
                    value={values.fathercnic || ''}
                  ></Input>
                )}
              {!tutor && errors.fathercnic && (
                <p className="text-red-400  text-md">{errors.fathercnic}</p>
              )}

              <Input
                type="password"
                required
                className={`px-2 py-2 mb-3 login__form__input ${errors.password && 'border-red-400'} w-100`}
                name="password"
                id="password"
                placeholder="Please Enter Your Password"
                onChange={handleChange}
                value={values.password || ''}
              ></Input>
              {errors.password && (
                <p className="text-red-400  text-md">{errors.password}</p>
              )}
              <div className="flex items-center justify-center md:justify-start  gap-4">
                <div className="flex gap-2 -mb-2">
                  <label htmlFor="male">Male</label>
                  <div className="w-2 h-2">
                    <Input
                      id="male"
                      name="gender"
                      type="radio"
                      className="px-2 py-2 mb-3 login__form__input w-100"
                      checked={maleChecked}
                      onChange={handleMaleCheck}
                    ></Input>
                  </div>
                </div>
                <div className="flex gap-2 -mb-2">
                  <label htmlFor="female">Female</label>
                  <div className="w-2 h-2">
                    <Input
                      id="female"
                      name="gender"
                      type="radio"
                      className="px-2 w-2 h-2 py-2 mb-3 login__form__input w-100"
                      checked={femaleChecked}
                      onChange={handleFemaleCheck}
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center my-2 md:mt-1">
              <div className="md:mt-2 md:mb-2 d-flex gap-4 align-items-center justify-content-center w-75 col-12">
                <div className="flex gap-2">
                  <label htmlFor="tutor">Tutor</label>
                  <div className="w-2 h-2">
                    <Input
                      id="tutor"
                      name="accounttype"
                      type="radio"
                      className="px-2 py-2 mb-3 login__form__input w-100"
                      checked={tutor}
                      onChange={handleTutorCheck}
                    ></Input>
                  </div>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="student">Student</label>
                  <div className="w-2 h-2">
                    <Input
                      id="student"
                      name="accounttype"
                      type="radio"
                      className="px-2 w-2 h-2 py-2 mb-3 login__form__input w-100"
                      checked={student}
                      onChange={handleStudentCheck}
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mt-4 d-flex align-items-center justify-content-center col-12">
              <button className="btn btn-primary w-[200px]">Submit</button>
            </div>
          </div>
        </form>
        {
          resError && <p className="text-red-400 text-md">{resError}</p>
        }
        <div className="flex items-center justify-center gap-2 mt-1 md:py-2 md:mt-4 ">
          <p className="text-sm text-raisinBlack">
            Already have an account ?
          </p>
          <p><NavLink className="text-decoration-none fs-6" to="/">
            Login
          </NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
