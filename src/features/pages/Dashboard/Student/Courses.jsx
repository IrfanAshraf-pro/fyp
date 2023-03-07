import React, {  useState,useEffect } from 'react'
import PageHeader from '../../../components/PageHeader'
import CoursesRow from '../../../components/Student/CoursesRow'
import CourseModal from '../../../components/Student/CoursesModal'
import { GetAllCourses } from '../../../../repository/TemporaryCalss/CoursesFunctions'

const Courses = () => {
  const [modal, setModal] = useState(false);
  const [courses, setCourses] = useState([]);

  const gettingAllCoursesData=async()=>{
    const response=await GetAllCourses()
    console.log(response);
    setCourses(response)
  }
  const gettingStudentEnrolledCourses=()=>{

  }

  const toggle = () => setModal(!modal);
  //calling all course api on load
  useEffect(()=>{
    gettingAllCoursesData()
  },[])

  return (<>
    <div>
      <PageHeader icon={'+'} onClick={toggle}>Courses</PageHeader>
      <div className='flex items-center justify-center'>
        <div className=''>
        <CourseModal modal={modal} toggle={toggle} courses={courses.slice(1,7)}/>
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