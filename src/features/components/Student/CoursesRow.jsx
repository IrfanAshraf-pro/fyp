import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { FindTutor } from '../../../repository/TemporaryCalss/CoursesFunctions';
import FindTutorModal from './FindTutorModal';

const CoursesRow = ({course}) => {
  const [modal, setModal] = useState(false);
  const [tutorsList,setTutorsList]=useState([])
  const {user}=useSelector(state=>state.auth)
  const toggle = () => setModal(!modal);

  const onClick=async()=>{
    toggle()
    const response=await FindTutor(user.email,course.courseid)
    console.log('tutors list response is ',response);
    setTutorsList(response)
  }
  return (
    <>
    <div className=''>
          <FindTutorModal modal={modal} toggle={toggle} course={course} tutorsList={tutorsList}/>
        </div>
    <div className='p-2 px-3 md:px-5 bg-slate-500 d-flex justify-content-between align-items-center rounded-3'>
        <p className='-mb-[1px] text-base md:text-xl text-white'>{course.coursename}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-base md:text-xl py-1 px-3 hover:shadow rounded-2 " onClick={onClick}>
            Find Tutor
        </button>
    </div>
    </>
  )
}

export default CoursesRow