import React from 'react'

const LearningRow = ({isDisabled,name,course}) => {
  return (
    <div className='flex items-center justify-between p-2 px-3 md:px-5 bg-slate-500 rounded-3'>
        <p className='w-4/12 text-base md:text-xl text-white -mb-[1px]'>{name}</p>
        <p className='w-4/12 text-base md:text-xl text-white -mb-[1px]'>{course}</p>
        <button className={`${isDisabled? 'bg-blue-400':'bg-blue-500'} ${!isDisabled && 'hover:bg-blue-700'} text-white text-base md:text-xl py-1 px-3 hover:shadow rounded-2   `} disabled={isDisabled}>
            Rate
        </button>
    </div>
  )
}

export default LearningRow