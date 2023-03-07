import React,{useEffect} from "react";
import { Outlet } from "react-router-dom";
import Drawer from "./Dashboard/Drawer";
import Navbar from "./Dashboard/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getSchedule } from "../../repository/TemporaryCalss/ScheduleFunctions";
import { scheduleString } from "../../repository/TemporaryCalss/Types";
import { setSchedule } from "../../app/Slices/ScheduleSlice";


const Dashboard = () => {
  const { role, user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const getScheduleDB = async () => {
    const response = await getSchedule(role, user.email)
    console.log('schedule response in comp is ', response);
    if (response.length > 100) {
      console.log('about to set schedule in main componoinet');
      dispatch(setSchedule({ schedule: response }))
    }
  }
  useEffect(() => {
    getScheduleDB()
  }, [])
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
