import React ,{useState}from 'react'
import { Collapse } from 'react-bootstrap'
import up1 from '../assets/up1.jpg'
function Profile() {
  const [open,setOpen]=useState(false)
  return (
    <div className='border rounded p-2'>
      <div className='d-flex justify-content-between'>
        <h3>    Profile</h3>
        <button onClick={()=>setOpen(!open)} className='btn btn-outline-secondary' ><i className='fa-solid fa-caret-down'></i></button>
      </div>
      <Collapse in={open}>
        <div className='text-center' id="example-collapse-text">
   <label ><input type="file" style={{display:'none'}} />
   <img width="200px" height="150px" className='img-fluid' src={up1} alt="upload file" /></label>
      
       <form >   
       <br />    
        <div className='mb-3'><input type="text" className='rounded p-1 w-100' placeholder='Enter your Github link here' /></div>
        <div className='mb-3'><input type="text" className='rounded p-1 w-100' placeholder='Enter your LinkedIn link here' /></div>
        <div className='mb-3'><button className='btn btn-warning '>Update</button></div>
</form>
       </div>
      </Collapse>
    </div>
  )
}

export default Profile