import React, { Fragment, useState, useRef } from 'react'
import PageHeader from '../../../components/PageHeader'
import CoursesRow from '../../../components/Student/CoursesRow'
import CourseModal from '../../../components/Student/CoursesModal'

const Courses = () => {
  const [modal, setModal] = useState(false);
  

  const toggle = () => setModal(!modal);

  return (<>
    <div>
      <PageHeader icon={'+'} onClick={toggle}>Courses</PageHeader>
      <div className='flex items-center justify-center'>
        <div className=''>
        <CourseModal modal={modal} toggle={toggle}/>
        </div>
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