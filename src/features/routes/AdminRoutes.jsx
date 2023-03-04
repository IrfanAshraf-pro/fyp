import React from "react";
import {Login,
  Dashboard,
  AdminAllTutor,
  FeeAdmin,
  TutorRequest,
  SignUp,
} from "../pages";
import { Route ,BrowserRouter,Routes} from "react-router-dom";
const AdminRoutes = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route exact path="fee" element={<FeeAdmin />} />
        <Route exact path="tutorrequest" element={<TutorRequest />} />
        <Route exact index element={<AdminAllTutor />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default AdminRoutes;
