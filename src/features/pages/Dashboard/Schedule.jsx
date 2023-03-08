import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsScheduleUpdate } from "../../../app/Slices/ScheduleSlice";

import PageHeader from "../../components/PageHeader";
import ScheduleComponent from "../../components/ScheduleComponent";
const Schedule = () => {
  const {isScheduleUpdated}=useSelector(state=>state.schedule)
  const dispatch=useDispatch()
  const [isSchedule, setIsSchedule] = useState(isScheduleUpdated)
  const ToggleIsScheduleUpdated=()=>{
    setIsSchedule(!isScheduleUpdated)
  }
  const DispatchIsScheduleUpdate=()=>{
    dispatch(setIsScheduleUpdate({isScheduleUpdated:isSchedule}))
  }
  useEffect(()=>{
    DispatchIsScheduleUpdate()
  },[isSchedule])
  return (
    <div>
      <PageHeader icon="update" onClick={ToggleIsScheduleUpdated}>Schedule</PageHeader>
      <div className="mx-auto w-[95%]  sm:w-[85%] " style={{ height: '100px' }}>
        <ScheduleComponent />
      </div>
    </div>
  );
};

export default Schedule;
