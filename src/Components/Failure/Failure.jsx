import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Failure() {
    const navigate=useNavigate();
  return (
    <div className='conbg vh-100 row '>
    <div className='row justify-content-center align-items-center'>
    <div className='w-25 text-center bg-white rounded-2 py-3'>
    <h4>Somthing is wrong</h4>
  <button onClick={()=>navigate('/addContact')} className='btn btn-danger'>Ok</button>
    </div>
  </div>
  </div>
  )
}
