import React from "react";
import FeeRow from "../../../components/FeeRow";
import PageHeader from "../../../components/PageHeader";
import TodayClassesRow from "../../../components/TodayClassesRow";

const TodayClasses = () => {
  return (
    <div>
      <PageHeader>Todays's Schedule</PageHeader>
      <div className="flex flex-col items-center justify-center">
        <div className="p-4 -mb-[1px] px-6  mt-8 rounded-sm flex items-center justify-between  w-11/12 md:w-[80%] bg-gray-500">
          <p className="font-bold text-xl text-white w-[30%] ">Course Name</p>
          <p className="w-4/12 text-xl font-bold text-white">Teacher Name</p>
          <p className="w-4/12 text-xl font-bold text-white">Class Time</p>
          <p className="w-3/12 text-xl font-bold text-primary"></p>
        </div>
        <div className="p-2 flex flex-col gap-2 w-11/12 md:w-[78%]">
          <TodayClassesRow name="Ali" course="PF" time='01:00-02:00'  />
          <TodayClassesRow name="Subhan" course="OOP" time='08:00-09:00' />
          <TodayClassesRow name="Rehman" course="DSA" time='11:00-12:00'  />
        </div>
      </div>
    </div>
  );
};

export default TodayClasses;
