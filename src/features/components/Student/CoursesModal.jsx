import React,{useState} from "react";
import { useSelector } from "react-redux";

import CourseModalItem from "./CourseModalItem";
import Pagination from "../Pagination";
//modal
import Rodal from "rodal";
// include styles
import "rodal/lib/rodal.css";

//Api call
import { EnrollingCourse } from "../../../repository/TemporaryCalss/CoursesFunctions";

function CourseModal({ modal, toggle, courses = [], setIsUpdated }) {
    // Pagination states mine
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const [resetPaginate, setResetpaginate] = useState(false);


  const selector = useSelector((state) => state.auth);

  const EnrolligCourseCall = async (courseid) => {
    const response = await EnrollingCourse(
      selector.role,
      selector.user.email,
      courseid
    );
    console.log("response is ", response);
    if (response === "Course Enlisted Successfully") {
      console.log("inside if ");
      toggle();
      setIsUpdated(true);
    }
  };

    // pagination mine
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (page) => {
      setCurrentPage(page);
      setResetpaginate(false);
    };
  return (
    <div>
      <Rodal
        visible={modal}
        onClose={toggle}
        animation="slideUp"
        width={500}
        height={600}
      >
        <div className="text-xl">Add Courses</div>
        <div className="flex flex-col items-center justify-center gap-2 pt-3">
          {currentItems.map((course) => (
            <CourseModalItem
              key={course.courseid}
              EnrolligCourseCall={EnrolligCourseCall}
              course={course}
            />
          ))}
        </div>
        <div className="mt-8 mx-auto">
             <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={courses.length}
              paginate={paginate}
              resetPaginate={resetPaginate}
            />
            </div>
      </Rodal>
    </div>
  );
}

export default CourseModal;
