import React, { useRef, useState } from 'react'
import Avatar from '../../assets/avatar2.jpg'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';



export default function AddContact() {

  const navigate=useNavigate();  

  const [fname,setFname]=useState('')
  const [lname,setLname]=useState('')
  const [phone,setphone]=useState('')
  const [email,setemail]=useState('')
  const [pic,setpic]=useState('')


  const inputRef=useRef(null)
  function handleImageClick() {
    inputRef.current.click()
}
  function handleImage(e) {
    const file=e.target.files[0]
    setpic(URL.createObjectURL(file));
}

  async function handleSubmit(e) {
    e.preventDefault();
    try {
    await Axios.post('https://dummyapi.io/data/v1/user/create', {
      firstName:fname,
      lastName:lname,
      email:email,
      picture:pic
    }, {
      headers: {
        // 'Content-Type': 'multipart/form-data',
        'app-id': '64fc4a747b1786417e354f31',
      },
    });
    console.log('done');
    navigate('/success');
  } catch (error) {
    console.error('Error:', error);
    navigate('/failure')
  }
}

  return (
      <>
      <section className='container rounded-4 text-white bg-white pt-4 border border-white  position-absolute'>
    
     

        
        <form onSubmit={handleSubmit}>
        <div  onClick={handleImageClick} className='photo mx-auto d-block border border-black border-2'>
      {pic? <img src={pic} alt="" className='  ' />:<img src={Avatar} alt="" className='  ' />}
      <input type="file" ref={inputRef} onChange={(e)=>handleImage(e)} style={{display:"none"}}/>
              
      </div>
      <h6 className='text-black text-center mt-4'>Upload Photo</h6>
        <div className="p-4 row justify-content-center" >
              <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} name='fname' required placeholder='First Name' className='col-md-5 my-4 mx-3 rounded-5 p-2 bg-light add'/>
              <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)} name='sname' required placeholder='Last Name' className='col-md-5 my-4 mx-3 rounded-5 p-2 bg-light add'/>
              <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)} name='phone' placeholder='Phone Number' className='col-md-5 my-4 mx-3 rounded-5 p-2 bg-light add'/>
              <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} name='email' required placeholder='Email' className='col-md-5 my-4 mx-3 rounded-5 p-2 bg-light add'/>

        </div>

        <div className='mt-5 row justify-content-between m-4'>
          <button onClick={()=>navigate('/')} className='Cancel col-md-2 btn text-black rounded-4 py-2'>Cancel</button>
          <button  type="submit" value="Submit" className='save col-md-2 btn btn-info text-white rounded-4 py-2'>Save</button>
        </div>
        </form>
           
       
              
    
        </section>
    
      </>
    
  )
}
