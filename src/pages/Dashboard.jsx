import React from 'react'
import Header from '../components/Header'
import Myproject from '../components/Myproject'
import Profile from '../components/Profile'
function Dashboard() {
  return (
    <>
    <Header insideDashboard/>
    <div style={{marginTop:"100px"}} className='container'>
      
      <h1>Welcome <span className='text-warning'>User</span></h1>
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