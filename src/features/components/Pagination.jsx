import React, { useState, useEffect } from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, resetPaginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const leftIconsClick = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };
  const rightIconsClick = () => {
    if (currentPage !== pageNumbers[pageNumbers.length - 1]) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };
  useEffect(() => {
    resetPaginate && setCurrentPage(1);
  }, [currentPage, resetPaginate]);
  return (
    <div className="flex text-gray-700">
      <div
        className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
        onClick={leftIconsClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-left w-6 h-6"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
      <div className="flex h-12 font-medium rounded-full bg-gray-200">
        {pageNumbers.map((page) => (
          <div
            key={page}
            className={`w-12  justify-center items-center flex  cursor-pointer leading-5 transition duration-150 ease-in hover:bg-gray-300 rounded-full ${
              page === currentPage ? "bg-gray-600 text-white hover:bg-gray-800" : ""
            }`}
            onClick={() => {
                setCurrentPage(page);
                paginate(page);
              }}
          >
            {page}
          </div>
        ))}
      </div>
      <div
        className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
        onClick={rightIconsClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-right w-6 h-6"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
