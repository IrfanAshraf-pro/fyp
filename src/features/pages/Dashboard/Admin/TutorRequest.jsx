import React from 'react'
import AdminTutorRequestRow from '../../../components/Admin/AdminTutorRequestRow'
import PageHeader from '../../../components/PageHeader'
const TutorRequest = () => {
  return (
    <div>
      <PageHeader>Tutor Requests</PageHeader>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-between w-11/12 p-4 px-6 mt-8 bg-gray-500 rounded-sm md:w-9/12'>
          <p className='font-bold sm:text-xl text-primary'>Tutor Name</p>
          <p className='font-bold sm:text-xl text-primary'>CGPA</p>
          <p className='font-bold sm:text-xl text-primary'>Semester</p>
          <p className='font-bold sm:text-xl text-primary'>Status</p>
        </div>
        <div className='flex flex-col w-11/12 gap-2 p-2 mt-4 md:w-9/12'>
          <AdminTutorRequestRow/>
          <AdminTutorRequestRow/>
          <AdminTutorRequestRow/>
          <AdminTutorRequestRow/>

        </div>
      </div>
    </div>
  )
}

export default TutorRequest