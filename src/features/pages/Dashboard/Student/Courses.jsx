import React, { useState, useEffect, useMemo } from "react";
import PageHeader from "../../../components/PageHeader";
import CoursesRow from "../../../components/Student/CoursesRow";
import CourseModal from "../../../components/Student/CoursesModal";
import {
  GetAllCourses,
  GetAllEnrolledCourses,
} from "../../../../repository/TemporaryCalss/CoursesFunctions";
import { useSelector } from "react-redux";
import Pagination from "../../../components/Pagination";
// import Paginationn from "../../../components/Paginationn";

const Courses = () => {
  const [modal, setModal] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  // Pagination states mine
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [resetPaginate, setResetpaginate] = useState(false);

  // pagination -codecamp
  // const [currentPage, setCurrentPage] = useState(1);
  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return enrolledCourses.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  const { role, user } = useSelector((state) => state.auth);

  const gettingAllCoursesData = async () => {
    const response = await GetAllCourses();
    console.log(response);
    setCourses(response);
  };
  const gettingStudentEnrolledCourses = async () => {
    console.log("getting all student enrolled courses");
    const response = await GetAllEnrolledCourses(role, user.email);
    console.log("all enrolled courses are :", response);
    setEnrolledCourses(response);
    // pagination mine
    // setCurrentPage(1);
    // setResetpaginate(true);
  };

  const toggle = () => setModal(!modal);
  //calling all course api on load
  useEffect(() => {
    gettingAllCoursesData();
    gettingStudentEnrolledCourses();
  }, []);
  //rerendering after course is added
  useEffect(() => {
    gettingStudentEnrolledCourses();
  }, [isUpdated]);

  // pagination mine
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = enrolledCourses.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (page) => {
    setCurrentPage(page);
    setResetpaginate(false);
  };
  return (
    <>
      <div>
        <PageHeader icon={"+"} onClick={toggle}>
          Courses
        </PageHeader>
        <div className="flex items-center justify-center">
          <div className="">
            <CourseModal
              modal={modal}
              toggle={toggle}
              setIsUpdated={setIsUpdated}
              courses={courses}
            />
          </div>
          <div className="flex flex-col w-11/12 gap-2 p-2 mt-8 md:w-8/12">
            {currentItems.map((course) => (
              <CoursesRow key={course.courseid} course={course} />
            ))}
            <div className="mt-8 mx-auto">
             <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={enrolledCourses.length}
              paginate={paginate}
              resetPaginate={resetPaginate}
            />
              {/* by code camp 
              <Paginationn
                currentPage={currentPage}
                totalCount={enrolledCourses.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
