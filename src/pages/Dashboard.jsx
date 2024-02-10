import React, { useState } from 'react'
import Header from '../components/Header'
import Myproject from '../components/Myproject'
import Profile from '../components/Profile'
import { useEffect } from 'react'


function Dashboard() {
  const[username,setUsername]=useState("false")
  useEffect(()=>{
    if(sessionStorage.getItem("username")){
        setUsername(sessionStorage.getItem("username"))
    }else{
        setUsername("")
    }
},[])

  return (
    <>
    <Header insideDashboard/>
    <div style={{marginTop:"100px"}} className='container'>
      
      <h1>Welcome <span className='text-warning'>{username}</span></h1>
      <div className='row'>
        <div className='col-lg-8'>
          
          <Myproject></Myproject>
        </div>
        <div className='col-lg-4'>
<Profile/>
        </div>
        </div>
        </div>
    </>
  )
}

export default Dashboard