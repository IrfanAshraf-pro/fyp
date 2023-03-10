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
  return (
    <>
      <div
        className={`sidebar fixed top-0 bottom-0  duration-100 mt-[65px] lg:mt-0
    p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen lg:left-0 ${!isOpen ? "left-[-300px] sidebar_opacity " : ""
          }`}
      >
        <div className="text-xl text-gray-100">
          <div className="p-2.5 mt-1 flex items-center justify-between rounded-md ">
            <div className="w-4 h-4 cursor-pointer">
              <div className="w-4 h-4 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>
              </div>
            </div>
            <h1 className="text-[15px]  ml-3 text-xl text-gray-200 font-bold">
              {role}
            </h1>
            <div className="w-4 h-4 cursor-pointer lg:hidden" onClick={() => closebar()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>

          </div>
          <hr className="my-2 text-gray-600" />
          <div>
            {tabs.map((tab, index) =>
              tab.route === "/dashboard" ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "p-2.5 mt-2 flex items-center text-decoration-none rounded-md px-4 bg-blue-600 duration-300 cursor-pointer  hover:bg-blue-500"
                      : "p-2.5 mt-2 flex items-center text-decoration-none rounded-md px-4  duration-300 cursor-pointer  hover:bg-blue-500"
                  }
                  key={index}
                  to={tab.route}
                  end
                >
                  <i className="text-white bi bi-house-door-fill"></i>
                  <span className="text-[15px] text-decoration-none ml-4 text-gray-200">
                    {tab.name}
                  </span>
                </NavLink>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "p-2.5 mt-2 flex items-center text-decoration-none rounded-md px-4 bg-blue-600 duration-300 cursor-pointer  hover:bg-blue-500"
                      : "p-2.5 mt-2 flex items-center rounded-md px-4 text-decoration-none duration-300 cursor-pointer  hover:bg-blue-500"
                  }
                  key={index}
                  to={tab.route}
                >
                  <i className="text-white bi bi-house-door-fill"></i>
                  <span className="text-[15px]  ml-4 text-gray-200">
                    {tab.name}
                  </span>
                </NavLink>
              )
            )}
            <hr className="my-2 text-gray-600" />
            <NavLink
              className="p-2.5 mt-2 flex items-center text-decoration-none rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-500"
              to="/"
            >
              <i className="text-white bi bi-house-door-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200">Logout</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
