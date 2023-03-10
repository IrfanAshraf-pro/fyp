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
          <FindTutorModal modal={modal} toggle={toggle} tutorsList={tutorsList}/>
        </div>
    <div className='p-2 px-5 bg-gray-400 d-flex justify-content-between align-items-center rounded-4'>
        <p className='-mb-[1px] text-xl text-white'>{course.coursename}</p>
        <button className="btn btn-primary rounded-4 " onClick={onClick}>
            Find Tutor
        </button>
    </div>
    </>
  )
}

export default CoursesRow