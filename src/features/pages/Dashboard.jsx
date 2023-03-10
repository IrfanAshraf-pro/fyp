import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "./Dashboard/Drawer";
import Navbar from "./Dashboard/Navbar";

const Dashboard = () => {
  return (
    <div className="lg:flex lg:flex-row ">
      <div className="z-50 lg:w-[300px]">
        <Drawer />
      </div>
      <div className="grow lg:w-8/12">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
