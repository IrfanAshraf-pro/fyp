import React from 'react'

const CourseModalItem = () => {
  return (
    <div className='flex items-center justify-between px-3 py-1.5 bg-gray-800 w-75 rounded-3'>
       <div className='flex items-center justify-center gap-3 text-white '>
       <p className='-mb-[1px]'>CS-333</p>
        <p className='-mb-[1px]'>PF</p>
       </div>
       <button className='px-3 py-1 text-white rounded-pill bg-primary'>Add Course</button>
    </div>
  )
}

export default CourseModalItem