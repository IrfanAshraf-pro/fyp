import React from "react";
import {Login,
  Dashboard,
  Profile,
  Schedule,
  Learning,
  Fee,
  TodayClasses,
  TutorCourses,
  Teaching,
  TutorFee,
  TutorTodaysClasses,
  SignUp,
} from "../pages";
import { Route ,BrowserRouter,Routes} from "react-router-dom";
const TutorRoutes = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Profile />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="courses" element={<TutorCourses />} />
        <Route path="teaching" element={<Teaching />} />
        <Route path="fee" element={<TutorFee />} />
        <Route path="todayclasses" element={<TutorTodaysClasses />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default TutorRoutes;
