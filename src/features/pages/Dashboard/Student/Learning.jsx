import React from 'react'
import PageHeader from '../../../components/PageHeader'
import LearningRow from '../../../components/Student/LearningRow'

const Learning = () => {
  return (
    <div>
        <div >
        <PageHeader>Learning</PageHeader>
        <div className='flex flex-col items-center justify-center'>
        <div className='flex w-11/12 p-4 px-6 mt-8 bg-gray-500 rounded-sm md:w-8/12'>
           <div className='flex items-center justify-between w-[85%]'>
           <p className='text-xl font-bold text-white'>Teacher Name</p>
            <p className='text-xl font-bold text-white '>Course Name</p>
            <p className='text-xl font-bold text-white '></p>
           </div>
        </div>
        <div className='flex flex-col w-11/12 gap-2 p-2 md:w-8/12'>
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