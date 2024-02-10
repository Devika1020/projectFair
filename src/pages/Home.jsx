import React, { useEffect, useState } from 'react'

import load from '../assets/load.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Projectcard from '../components/Projectcard'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { homeProjectAPI } from '../services/allAPI'
function Home() {
    const [allProjects,setAllprojects]=useState([])
    const[loginStatus,setLoginStatus]=useState(false)
const getHomeproject=async()=>{
    const result =await homeProjectAPI()
   try{ 
    if(result.status===200){
    setAllprojects(result.data)
}
}catch(err){
console.log(err);
}
}
console.log(allProjects);

       
  
    useEffect(()=>{
        getHomeproject()
        if(sessionStorage.getItem("token")){

            setLoginStatus(true)
        }else{
            setLoginStatus(false)
        }
    },[])
    const navigate=useNavigate()
    const handlenavigate=()=>{
        if(loginStatus==true){
            navigate('/projects')
        }else{
            toast.info("Plaese login to our projects")
            // navigate('/login')
            
        }
        
    }
  return (<>
  <div style={{height:'100vh',backgroundColor:'#369'}} className='w-100 d-flex justify-content-center align-items-center rounded'>

 <div className='container'>
    <div className='row align-items-center'>
        <div className='col-lg-6'>
            <h1 style={{fontSize:'80px'}} className='text-white fa-bolder  mb-3'>
                <i style={{height:'85px'}} className='text-white fa-solid fa-hands-holding-circle'></i>&nbsp;
                Project Fair
            </h1>
<p style={{textAlign:'justify'}}><b>One stop destination for all software development projects. Where user can add and manage their projects. As well as access all projects available in our websites...Why you are waiting !!!</b></p>
{loginStatus?<Link className='btn btn-success mt-3' to={'/dashboard'}>Manage Your Projects <i className='fa-solid fa-arrow-right'></i></Link>:<Link className='btn btn-success mt-3' to={'/login'} >Start Explore <i className='fa-solid fa-arrow-right'></i></Link>}
        </div>
        <div className='col-lg-2'></div>
        <div className='col-lg-4  w-45 '>
            <img className='img-fluid' src={load} alt="landing" />
        </div>

    </div>
 </div>
  </div>
  <div className='mt-5'>
    <h1 className='text-center mb-5'>Explore Our Projects</h1>
<marquee >
    <div className='d-flex'>
        {allProjects.length>0&&
        allProjects.map((project,index)=>(<div className='project me-5'>
            <Projectcard project={project}/>
        </div>))}
    </div>
</marquee>
<div className='text-center '>
    <button onClick={handlenavigate} className='btn btn shadow'><u>View More Projects</u></button>
</div>
<ToastContainer autoclose={3000}/>
  </div>
 
  </>
    
  )
}

export default Home