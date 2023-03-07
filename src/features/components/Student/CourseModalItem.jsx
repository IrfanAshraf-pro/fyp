import React from 'react'

const CourseModalItem = ({course,EnrolligCourseCall}) => {
  const onClick=()=>{
    EnrolligCourseCall(course.courseid)
  }
  return (
    <div className='flex items-center justify-between px-3 py-1.5 bg-gray-800 w-75 rounded-3'>
       <div className='flex items-center justify-center gap-3 text-white '>
       <p className='-mb-[1px]'>{course.coursecode}</p>
        <p className='-mb-[1px]'>{course.coursename}</p>
       </div>
       <button className='px-3 py-1 text-white rounded-pill bg-primary' onClick={onClick}>Add Course</button>
    </div>
  )
}

export default CourseModalItem