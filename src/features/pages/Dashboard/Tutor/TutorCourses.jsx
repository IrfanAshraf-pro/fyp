import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'

import PageHeader from '../../../components/PageHeader'
import TutorCoursesRow from '../../../components/Tutor/TutorCoursesRow'
import TutorCourseModal from '../../../components/Tutor/TutorCourseModal'
import { GetAllCourses, GetAllEnrolledCourses } from '../../../../repository/TemporaryCalss/CoursesFunctions'

const TutorCourses = () => {
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
  const gettingTutorEnrolledCourses = async () => {
    console.log('getting all Tutor enrolled courses');
    const response = await GetAllEnrolledCourses(role, user.email);
    console.log('all tutor enrolled courses are :', response);
    setEnrolledCourses(response)
  }


  const toggle = () => setModal(!modal);
 
   //calling all course api on load
   useEffect(() => {
    gettingAllCoursesData()
    gettingTutorEnrolledCourses()
  }, [])
  //rerendering after course is added
  useEffect(()=>{
    gettingTutorEnrolledCourses()
    if(isUpdated){
      setIsUpdated(false)
      setModal(false)
    }
  },[isUpdated])
  return (
    <div>
        <PageHeader icon={'+'} onClick={toggle}>Courses</PageHeader>
        <div className='flex items-center justify-center'>
          <div>
            <TutorCourseModal modal={modal} toggle={toggle} setIsUpdated={setIsUpdated} courses={courses.slice(1, 7)}/>
          </div>
        <div className='flex flex-col w-11/12 gap-2 p-2 mt-8 md:w-8/12'>
        {
            enrolledCourses.map(course => (
              <TutorCoursesRow key={course.courseid} course={course} />
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default TutorCourses