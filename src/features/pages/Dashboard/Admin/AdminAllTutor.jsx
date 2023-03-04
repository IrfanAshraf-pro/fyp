import React from 'react'
import AdminAllTutorRow from '../../../components/Admin/AdminAllTutorRow'
import PageHeader from '../../../components/PageHeader'
const AdminAllTutor = () => {
  return (
    <div>
      <PageHeader>All Tutors</PageHeader>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-between w-11/12 p-4 px-6 mt-8 bg-gray-500 rounded-sm md:w-8/12'>
          <p className='text-xl font-bold text-primary'>Tutor Name</p>
          <p className='text-xl font-bold text-primary'>Remove</p>
        </div>
        <div className='flex flex-col w-11/12 gap-2 p-2 mt-4 md:w-8/12'>
          <AdminAllTutorRow/>
          <AdminAllTutorRow/>
          <AdminAllTutorRow/>
          <AdminAllTutorRow/>

        </div>
      </div>
    </div>
  )
}

export default AdminAllTutor