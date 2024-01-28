import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Success() {
    const navigate=useNavigate();
  return (
    <div className='conbg vh-100 row '>
      <div className='row justify-content-center align-items-center'>
      <div className='w-25 text-center bg-white rounded-2 py-3'>
      <h4>Success</h4>
    <button onClick={()=>navigate('/')} className='btn btn-success'>Done</button>
      </div>
    </div>
    </div>
  )
}
