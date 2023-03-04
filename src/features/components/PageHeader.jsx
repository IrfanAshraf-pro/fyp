import React from "react";

const PageHeader = ({ children, icon='+',onClick }) => {
  return (
    <div className="p-2 py-3 bg-gray-700 w-full flex items-center">
      <h1
        className={`text-3xl text-primary text-center capitalize ${
          icon ? "w-11/12" : "w-full"
        }`}
      >
        {children}
      </h1>
      {icon && (
        <div className="text-center flex items-center justify-center w-1/12 ">
          <button className="btn btn-circle bg-gray-900 hover:bg-gray-500" onClick={onClick}>
            {icon}
          </button>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
