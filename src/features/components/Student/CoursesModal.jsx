import React  from 'react';

import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';
import CourseModalItem from './CourseModalItem';

function CourseModal({modal,toggle}) {
  return (
    <div>
      <Rodal visible={modal} onClose={toggle} animation='slideUp' width={500} height={500}>
          <div className='text-xl'>Add Courses</div>
          <div className='flex flex-col items-center justify-center gap-2 pt-3'>
              <CourseModalItem/>
              <CourseModalItem/>
              <CourseModalItem/>
              <CourseModalItem/>
          </div>
        </Rodal>      
    </div>
  );
}

export default CourseModal;