import React, { useState } from 'react'
import { Modal,Button } from 'react-bootstrap'
import add from '../assets/add.jpg'

function Edit() {
  const [show,setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>setShow(false)
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
  <input type="file" style={{display:'none',}}/>
  <img src={add}  alt="project upload pic" />
</label>
            </div>
          
          <div className='col-lg-8'>
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Project Title'/>
  
</div>  
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Language Used'/>
  
</div> 
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Project Github Link'/>
  
</div>     
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Project Website Link'/>
  
</div>
<div className='mb-3'>
  <input type="text" className='border p-2 w-100' placeholder='Project Overview'/>
  
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