import React, { useState, useEffect } from 'react'
import PageHeader from '../../../components/PageHeader'
import CoursesRow from '../../../components/Student/CoursesRow'
import CourseModal from '../../../components/Student/CoursesModal'
import { GetAllCourses, GetAllEnrolledCourses } from '../../../../repository/TemporaryCalss/CoursesFunctions'
import { useSelector } from 'react-redux'

const Courses = () => {
  const [modal, setModal] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const { role, user } = useSelector(state => state.auth)

  const gettingAllCoursesData = async () => {
    const response = await GetAllCourses()
    console.log(response);
    setCourses(response)
  }
  const gettingStudentEnrolledCourses = async () => {
    console.log('getting all student enrolled courses');
    const response = await GetAllEnrolledCourses(role, user.email);
    console.log('all enrolled courses are :', response);
    setEnrolledCourses(response)
  }

  const toggle = () => setModal(!modal);
  //calling all course api on load
  useEffect(() => {
    gettingAllCoursesData()
    gettingStudentEnrolledCourses()
  }, [])
  //rerendering after course is added
  useEffect(()=>{
    gettingStudentEnrolledCourses()
  },[isUpdated])

  return (<>
    <div>
      <PageHeader icon={'+'} onClick={toggle}>Courses</PageHeader>
      <div className='flex items-center justify-center'>
        <div className=''>
          <CourseModal modal={modal} toggle={toggle} setIsUpdated={setIsUpdated} courses={courses.slice(1, 7)} />
        </div>
        <div className='flex flex-col w-11/12 gap-2 p-2 mt-8 md:w-8/12'>
          {
            enrolledCourses.map(course => (
              <CoursesRow key={course.courseid} course={course} />
            ))
          }
        </div>
      </div>
    </div>

  </>
  )
}

export default Courses