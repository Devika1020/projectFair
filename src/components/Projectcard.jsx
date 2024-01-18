import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
function Projectcard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>

    <Card className='shadow mb-5 btn' style={{ width: '20rem' }} onClick={handleShow}>
      <Card.Img variant="top" src="https://i.postimg.cc/QtsKNW66/images.png" />
      <Card.Body>
        <Card.Title>Ecommerce App Development</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img className='img-fluid' src="https://i.postimg.cc/QtsKNW66/images.png" alt="Project Img" />
            </Col>
            <Col sm={12} md={6}>
              <h2 className="fw-bolder text-primary"> Title</h2>
              <p>Project Overview : <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis modi optio animi dolore! Quaerat nisi cupiditate veritatis laudantium impedit, repellat eligendi, vero soluta nemo eius optio incidunt possimus ipsum.</span>
              </p>
              <p>Languages Used: <span className='fw-bolder text-danger'> HTML,CSS,JS</span></p>
            </Col>

          </Row>
          <div className='mt-3'>
            <a href="https://github.com/" target='_blank' className='btn'><i className='fa-brands fa-github fa-2x' ></i></a>
            <a href="www.github.com" target='_blank' className='btn'><i className='fa-solid fa-link fa-2x' ></i></a>

          </div>
        </Modal.Body>
       
          
        
      </Modal>
   
   </>
  )
}

export default Projectcard