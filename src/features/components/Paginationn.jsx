// import React from "react";
// import { usePagination, DOTS } from "../CustomHooks/pagination/usePagination";
// const Paginationn = (props) => {
//   const {
//     onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
    
//   } = props;

//   const paginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize,
//   });
//   // If there are less than 2 times in pagination range we shall not render the component
//   if (currentPage === 0 || paginationRange.length < 2) {
//     return null;
//   }

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };
//   let lastPage = paginationRange[paginationRange.length - 1];
//   return (
//     <ul className="flex text-gray-700 list-none">
//          {/* Left navigation arrow */}
//       <li
//         className={`h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer ${currentPage===1 && 'disabled'}`}
//                 onClick={onPrevious}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="100%"
//           height="100%"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="feather feather-chevron-left w-6 h-6"
//         >
//           <polyline points="15 18 9 12 15 6"></polyline>
//         </svg>
//       </li>
//       <div className="flex h-12 font-medium rounded-full bg-gray-200">
//       {paginationRange.map(pageNumber => {
//          if (pageNumber === DOTS) {
//             return <li className="bg-red-300">&#8230;</li>;
//           }
//            // Render our Page Pills
//          return(
//             <li
//             key={pageNumber}
//             className={`w-12  justify-center items-center flex  cursor-pointer leading-5 transition duration-150 ease-in hover:bg-gray-300 rounded-full ${
//               page === currentPage ? "bg-gray-600 text-white hover:bg-gray-800" : ""
//             }`}
//             onClick={() => onPageChange(pageNumber)}
//           >
//             {pageNumber}
//           </li>
//          )
//         })}
//       </div>
//       <li
//         className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
//         onClick={onNext}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="100%"
//           height="100%"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="feather feather-chevron-right w-6 h-6"
//         >
//           <polyline points="9 18 15 12 9 6"></polyline>
//         </svg>
//       </li>
//     </ul>
//   )
// };

// export default Paginationn;
