import React from 'react'

import load from '../assets/load.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Projectcard from '../components/Projectcard'

function Home() {
    const navigate=useNavigate()
    const handlenavigate=()=>{
        navigate('/projects')
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
<Link className='btn btn-success mt-3' to={'/login'} >Start Explore <i className='fa-solid fa-arrow-right'></i></Link>
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
    <div>
        <div className='project mt-5'>
            <Projectcard/>
        </div>
    </div>
</marquee>
<div className='text-center '>
    <button onClick={handlenavigate} className='btn btn shadow'><u>View More Projects</u></button>
</div>
  </div>
  </>
    
  )
}

export default Home