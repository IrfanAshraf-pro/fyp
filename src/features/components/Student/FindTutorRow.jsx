import React from 'react'
import {Button} from 'reactstrap'

const FindTutorRow = ({tutor}) => {
    const RequestTutor=()=>{
        alert('requesting Tutor')
    }
  return (
    <div className='w-[80%] flex items-center rounded-2 justify-between py-2 px-4 bg-gray-400 rounded-sm'>
        <p className='w-4/12 text-xl text-white -mb-[1px]'>{tutor.name}</p>
        <p className='w-4/12 text-xl text-white -mb-[1px]'>{tutor.cgpa}</p>
        <Button className="text-white  bg-primary border border-primary py-1" onClick={RequestTutor}>
            Request
        </Button>
    </div>
  )
}

export default FindTutorRow