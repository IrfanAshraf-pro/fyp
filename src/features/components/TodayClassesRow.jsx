import React from "react";

const TodayClassesRow = ({ course, name, time,btn1Text='Held',btn2Text='Cancel' }) => {
  return (
    <div className="flex items-center justify-between p-2 px-3 md:px-5 bg-slate-500 rounded-3">
      <p className="w-4/12 text-base md:text-xl text-white -mb-[1px]">{name}</p>
      <p className="w-4/12 text-base md:text-xl text-white -mb-[1px]">{course}</p>
      <p className="w-4/12 text-base md:text-xl text-white -mb-[1px]">{time}</p>
      <div className="flex flex-col gap-1 lg:flex-row">
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-base md:text-xl py-1 px-3 hover:shadow rounded-2 ">{btn1Text}</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-base md:text-xl py-1 px-3 hover:shadow rounded-2">{btn2Text}</button>
      </div>
    </div>
  );
};

export default TodayClassesRow;
