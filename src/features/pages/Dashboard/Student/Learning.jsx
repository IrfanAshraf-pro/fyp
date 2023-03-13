import React from 'react'
import PageHeader from '../../../components/PageHeader'
import LearningRow from '../../../components/Student/LearningRow'

const Learning = () => {
  return (
    <div>
        <div >
        <PageHeader>Learning</PageHeader>
        <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-between w-11/12 p-2 pt-3 px-3 md:px-6 mt-8 bg-gray-500 rounded-3 md:w-8/12'>
           <div className='flex items-center py-1 justify-between w-[85%]'>
           <p className='text-base md:text-xl font-bold text-white -mb-[1px]'>Teacher Name</p>
            <p className='text-base md:text-xl font-bold text-white -mb-[1px]'>Course Name</p>
            <p className='text-base md:text-xl font-bold text-white -mb-[1px]'>{"           "}</p>
           </div>
        </div>
        <div className='flex flex-col w-11/12 mt-3 md:mt-6 gap-2 p-2 md:w-8/12'>
           <LearningRow isDisabled={true} name='Ali' course='PF'/>
           <LearningRow name='Subhan' course='IS'/>
           <LearningRow name='Rehman' course='DSA'/>
           <LearningRow name='Talha' course='OOP'/>

        </div>
        </div>
    </div>
    </div>
  )
}

export default Learning