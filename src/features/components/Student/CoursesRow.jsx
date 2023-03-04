import React from 'react'

const CoursesRow = () => {
  return (
    <div className='p-2 px-5 rounded-sm flex items-center justify-between bg-gray-400'>
        <p className='text-xl text-primary'>PF</p>
        <button className="btn btn-xs sm:btn-sm md:btn-md ">
            match
        </button>
    </div>
  )
}

export default CoursesRow