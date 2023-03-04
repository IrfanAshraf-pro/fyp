import React from "react";
import {Login,
  Dashboard,
  Profile,
  Schedule,
  Courses,
  Learning,
  Fee,
  TodayClasses,
  SignUp,
} from "../pages";
import { Route ,BrowserRouter,Routes} from "react-router-dom";
const StudentRoutes = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Profile />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="courses" element={<Courses />} />
        <Route path="learning" element={<Learning />} />
        <Route path="fee" element={<Fee />} />
        <Route path="todayclasses" element={<TodayClasses />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default StudentRoutes;
