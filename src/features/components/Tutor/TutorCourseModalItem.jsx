import React, { useState } from "react";
import TutorCourseModalItemInputModal from "./TutorCourseModalItemInputModal";

const TutorCourseModalItem = ({ toggle }) => {
  const [inputModal, setInputModal] = useState(false);
  const toggleInputModal = () => setInputModal(!inputModal);
  return (
    <div className="flex items-center justify-between px-3 py-1.5 bg-gray-800 w-75 rounded-3">
      <div className="flex items-center justify-center gap-3 text-white ">
        <p className="-mb-[1px]">CS-333</p>
        <p className="-mb-[1px]">PF</p>
      </div>
      <button
        className="px-3 py-1 text-white rounded-pill bg-primary"
        onClick={toggleInputModal}
      >
        Add Course
      </button>
      {inputModal && (
        <TutorCourseModalItemInputModal
          toggle={toggle}
          inputModal={inputModal}
          toggleInputModal={toggleInputModal}
        />
      )}
    </div>
  );
};

export default TutorCourseModalItem;
