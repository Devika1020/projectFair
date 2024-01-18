
import Projectcard from '../components/Projectcard'


import React from 'react'
import Header from '../components/Header'
import { Row ,Col} from 'react-bootstrap'



function Projects() {
  return (
 <>
    <Header/>
    <div style={{marginTop:"150px"}} className='container-fluid'>
      <div className="d-flex justify-content-between">
        <h1 className='ms-5'>All Projects</h1>
        <input style={{width:"300px"}} className='rounded p-2' type="text" placeholder='Search Projects by its Language'/>
      </div>
      <Row className='mt-5'>
        <Col sm={12} md={4} lg={4}>
          <Projectcard/>
        </Col>
      </Row>
    </div>
</>
  )
}

export default Projects