import React from "react";
import { openDrawer } from "../../app/Slices/drawerSlice";
import { useDispatch } from 'react-redux'
import MenuIcon from '../../assests/menuicon.svg';
const PageHeader = ({ children, icon='',onClick }) => {
  const dispatch=useDispatch()
  const oDrawer=()=>{
      dispatch(openDrawer())
  }
  return (
    <div className="flex items-center w-full p-2 py-3 bg-gray-900">
       <div className="flex-none lg:hidden">
    <button className="btn btn-square btn-ghost" onClick={()=>oDrawer()}>
     <img src={MenuIcon} className="inline-block w-5 h-5 stroke-current" />
    </button>
  </div>
      <h1
        className={`text-3xl text-white ms-md-4  capitalize ${
          icon ? "w-11/12" : "w-full"
        }`}
      >
        {children}
      </h1>
      {(icon && icon!='')  && (
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
