import React from 'react';
import { useSelector } from 'react-redux'
//Api call
import { EnrollingCourse } from '../../../repository/TemporaryCalss/CoursesFunctions'

import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';
import CourseModalItem from './CourseModalItem';

function CourseModal({ modal, toggle, courses = [],setIsUpdated }) {
  const selector = useSelector(state => state.auth)

  const EnrolligCourseCall = async (courseid) => {
    const response =await EnrollingCourse(selector.role, selector.user.email, courseid)
    console.log('response is ',response);
    if (response === 'Course Enlisted Successfully') {
      console.log('inside if ');
      toggle()
      setIsUpdated(true)
    }
  }
  return (
    <div>
      <Rodal visible={modal} onClose={toggle} animation='slideUp' width={500} height={500}>
        <div className='text-xl'>Add Courses</div>
        <div className='flex flex-col items-center justify-center gap-2 pt-3'>
          {
            courses.map(course => (
              <CourseModalItem key={course.courseid} EnrolligCourseCall={EnrolligCourseCall} course={course} />
            ))
          }
        </div>
      </Rodal>
    </div>
  );
}

export default CourseModal;