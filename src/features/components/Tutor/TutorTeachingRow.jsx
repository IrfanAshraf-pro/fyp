import React from 'react'

const TutorTeachingRow = ({isDisabled,name,course}) => {
    return (
      <div className='flex items-center justify-between p-2 px-5 bg-gray-400 rounded-sm'>
          <p className='w-4/12 text-xl text-white'>{name}</p>
          <p className='w-4/12 text-xl text-white'>{course}</p>
          <button className="btn btn-primary rounded-4 " disabled={isDisabled}>
              Finish
          </button>
      </div>
    )
  }
  

export default TutorTeachingRow