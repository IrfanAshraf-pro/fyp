import React from "react";
import { useState } from "react";
import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";

const TutorCourseModalItemInputModal = ({ toggle, inputModal, toggleInputModal, course, EnrolligCourseCall }) => {
  const [courseGrade, setCourseGrade] = useState('')
  const handleToggle = () => {
    toggleInputModal()
  }
  const onClick = () => {
    if (courseGrade !== '' && courseGrade !== null) {
      EnrolligCourseCall(course.courseid, courseGrade)
      handleToggle()
    }
  }
  return (
    <div>
      <Rodal
        visible={inputModal}
        onClose={toggleInputModal}
        animation="slideUp"
        width={400}
        height={200}
      >
        <div className="text-xl">Enter Grade of Course</div>
        <div className="flex flex-col items-center justify-center gap-2 pt-3">
          <input
            type="text"
            placeholder="Enter your Grade"
            className="w-full max-w-xs input input-bordered sm:w-9/12"
            value={courseGrade}
            onChange={(e) => setCourseGrade(e.target.value)}
          />
          <button
            onClick={onClick}
            className="mt-3 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add
          </button>
        </div>
      </Rodal>{" "}

    </div>
  );
};

export default TutorCourseModalItemInputModal;
