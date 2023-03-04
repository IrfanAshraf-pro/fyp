import React from 'react'
import PageHeader from '../../../components/PageHeader'
import TutorCoursesRow from '../../../components/Tutor/TutorCoursesRow'

const TutorCourses = () => {
  return (
    <div>
        <PageHeader icon={'+'} onClick={()=>alert('clicked')}>Courses</PageHeader>
        <div className='flex items-center justify-center'>
        <div className='flex flex-col w-11/12 gap-2 p-2 mt-8 md:w-8/12'>
        <TutorCoursesRow/>
        <TutorCoursesRow/>
        <TutorCoursesRow/>
        <TutorCoursesRow/>
        </div>
        </div>
    </div>
  )
}

export default TutorCourses