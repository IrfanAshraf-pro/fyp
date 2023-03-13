import React from 'react'
import PageHeader from '../../../components/PageHeader'
import TutorTeachingRow from '../../../components/Tutor/TutorTeachingRow'

const Teaching = () => {
  return (
    <div> 
         <div>
        <PageHeader>Learning</PageHeader>
        <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-between w-11/12 p-2 pt-3 px-3 md:px-6 mt-8 bg-gray-500 rounded-3 md:w-8/12'>
           <div className='flex items-center py-1 justify-between w-[85%]'>
           <p className='text-base md:text-xl font-bold text-white -mb-[1px]'>Teacher Name</p>
            <p className='text-base md:text-xl font-bold text-white -mb-[1px] '>Course Name</p>
            <p className='text-base md:text-xl font-bold text-white -mb-[1px] '></p>
           </div>
        </div>
        <div className='flex flex-col w-11/12 gap-2 mt-4 p-2 md:w-8/12'>
           <TutorTeachingRow isDisabled={true} name='Ali' course='PF'/>
           <TutorTeachingRow name='Subhan' course='IS'/>
           <TutorTeachingRow name='Rehman' course='DSA'/>
           <TutorTeachingRow name='Talha' course='OOP'/>

        </div>
        </div>
    </div>
    </div>
  )
}

export default Teaching