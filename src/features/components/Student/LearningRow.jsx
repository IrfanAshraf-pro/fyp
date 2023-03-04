import React from 'react'

const LearningRow = ({isDisabled,name,course}) => {
  return (
    <div className='flex items-center justify-between p-2 px-5 bg-gray-400 rounded-sm'>
        <p className='w-4/12 text-xl text-white -mb-[1px]'>{name}</p>
        <p className='w-4/12 text-xl text-white -mb-[1px]'>{course}</p>
        <button className="text-white btn btn-primary " disabled={isDisabled}>
            Rate
        </button>
    </div>
  )
}

export default LearningRow