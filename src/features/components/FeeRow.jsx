import React from 'react'

const FeeRow = ({name,course,noOfLectures,total}) => {
  return (
    <div className='flex items-center justify-between p-2 px-5 bg-gray-400 rounded-sm'>
    <p className='w-4/12 text-xl text-primary'>{name}</p>
    <p className='w-2/12 text-xl text-primary'>{course}</p>
    <p className='w-2/12 text-xl text-right text-primary'>{noOfLectures}</p>
    <p className='w-4/12 text-xl text-right text-primary'>{total}</p>
</div>
  )
}

export default FeeRow