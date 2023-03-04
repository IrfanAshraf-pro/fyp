import React from 'react'
import PageHeader from '../../../components/PageHeader'
import LearningRow from '../../../components/Student/LearningRow'

const Learning = () => {
  return (
    <div>
        <div>
        <PageHeader>Learning</PageHeader>
        <div className='flex items-center justify-center flex-col'>
        <div className='p-4 px-6  mt-8 rounded-sm flex   w-11/12 md:w-8/12 bg-gray-500'>
           <div className='flex items-center justify-between w-[85%]'>
           <p className='font-bold text-xl text-primary'>Teacher Name</p>
            <p className='font-bold text-xl text-primary '>Course Name</p>
            <p className='font-bold text-xl text-primary '></p>
           </div>
        </div>
        <div className='p-2 flex flex-col gap-2 w-11/12 md:w-8/12'>
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