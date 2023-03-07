import React from 'react'

const TutorCoursesRow = ({course}) => {
  return (
    <div className='flex items-center justify-between px-5 py-3 bg-gray-400 rounded-4'>
        <p className='text-xl text-white  -mb-[1px]'>{course.coursename}</p>
       
    </div>
  )
}

export default TutorCoursesRow