import React from "react";

const TodayClassesRow = ({ course, name, time,btn1Text='Held',btn2Text='Cancel' }) => {
  return (
    <div className="flex items-center justify-between p-2 px-5 bg-gray-400 rounded-sm">
      <p className="w-4/12 text-xl text-white -mb-[1px]">{name}</p>
      <p className="w-4/12 text-xl text-white -mb-[1px]">{course}</p>
      <p className="w-4/12 text-xl text-white -mb-[1px]">{time}</p>
      <div className="flex flex-col gap-1 lg:flex-row">
        <button className="btn btn-light ">{btn1Text}</button>
        <button className="btn btn-light">{btn2Text}</button>
      </div>
    </div>
  );
};

export default TodayClassesRow;
