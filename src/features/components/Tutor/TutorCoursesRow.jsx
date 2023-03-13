import React from 'react'

const TutorCoursesRow = ({course}) => {
  return (
    <div className='flex items-center justify-between px-3 md:px-5 py-3 bg-slate-500 rounded-3'>
        <p className='-mb-[1px] text-base md:text-xl text-white'>{course.coursename}</p>
       
    </div>
  )
}

export default TutorCoursesRow