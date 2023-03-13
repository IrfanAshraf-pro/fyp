import React from 'react'
import PageHeader from '../../../components/PageHeader'
import TodayClassesRow from '../../../components/TodayClassesRow'

const TutorTodaysClasses = () => {
  return ( 
    <div>
      <PageHeader>Todays's Schedule</PageHeader>
      <div className="flex flex-col items-center justify-center">
        <div className="p-2 pt-3 -mb-[1px] px-3 md:px-6  mt-8 rounded-3 flex items-center justify-between  w-11/12 md:w-[80%] bg-gray-500">
          <p className="font-bold text-xl text-white w-[30%] ">Course Name</p>
          <p className="w-4/12 text-base md:text-xl font-bold text-white">Student Name</p>
          <p className="w-4/12 text-base md:text-xl font-bold text-white">Class Time</p>
          <p className="w-3/12 text-base md:text-xl font-bold text-white"></p>
        </div>
        <div className="p-2 flex flex-col mt-4 gap-2 w-11/12 md:w-[78%]">
          <TodayClassesRow name="Ali" course="PF" time='01:00-02:00' btn1Text='Take' btn2Text='Reschedule'/>
          <TodayClassesRow name="Subhan" course="OOP" time='08:00-09:00' btn1Text='Take' btn2Text='Reschedule'/>
          <TodayClassesRow name="Rehman" course="DSA" time='11:00-12:00' btn1Text='Take' btn2Text='Reschedule' />
        </div>
      </div>
    </div>
  )
}

export default TutorTodaysClasses