import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { openDrawer, closeDrawer } from "../../../app/Slices/drawerSlice";
import { AdminTabs, Studenttabs, Tutortabs } from "./tabs";
const Drawer = () => {
  const [tabs, setTabs] = useState([]);
  const { isOpen } = useSelector((state) => state.drawer);
  const { role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    setTabs(role === "Student" ? Studenttabs : Tutortabs);
  }, [role]);

  const Openbar = () => {
    dispatch(openDrawer());
  };
  const closebar = () => {
    dispatch(closeDrawer());
  };
  const dropDown = () => {};
  return (
    <>
      <div
        className={`sidebar fixed top-0 bottom-0  duration-100
    p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen lg:left-0 ${
      !isOpen ? "left-[-300px] sidebar_opacity" : ""
    }`}
      >
        <div className="text-xl text-gray-100">
          <div className="p-2.5 mt-1 flex items-center justify-between rounded-md ">
            <i className="px-2 py-1 bg-blue-600 rounded-md bi bi-app-indicator"></i>
            <h1 className="text-[15px]  ml-3 text-xl text-gray-200 font-bold">
              {role}
            </h1>
            <i
              className="ml-20 cursor-pointer bi bi-x lg:hidden"
              onClick={() => closebar()}
            >h</i>
          </div>
          <hr className="my-2 text-gray-600" />
          <div>
            {tabs.map((tab, index) =>
              tab.route === "/dashboard" ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "p-2.5 mt-2 flex items-center rounded-md px-4 bg-blue-600 duration-300 cursor-pointer  hover:bg-blue-600"
                      : "p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600"
                  }
                  key={index}
                  to={tab.route}
                  end
                >
                  <i className="bi bi-house-door-fill"></i>
                  <span className="text-[15px] ml-4 text-gray-200">
                    {tab.name}
                  </span>
                </NavLink>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "p-2.5 mt-2 flex items-center rounded-md px-4 bg-blue-600 duration-300 cursor-pointer  hover:bg-blue-600"
                      : "p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600"
                  }
                  key={index}
                  to={tab.route}
                >
                  <i className="bi bi-house-door-fill"></i>
                  <span className="text-[15px] ml-4 text-gray-200">
                    {tab.name}
                  </span>
                </NavLink>
              )
            )}
            <hr className="my-2 text-gray-600" />
            <NavLink
              className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600"
              to="/"
            >
              <i className="bi bi-house-door-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200">Logout</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
