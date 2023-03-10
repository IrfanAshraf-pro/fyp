import React from 'react';
import { useSelector } from 'react-redux'
//Api call

import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';
import FindTutorRow from './FindTutorRow';

function FindTutorModal({ modal, toggle,tutorsList }) {
    console.log('tutors list is ',tutorsList);
  return (
    <div>
      <Rodal visible={modal} onClose={toggle} animation='slideUp' width={500} height={500}>
        <div className='text-xl'>Find Tutor</div>
        <div className='flex flex-col items-center justify-center gap-2 pt-3'>
           {
            tutorsList.map((tutor)=>(
                <FindTutorRow tutor={tutor}/>
            ))
           }
        </div>
      </Rodal>
    </div>
  );
}

export default FindTutorModal;