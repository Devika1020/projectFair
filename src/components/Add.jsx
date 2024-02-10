import React, { useContext, useEffect, useState } from 'react'
import { Modal,Button } from 'react-bootstrap'
import add from '../assets/add.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../services/allAPI';
import { addResponseContext } from '../Context/ContextShare';
function Add() {
const {addResponse,setAddResponse}=useContext(addResponseContext)

  const [projectData,setProjectData]=useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImage:""
  })

const[imgfileStatus,setimgFilestatus]=useState(false)
const[preview,setPreview]=useState("")

useEffect(()=>{
  if(projectData.projectImage?.type=="image/png"||projectData.projectImage?.type=="image/jpg"||projectData.projectImage?.type=="image/jpeg"){
    // generate image url
    setimgFilestatus(true)
    setPreview(URL.createObjectURL(projectData.projectImage))
  }else{
    setPreview("")
    setimgFilestatus(false)
  }
},[projectData.projectImage])

  console.log(projectData);
  const [show,setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>{
    setShow(false)
   setProjectData ({title:"",languages:"",overview:"",github:"",website:"",projectImage:""})
  //  setPreview(add)
  }

  const handleSave=async()=>{
     
    const {title,languages,github,website,overview,projectImage}=projectData
    if(!title||!languages||!github||!website||!overview||!projectImage){
    toast.success("please fill the form completely")
    }else{
    const reqBody=new FormData()
    reqBody.append("title",title)
    reqBody.append("languages",languages)
    reqBody.append("github",github)
    reqBody.append("website",website)
    reqBody.append("overview",overview)
    reqBody.append("projectImage",projectImage)
    const token=sessionStorage.getItem("token")
    if(token){
   const reqHeader={
      "Content-Type":"multipart/form-data",
      "Authorization":`Bearer ${token}`
    }
    console.log("proceed to api call");
    try{
      const result =await addProjectAPI(reqBody,reqHeader)
      console.log(result);
      if(result.status===200){
        // toast.success(`New Project"${result.data.title}"has added`);
        setAddResponse(result.data)
        handleClose()
      }else{
        toast.warning(result.response.data)
      }

    }catch(err){
      console.log(err);
    }
    }
    }
  }

  return (
    <>
    <button onClick={handleShow} className='btn btn-link text-success ms-auto'><i className='fa-solid fa-plus'>Add Project</i></button>
    <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-6'>
<label className='align-items-center d-flex justify-content-center'>
  <input type="file" style={{display:'none'}} onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})}/>
  <img src={preview?preview:add} alt="project upload pic" height={'200px'}  />
</label><br />

{!imgfileStatus&&  <div className='text-danger ms-4  ' ><h6>*upload only the following file types (jpg, jpeg, png)*</h6></div>
}  
          </div>
          
          <div className='col-lg-6'>
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Project Title' value={projectData.title}onChange={e=>setProjectData({...projectData,title:e.target.value})}/>
  
</div>  
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Language Used'value={projectData.languages}onChange={e=>setProjectData({...projectData,languages:e.target.value})}/>
  
</div> 
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Project Github Link'value={projectData.github}onChange={e=>setProjectData({...projectData,github:e.target.value})}/>
  
</div>     
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Project Website Link' value={projectData.website}onChange={e=>setProjectData({...projectData,website:e.target.value})}/>
  
</div>
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Project Overview' value={projectData.overview}onChange={e=>setProjectData({...projectData,overview:e.target.value})}/>
  
</div>
    </div>

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>    <ToastContainer autoClose={3000}/>
    </>
  )
}

export default Add