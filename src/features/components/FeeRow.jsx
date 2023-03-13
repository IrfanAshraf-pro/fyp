import React from 'react'

const FeeRow = ({name,course,noOfLectures,total}) => {
  return (
    <div className='flex items-center justify-between p-2 px-2 md:px-4 bg-slate-500 rounded-3'>
    <p className='w-4/12 text-base  md:text-xl text-white -mb-[1px]'>{name}</p>
    <p className='w-2/12 text-base  md:text-xl text-white -mb-[1px]'>{course}</p>
    <p className='w-2/12 text-base  md:text-xl text-right text-white -mb-[1px]'>{noOfLectures}</p>
    <p className='w-4/12 text-base  md:text-xl text-right text-white -mb-[1px]'>{total}</p>
</div>
  )
}

export default FeeRow