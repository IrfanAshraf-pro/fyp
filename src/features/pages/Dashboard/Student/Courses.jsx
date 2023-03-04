import React, { Fragment, useState, useRef } from 'react'
import PageHeader from '../../../components/PageHeader'
import AddCourseModal from '../../../components/Student/AddCourseModal'
import CoursesRow from '../../../components/Student/CoursesRow'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import CourseModal from '../../../components/CoursesModal'

const Courses = () => {
 
  return (<>
    <div>
      <PageHeader icon={'+'} onClick={()=>alert('hi')}>Courses</PageHeader>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col w-11/12 gap-2 p-2 mt-8 md:w-8/12'>
          <CoursesRow />
          <CoursesRow />
          <CoursesRow />
          <CoursesRow />
        </div>
      </div>
    </div>

  </>
  )
}

export default Courses