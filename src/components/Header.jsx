import React from 'react'
import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Header({insideDashboard}) {
  return (

  <Navbar className="" style={{backgroundColor:'#369',width:"100%",position:'fixed',zIndex:5,top:'0px'}} >
          <Container >
          <Navbar.Brand >  <Link  className='text-white fw-bolder  fs-5' to={'/'} style={{textDecoration:'none'}}>    <i  className='text-white fa-solid fa-hands-holding-circle'></i>&nbsp;
Project Fair</Link></Navbar.Brand>
{
  insideDashboard&&
  <div className="ms-auto">
    <button style={{textDecoration:'none'}} className='btn btn-link text-light fw-bolder'><i className='fa-solid fa-gear me-2'></i>Logout</button>
  </div>

}
          </Container>
        </Navbar>
        
       

  )
}

export default Header