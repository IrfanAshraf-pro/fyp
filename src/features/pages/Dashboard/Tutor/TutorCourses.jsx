import React,{useState} from 'react'
import PageHeader from '../../../components/PageHeader'
import TutorCoursesRow from '../../../components/Tutor/TutorCoursesRow'
import TutorCourseModal from '../../../components/Tutor/TutorCourseModal'
const TutorCourses = () => {
  const [modal, setModal] = useState(false);
  

  const toggle = () => setModal(!modal);

  return (
    <div>
        <PageHeader icon={'+'} onClick={toggle}>Courses</PageHeader>
        <div className='flex items-center justify-center'>
          <div>
            <TutorCourseModal modal={modal} toggle={toggle}/>
          </div>
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