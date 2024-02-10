import React, { useEffect, useState } from 'react'
import { Modal,Button } from 'react-bootstrap'
import add from '../assets/add.jpg'
import SERVER_URL from '../services/serverUrl'

function Edit({project}) {
  const [show,setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>{
    setShow(false)
    setProjectData({   id:project._id, title:project.title,languages:project.languages,overview:project.overview,github:project.github,website:project.website,projectImage:""
  })
  setPreview("")
  }
  const[preview,setPreview]=useState("")
  const [projectData,setProjectData]=useState({
   id:project._id, title:project.title,languages:project.languages,overview:project.overview,github:project.github,website:project.website,projectImage:""
  })
  useEffect(()=>{
    if(projectData.projectImage){
      setPreview(URL.createObjectURL(projectData.projectImage))
    }else{
      setPreview("")
    
    }
  },[projectData.projectImage])
  
    console.log(projectData);
  return (
    <>
    <button onClick={handleShow} className='btn btn-link text-success'><i className='fa-solid fa-edit'></i></button>
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
            <div className='col-lg-4'>
<label className='align-items-center d-flex justify-content-center'>
  <input type="file" style={{display:'none',}}  onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})}/>
  <img height={'200px'} width={'200px'} src={preview?preview:`${SERVER_URL}/uploads/${project.projectImage}`}  alt="project upload pic" />
</label>
            </div>
          
          <div className='col-lg-8'>
<div className='mb-3'>
  <input type="text" className='border p-2 w-100 form-control' placeholder='Project Title'value={project.title}onChange={e=>setProjectData({...projectData,title:e.target.value})}/>
  
</div>  
<div className='mb-3'>
  <input type="text" className='border p-2 w-100 form-control' placeholder='Language Used'value={project.languages}/>
  
</div> 
<div className='mb-3'>
  <input type="text" className='border p-2 w-100 form-control' placeholder='Project Github Link'value={project.github}/>
  
</div>     
<div className='mb-3'>
  <input type="text" className='border p-2 w-100 form-control' placeholder='Project Website Link'value={project.website}/>
  
</div>
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Project Overview'value={project.overview}/>
  
</div>
    </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit