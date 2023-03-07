import React from "react";

import PageHeader from "../../components/PageHeader";
import ScheduleComponent from "../../components/ScheduleComponent";
const Schedule = () => {
  
  return (
    <div>
      <PageHeader>Schedule</PageHeader>
      <div className="mx-auto w-[95%]  sm:w-[85%] " style={{ height: '100px' }}>
        <ScheduleComponent />
      </div>
    </div>
  );
};

export default Schedule;
