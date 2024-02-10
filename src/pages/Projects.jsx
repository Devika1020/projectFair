
import Projectcard from '../components/Projectcard'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row ,Col} from 'react-bootstrap'
import { getallProjectAPI } from '../services/allAPI'



function Projects() {
  const [allProjects,setAllprojects]=useState([])
  const getAllproject=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
   const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
 
    try{
      const result =await getallProjectAPI(reqHeader)
      console.log(result);
      if(result.status===200){
        
        setAllprojects(result.data);
      }

    }catch(err){
      console.log(err);
    }
    }
}
console.log(allProjects);
useEffect(()=>{
  getAllproject()
},[])
  return (
 <>
    <Header/>
    <div style={{marginTop:"150px"}} className='container-fluid'>
      <div className="d-flex justify-content-between">
        <h1 className='ms-5'>All Projects</h1>
        <input style={{width:"300px"}} className='rounded p-2' type="text" placeholder='Search Projects by its Language'/>
      </div>
      <Row className='mt-5'>
      {allProjects.length>0?
        allProjects.map((project,index)=>(<Col key={index} sm={12} md={6} lg={4}>
            <Projectcard project={project}/>
        </Col>)):
        <div className='fw-bolder text-danger fs-4'>Nothing to display</div>
        }
      </Row>
    </div>
</>
  )
}

export default Projects