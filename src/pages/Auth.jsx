import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import test1 from '../assets/test1.jpg'
import { Form, Spinner } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';

function Auth({insideRegister}) {
  const navigate=useNavigate()
  const [loginStatus,setLoginStatus]=useState(false)
const [userInputData,setUserInputData] =useState({
  username:"",email:"",password:""
})

const handleRegister=async(e)=>{
e.preventDefault()
// console.log(userInputData);
const {username,email,password}=userInputData
if(!username ||!email||!password){
toast.info("please fill the form completely")
}else{
// toast.info("Proceed to register api")
try{
const result =await registerAPI(userInputData)
console.log(result);
if(result.status==200){
  toast.success(`'welcome ${result.data.username}...Please Login to explore our Project Fair '`)
setUserInputData({username:"",email:"",password:""})
// navigate to login
setTimeout(()=>
{
  navigate("/login")
},2000)
}
}
catch(err){
console.log(err);
}
}
}

const handleLogin=async(e)=>{
  e.preventDefault()
  // console.log(userInputData);
  const {email,password}=userInputData
  if(!email||!password){
  toast.info("please fill the form completely")
  }else{
  // toast.info("Proceed to register api")
  try{
  const result =await loginAPI({email,password})
  console.log(result);
  if(result.status==200){
    sessionStorage.setItem("username",result.data.existingUser.username)
    sessionStorage.setItem("token",result.data.token)
    sessionStorage.setItem("userDetails",JSON.stringify(result.data.existingUser))
    setLoginStatus(true)
  setTimeout(()=>
{
  setUserInputData({email:"",password:""})
  navigate("/")
  setLoginStatus(false)
},2000)
 }else{
toast.error(result.response.data)
  }
  }
  catch(err){
  console.log(err);
  }
  }
  }
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
    <Form.Control type="text" placeholder="Enter Username" value={userInputData.username} 
    onChange={e=>setUserInputData({...userInputData,username:e.target.value})}/>
  </Form.Group>
  }
      <Form.Group className="mb-3" controlId="formBasicEmail"> 
        <Form.Control type="email" placeholder="Enter email"value={userInputData.email} 
    onChange={e=>setUserInputData({...userInputData,email:e.target.value})}  />
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicPass"> 
        <Form.Control type="password" placeholder="Enter Password"value={userInputData.password} 
    onChange={e=>setUserInputData({...userInputData,password:e.target.value})} />
      </Form.Group> 
      
    </Form>
    {
        insideRegister?      
        <div>
          <button onClick={handleRegister} className='btn btn-light mb-2'>Register</button>
          <p>Already have account? Click here to <Link to={'/login'} className='text-light'>Login</Link></p>
        </div>:
        <div>
        <button onClick={handleLogin} className='btn btn-light mb-2'>Login {loginStatus&& <Spinner  animation="border" variant="info" />} </button>
        

        <p>New User? Click here to <Link to={'/register'} className='text-light'>Register</Link></p>
      </div>
      }
    </div>

  </div>
  </div>
      </div>
      </div>
      <ToastContainer autoClose={3000}  />
      </div>
  )
}

export default Auth