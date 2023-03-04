import React from "react";
import AdminFeeRow from "../../../components/Admin/AdminFeeRow";
import PageHeader from "../../../components/PageHeader";
const Fee = () => {
  return (
    <div className="">
      <PageHeader>Fee</PageHeader>
      <div className="mt-6">
      <div className="max-w-md mx-auto">
        <div className="relative flex items-center w-full h-12 overflow-hidden bg-white rounded-lg ring-1 ring-primary focus-within:shadow-lg">
          <div className="grid w-12 h-full text-gray-300 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className="w-full h-full pr-2 text-sm text-gray-700 outline-none peer"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-11/12 p-4 px-4 mt-8 bg-gray-500 rounded-sm md:w-8/12">
          <p className='text-base font-bold sm:text-xl text-primary'>Tutor Name</p>
          <p className='text-base font-bold sm:text-xl text-primary'>Student Name</p>
          <p className='text-base font-bold sm:text-xl text-primary'>Pending Fee</p>
        </div>
        <div className="flex flex-col w-11/12 gap-2 p-2 mt-4 md:w-8/12">
          <AdminFeeRow/>
          <AdminFeeRow/>
          <AdminFeeRow/>
          <AdminFeeRow/>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Fee;
