import React ,{useEffect, useState}from 'react'
import { Collapse } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import up1 from '../assets/up1.jpg'
import SERVER_URL from '../services/serverUrl'
import { updateUserProfileAPI } from '../services/allAPI';
import { Await } from 'react-router-dom';

function Profile() {
  
  const [open,setOpen]=useState(false)
  const [userData,setUserData]=useState({
username:"",password:"",email:"",linkedin:"",github:"",profileImage:""
  })
  const [existingImage,setExistingImage]=useState("")
  const [preview,setPreview]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("userDetails")){
      const userDetails=JSON.parse(sessionStorage.getItem("userDetails"))
      setUserData({...userData,username:userDetails.username,password:userDetails.password,email:userDetails.email,github:userDetails.github,linkedin:userDetails.linkedin})
    setExistingImage(userDetails.profile)
    }
  },[open])

  useEffect(()=>{
    if(userData.profileImage){
      setPreview(URL.createObjectURL(userData.profileImage))
    }else{
      setPreview("")
    }

  },[userData.profileImage])
console.log(userData);

const handleProfileUpdate=async ()=>{
const {username,password,email,github,linkedin,profileImage}=userData
if(!github||!linkedin){
  toast.info("please fill the form completely")
}
else{
  const reqBody=new FormData()
  reqBody.append("username",username)
  reqBody.append("password",password)
  reqBody.append("email",email)
  reqBody.append("github",github)
  reqBody.append("linkedin",linkedin)
  preview?reqBody.append("profileImage",profileImage):reqBody.append("existingImage",existingImage)
  const token=sessionStorage.getItem("token")
  if(token){
    const reqHeader={
       "Content-Type":preview?"multipart/form-data":"application/json",
       "Authorization":`Bearer ${token}`
     }
    //  apicall
  
    try{
      
      const result=await updateUserProfileAPI(reqBody,reqHeader)
     
      if(result.status==200){

        setOpen(!open)
        sessionStorage.setItem("userDetails",JSON.stringify(result.data))
        handleClose()
      }else{
       console.log(result);
      }

    }catch(err){
      console.log(err);
    }
}
}
}



  return (
    <div className='border rounded p-2'>
      <div className='d-flex justify-content-between'>
        <h3>    Profile</h3>
        <button onClick={()=>setOpen(!open)} className='btn btn-outline-secondary' ><i className='fa-solid fa-caret-down'></i></button>
      </div>
      <Collapse in={open}>
        <div className='text-center' id="example-collapse-text">
   <label ><input type="file" style={{display:'none'}} onChange={e=>setUserData({...userData,profileImage:e.target.files[0]})} />
   {existingImage==""?<img width="200px" height="150px" className='img-fluid' src={preview?preview:up1} alt="upload file" />:
   <img width="200px" height="150px" className='img-fluid' src={preview?preview:`${SERVER_URL}/uploads/${existingImage}`} alt="upload file" />}</label>
      
      
        
        <div className='mt-3'><input type="text" className='form-control ' placeholder='Enter your Github link here' value={userData.github} onChange={e=>setUserData({...userData,github:e.target.value})}/></div>
        <div className='mb-3'><input type="text" className='form-control' placeholder='Enter your LinkedIn link here'value={userData.linkedin} onChange={e=>setUserData({...userData,linkedin:e.target.value})} /></div>
        <div className='mb-3'><button onClick={handleProfileUpdate} className='btn btn-warning '>Update</button></div>

       </div>
      </Collapse>
      <ToastContainer autoClose={3000}  />
    </div>
  )
}

export default Profile