import React,{useState} from "react";
import { openDrawer } from "../../app/Slices/drawerSlice";
import { useDispatch, useSelector } from 'react-redux'
import MenuIcon from '../../assests/menuicon.svg';
import Notification from '../../assests/notification.png'
import NotificationNull from '../../assests/notification-null.png'
import { setModal} from "../../app/Slices/NotificationSlice";

import TutorNotificationModal from "./Tutor/TutorNotificationModal";
const PageHeader = ({ children, icon='',onClick}) => {
  const {role,user}=useSelector(state=>state.auth)
  const {modal}=useSelector(state=>state.notification)
  const dispatch=useDispatch()
  const oDrawer=()=>{
      dispatch(openDrawer())
  }
  const onNotificationClick=async()=>{
    dispatch(setModal())
  }
  return (
    <div className="flex items-center w-full pr-2 md:px-6 py-3 bg-gray-900">
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
      <div className="flex ">
      {(icon && icon!='')  && (
        <div className="flex items-center justify-center  text-center ">
          <button className="text-bg-light rounded-circle btn btn-circle" onClick={onClick}>
            {icon}
          </button>
        </div>
      )}
      {
        role==="Tutor" && (
          <>
          <div className="flex items-center justify-center  text-center ml-2 ">
          <button className="text-bg-light rounded-circle btn btn-circle" onClick={onNotificationClick}>
            <img src={modal?Notification:NotificationNull} alt="notification" className="w-5 h-5" />
          </button>
        </div>
        <TutorNotificationModal/>
          </>
        )
      }
      </div>
    </div>
  );
};

export default PageHeader;
