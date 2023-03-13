import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'

import Rodal from 'rodal';
// include styles
import 'rodal/lib/rodal.css';
import { EnrollingCourse } from '../../../repository/TemporaryCalss/CoursesFunctions';
import Pagination from '../Pagination';
import TutorCourseModalItem from './TutorCourseModalItem';

const TutorCourseModal = ({ modal, toggle, courses = [], setIsUpdated }) => {
  const [windowSize,setWindowSize]=useState({width:0,height:0})
 // Pagination states mine
 const [currentPage, setCurrentPage] = useState(1);
 const [itemsPerPage] = useState(8);
 const [resetPaginate, setResetpaginate] = useState(false);
 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);
 const paginate = (page) => {
   setCurrentPage(page);
   setResetpaginate(false);
 };


  const selector = useSelector(state => state.auth)


  const EnrolligCourseCall = async (courseid,coursegrade) => {
    const response = await EnrollingCourse(selector.role, selector.user.email, courseid,coursegrade)
    console.log('response is ', response);
    if (response === 'Course Enlisted Successfully') {
      console.log('inside if ');
      toggle()
      setIsUpdated(true)
    }
  }
  const updateWindowSize=()=>{
    setWindowSize({width:window.innerWidth,height:window.innerHeight})
  }
  useEffect(()=>{
    updateWindowSize()
    window.addEventListener('resize',updateWindowSize())
  },[])
  return (
    <div>
      <Rodal visible={modal} onClose={toggle} animation='slideUp' width={500} height={600}>
        <div className='text-xl'>Add Courses</div>
        <div className='flex flex-col items-center justify-center gap-2 mt-6'>
          {
            currentItems.map(course => (
              <TutorCourseModalItem toggle={toggle} key={course.courseid} EnrolligCourseCall={EnrolligCourseCall} course={course} />

            ))
          }
           <div className="mt-8 mx-auto">
             <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={courses.length}
              paginate={paginate}
              resetPaginate={resetPaginate}
            />
            </div>
        </div>
      </Rodal>
    </div>
  )
}

export default TutorCourseModal