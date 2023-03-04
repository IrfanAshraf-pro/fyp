import React from 'react'
import FeeRow from '../../../components/FeeRow'
import PageHeader from '../../../components/PageHeader'

const Fee = () => {
  return (
    <div>
        <PageHeader>Fee</PageHeader>
        <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-between w-11/12 p-4 px-6 mt-8 bg-gray-500 rounded-sm md:w-8/12'>
           <p className='text-xl font-bold text-primary'>Teacher Name</p>
            <p className='text-xl font-bold text-primary '>Course Name</p>
            <p className='text-xl font-bold text-primary '>No of Lectures</p>
            <p className='text-xl font-bold text-primary '>Total</p>

        </div>
        <div className='flex flex-col w-11/12 gap-2 p-2 md:w-8/12'>
        <FeeRow name='Ali' course='PF' noOfLectures={4} total={3300}/>


        </div>
        </div>
    </div>
  )
}

export default Fee