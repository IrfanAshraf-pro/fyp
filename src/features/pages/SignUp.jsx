import React from 'react'
import { Col, Input, Row } from 'reactstrap'

const SignUp = () => {
  return (
   <div className='flex items-center justify-center py-4 bg-gradient-to-r from-green-400 to-blue-500 h-100vh'>
     <Row className='container card col-10'>
      <h1>SignUp</h1>
      <Col className='col-12 col-md-6'>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      
      </Col>
      <Col  className='col-12 col-md-6'>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      
      </Col>
    </Row>
   </div>
  )
}

export default SignUp