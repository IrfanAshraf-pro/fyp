import React from "react";

const PageHeader = ({ children, icon='+',onClick }) => {
  return (
    <div className="flex items-center w-full p-2 py-3 bg-gray-700">
      <h1
        className={`text-3xl text-white ms-md-4  capitalize ${
          icon ? "w-11/12" : "w-full"
        }`}
      >
        {children}
      </h1>
      {icon && (
        <div className="flex items-center justify-center w-1/12 text-center ">
          <button className="text-bg-light rounded-circle btn btn-circle" onClick={onClick}>
            {icon}
          </button>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
