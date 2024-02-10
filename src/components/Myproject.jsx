import React, { useContext, useEffect, useState } from 'react'
import Add from '../components/Add'
import { addResponseContext } from '../Context/ContextShare';
import { getUserProjectAPI } from '../services/allAPI'
import Edit from '../components/Edit'
function Myproject() {
  const {addResponse,setAddResponse}=useContext(addResponseContext)

  const [allProjects,setAllprojects]=useState([])
  const getUserProject=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
   const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
  
    try{
      const result =await getUserProjectAPI(reqHeader)
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
  getUserProject()
  },[addResponse])
  
  return (
    <div className='border rounded p-2'>
      <div className='d-flex justify-content-between'>
<h3>My Project</h3>
<Add/>
      </div>
      <div className='mt-4'>
        {allProjects.length>0?allProjects.map((project,index)=>(<div key={index} className='border rounded d-flex justify-content-between mb-3 p-2'>
<h5>{project.title}</h5>
<div className='d-flex icons align-items-center'>
<Edit project={project}/>
<a href={project?.github} target='_blank' className='btn btn-link'><i className='fa-brands fa-github'></i></a>
<button className='btn ms-2 btn-link text-danger'><i className='fa-solid fa-trash'></i></button>
</div>
</div>)):
        <div>
Nothing To DIsplay
        </div>
        }

      </div>
    </div>
  )
}

export default Myproject