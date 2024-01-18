import React from 'react'
import { Link } from 'react-router-dom'
import test1 from '../assets/test1.jpg'
import { Form } from 'react-bootstrap'

function Auth({insideRegister}) {
  return (
    <div style={{width:"100%",height:"100vh"}} className='d-flex justify-content-center align-items-center'>
    <div className='container w-75' >
<Link to={'/'} style={{textdecoration:"none"}} className='text-dark'> <i className='fa-solid fa-arrow-left '> Back to Home</i> </Link>
      <div className='card-shadow p-5 'style={{backgroundColor:'#369'}}>
<div className='row align-items-center'> 
<div className='col-lg-6'>
  <img className='w-100' src={test1} alt="" />
  </div>
  <div className='col-lg-6'>
    <div className='fw-bolder text-light mt-2'>
 <i style={{height:'41px'}} className='fa-solid fa-hands-holding-circle'> Project Fair</i>
 <h5>Sign {insideRegister?'Up':'In'} to your account</h5>
 <Form>
  {
    insideRegister&&
    <Form.Group className="mb-3" controlId="formBasicunam"> 
    <Form.Control type="text" placeholder="Enter Username" />
  </Form.Group>
  }
      <Form.Group className="mb-3" controlId="formBasicEmail"> 
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicPass"> 
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group> 
      
    </Form>
    {
        insideRegister?      
        <div>
          <button className='btn btn-light mb-2'>Register</button>
          <p>Already have account? Click here to <Link to={'/login'} className='text-light'>Login</Link></p>
        </div>:
        <div>
        <button className='btn btn-light mb-2'>Login</button>
        <p>New User? Click here to <Link to={'/register'} className='text-light'>Register</Link></p>
      </div>
      }
    </div>

  </div>
  </div>
      </div>
      </div>
      </div>
  )
}

export default Auth