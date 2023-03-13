import React from 'react';
import { useSelector,useDispatch } from 'react-redux'

import Rodal from 'rodal';
// include styles
import 'rodal/lib/rodal.css';

import { setModal } from '../../../app/Slices/NotificationSlice';
import NotificationRow from './NotificationRow';

function TutorNotificationModal() {
    const {modal,notifications}=useSelector(state=>state.notification)
    const dispatch=useDispatch()
    const toggle=()=>{
        dispatch(setModal())
    }
    console.log('inside modal is ',modal);
  return (
    <div>
      <Rodal visible={modal} onClose={toggle} animation='slideUp' width={500} height={500}>
        <div className='text-xl'>Notifications</div>
        <div className='flex flex-col items-center justify-center gap-2 pt-3'>
          {
            notifications.map((notification,index)=>(
                <NotificationRow key={index} notification={notification}/>
            ))
          }
        </div>
      </Rodal>
    </div>
  );
}

export default TutorNotificationModal;