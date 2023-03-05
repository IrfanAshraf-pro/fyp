import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

function CourseModal({modal,toggle}) {


  return (
    <div className='d-flex align-items-center justify-content-center'>
      <Rodal visible={modal} onClose={toggle} animation='slideUp' width={500}>
          <div>Content</div>
        </Rodal>      
    </div>
  );
}

export default CourseModal;