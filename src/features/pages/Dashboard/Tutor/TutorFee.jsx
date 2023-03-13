import React from 'react'
import FeeRow from '../../../components/FeeRow'
import PageHeader from '../../../components/PageHeader'

const TutorFee = () => {
  return (
    <div>
         <PageHeader>Fee</PageHeader>
        <div className='flex flex-col items-center justify-center mt-8'>
        <div className='flex items-start md:items-center justify-between w-11/12 p-2 pt-3 md:px-8 bg-gray-500 rounded-3 md:w-8/12 -mb-[1px]'>
           <p className='text-base md:text-xl font-bold text-white'>Student Name</p>
            <p className='text-base md:text-xl font-bold text-white'>Course Name</p>
            <p className='text-base md:text-xl font-bold text-white'>No of Lectures</p>
            <p className='text-base md:text-xl font-bold text-white'>Total</p>
 
        </div>
        <div className='flex flex-col w-11/12 gap-2 mt-2 md:mt-4 p-2 md:w-8/12'>
        <FeeRow name='Ali' course='PF' noOfLectures={4} total={3300}/>
        <FeeRow name='Ahmed Faraz' course='OOP' noOfLectures={9} total={1200}/>


        </div>
        </div>
    </div>
  )
}

export default TutorFee