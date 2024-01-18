import React from 'react'
import Add from '../components/Add'

import Edit from '../components/Edit'
function Myproject() {
  return (
    <div className='border rounded p-2'>
      <div className='d-flex justify-content-between'>
<h3>My Project</h3>
<Add/>
      </div>
      <div className='mt-4'>
<div className='border rounded d-flex justify-content-between mb-3 p-2'>
<h5>title</h5>
<div className='d-flex icons align-items-center'>
<Edit/>
<a href="" target='_blank' className='btn btn-link'><i className='fa-brands fa-github'></i></a>
<button className='btn ms-2 btn-link text-danger'><i className='fa-solid fa-trash'></i></button>
</div>
</div>
      </div>
    </div>
  )
}

export default Myproject