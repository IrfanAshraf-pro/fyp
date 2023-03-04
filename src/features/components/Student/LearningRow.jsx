import React from 'react'

const LearningRow = ({isDisabled,name,course}) => {
  return (
    <div className='p-2 px-5 rounded-sm flex items-center justify-between bg-gray-400'>
        <p className='text-xl  text-primary w-4/12'>{name}</p>
        <p className='text-xl text-primary w-4/12'>{course}</p>
        <button className="btn btn-xs sm:btn-sm md:btn-md " disabled={isDisabled}>
            Rate
        </button>
    </div>
  )
}

export default LearningRow