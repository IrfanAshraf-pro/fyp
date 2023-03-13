import React from 'react'
import { useSelector } from 'react-redux'
import {RequestingTutor} from '../../../repository/TemporaryCalss/CoursesFunctions'

const FindTutorRow = ({tutor,course}) => {
    const {user}=useSelector(state=>state.auth)
    const RequestTutor=async()=>{
      const slot=tutor.slotMatched.substring(0,tutor.slotMatched.length-1)
      const response=await RequestingTutor(user.email,tutor.email,course.courseid,slot)
      console.log('tutor row response',response);
    }
  return (
    <div className='w-[90%] flex items-center rounded-2 justify-between p-2 bg-slate-500 rounded-3'>
        <p className='w-4/12  text-xs md:text-xl text-white -mb-[1px]'>{tutor.name} / -</p>
        <p className='w-4/12 text-xs md:text-xl text-white -mb-[1px]'>{tutor.cgpa} / {tutor.grade}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-base md:text-xl py-1 px-3 hover:shadow rounded-2 " onClick={RequestTutor}>
            Request
        </button>
    </div>
  )
}

export default FindTutorRow