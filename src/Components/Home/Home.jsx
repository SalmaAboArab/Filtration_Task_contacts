


import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Style from "./Home.module.css"
import Avatar from '../../assets/Avatar.png'
import { Box, Pagination, TablePagination } from '@mui/material';
import AddContact from '../AddContact/AddContact'
import { useNavigate } from 'react-router-dom';

export default function Home() {


const navigate=useNavigate();
let [usersdata,setusersdata]=useState([]);


async function getdata(){
  let {data} = await Axios.get(`https://dummyapi.io/data/v1/user`,{
    headers:{
      "app-id":"64fc4a747b1786417e354f31"
    }
  })
  setusersdata(data.data)
    }
useEffect(()=>{
  getdata();
},[])

function search(e) {  //search with first name
  if(e.target.value){
    setusersdata(usersdata.filter((person)=>person.firstName.includes(e.target.value)))
  }  
  else getdata()
}
async function deleteUser(i){
  let num;
  if(i==0) num=2;
  else num=1;
  i=(Current*2)-num;
  await Axios.delete(`https://dummyapi.io/data/v1/user/${usersdata[i].id}`,{
    headers:{
      "app-id":"64fc4a747b1786417e354f31"
    }
  })
  // await getdata();
  setusersdata(usersdata.filter((user,index)=>usersdata.indexOf(user)!==i)) 
}
function updateUser(i){
  let num;
  if(i==0) num=2;
  else num=1;
  i=(Current*2)-num;
  let userId=usersdata[i].id
  navigate(`/updateContact/${userId}/${usersdata[i].firstName}/${usersdata[i].lastName}`)

}



const contacts=2;
 const [Current,setCurrent]=useState(1);
 const NbPages=Math.ceil(usersdata.length/contacts);
 const startIndex=(Current-1)*contacts;
 const endIndex=startIndex+contacts;
 const DataPerPage=usersdata.slice(startIndex,endIndex)

 const HandlleChange=(event,page)=>{
  setCurrent(page);
 }

//  const filterdContacts=
return(
  <>
  <section className='container rounded-4 text-white pt-4 border border-white  position-absolute'>

        <input type="search" onChange={e=>search(e)} placeholder='Search by Name' className='srch rounded-5 row w-75 mx-auto col-xl-6 col-lg-8 col-md-10 col-sm-12 mb-4 p-1' />
        <div className="row justify-content-end me-5">
        <button onClick={()=>navigate('/addContact')} className='addbtn btn btn-info text-white p-2 rounded-4 col-xl-2 col-lg-3 col-md-4 col-sm-5 '>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M20.3125 8.59375H13.2812V1.5625C13.2812 0.699707 12.5815 0 11.7188 0H10.1562C9.29346 0 8.59375 0.699707 8.59375 1.5625V8.59375H1.5625C0.699707 8.59375 0 9.29346 0 10.1562V11.7188C0 12.5815 0.699707 13.2812 1.5625 13.2812H8.59375V20.3125C8.59375 21.1753 9.29346 21.875 10.1562 21.875H11.7188C12.5815 21.875 13.2812 21.1753 13.2812 20.3125V13.2812H20.3125C21.1753 13.2812 21.875 12.5815 21.875 11.7188V10.1562C21.875 9.29346 21.1753 8.59375 20.3125 8.59375Z" fill="white"/>
</svg> Add New Contact</button>
        </div>




{DataPerPage.map((user,index)=>{

return(
    
        <div className="contacts p-4 row position-relative">
<div className="details col-lg-6 col-md-8 col-sm-12 pt-2">

    <div className="row justify-content-center align-items-center ">
        <div className=" col-sm-4">
          <div className='photo mx-auto d-block'>
          <img src={user.picture?user.picture:Avatar} type="file" alt="" className='  ' />
          </div>
        </div>
        
        <div className="det col-sm-6 ">
        <h3>{user.firstName}&nbsp;{user.lastName}</h3>
        <h3>01033874659</h3>
        </div>
        
    </div> 

    
</div>


<div className="btns col-lg-6 col-md-8 col-sm-12 pt-3">
    <div className="row justify-content-end">
        <div className='col-xxl-2 col-xl-5 col-lg-7 col-md-10 col-sm-10 '> {/*update button*/}
        <button onClick={()=>updateUser(index)} className='border-0 bg-transparent'>
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="45" viewBox="0 0 54 45" fill="none">
<rect width="54" height="45" rx="5" fill="white"/>
<path d="M32.474 15.6068L36.3889 19.5217C36.5538 19.6866 36.5538 19.9557 36.3889 20.1207L26.9097 29.5998L22.8819 30.0469C22.3438 30.1076 21.888 29.6519 21.9488 29.1137L22.3958 25.0859L31.875 15.6068C32.0399 15.4418 32.309 15.4418 32.474 15.6068ZM39.5052 14.6128L37.3872 12.4948C36.7274 11.8351 35.6554 11.8351 34.9913 12.4948L33.4549 14.0312C33.2899 14.1962 33.2899 14.4653 33.4549 14.6302L37.3698 18.5451C37.5347 18.7101 37.8038 18.7101 37.9688 18.5451L39.5052 17.0087C40.1649 16.3446 40.1649 15.2726 39.5052 14.6128ZM31.6667 27.0217V31.4401H17.7778V17.5512H27.7517C27.8906 17.5512 28.0208 17.4948 28.1207 17.3993L29.8568 15.6632C30.1866 15.3333 29.9523 14.7734 29.4878 14.7734H17.0833C15.9332 14.7734 15 15.7066 15 16.8568V32.1345C15 33.2847 15.9332 34.2179 17.0833 34.2179H32.3611C33.5113 34.2179 34.4444 33.2847 34.4444 32.1345V25.2856C34.4444 24.8212 33.8845 24.5911 33.5547 24.9167L31.8186 26.6528C31.7231 26.7526 31.6667 26.8828 31.6667 27.0217Z" fill="#1BB0F0"/>
</svg>
        </button>
</div>

{/*delete button*/}
<div className='col-xxl-3 col-xl-5 col-lg-7 col-md-10 col-sm-10 '>  
<button onClick={()=>deleteUser(index)} className='border-0 bg-transparent'>
<svg xmlns="http://www.w3.org/2000/svg" width="54" height="45" viewBox="0 0 54 45" fill="none">
<rect width="54" height="45" rx="5" fill="white"/>
<path d="M17.5625 32.6563C17.5625 33.2779 17.8094 33.874 18.249 34.3135C18.6885 34.7531 19.2846 35 19.9062 35H33.9688C34.5904 35 35.1865 34.7531 35.626 34.3135C36.0656 33.874 36.3125 33.2779 36.3125 32.6563V16.25H17.5625V32.6563ZM30.8438 20.1563C30.8438 19.9491 30.9261 19.7503 31.0726 19.6038C31.2191 19.4573 31.4178 19.375 31.625 19.375C31.8322 19.375 32.0309 19.4573 32.1774 19.6038C32.3239 19.7503 32.4062 19.9491 32.4062 20.1563V31.0938C32.4062 31.301 32.3239 31.4997 32.1774 31.6462C32.0309 31.7927 31.8322 31.875 31.625 31.875C31.4178 31.875 31.2191 31.7927 31.0726 31.6462C30.9261 31.4997 30.8438 31.301 30.8438 31.0938V20.1563ZM26.1562 20.1563C26.1562 19.9491 26.2386 19.7503 26.3851 19.6038C26.5316 19.4573 26.7303 19.375 26.9375 19.375C27.1447 19.375 27.3434 19.4573 27.4899 19.6038C27.6364 19.7503 27.7188 19.9491 27.7188 20.1563V31.0938C27.7188 31.301 27.6364 31.4997 27.4899 31.6462C27.3434 31.7927 27.1447 31.875 26.9375 31.875C26.7303 31.875 26.5316 31.7927 26.3851 31.6462C26.2386 31.4997 26.1562 31.301 26.1562 31.0938V20.1563ZM21.4688 20.1563C21.4688 19.9491 21.5511 19.7503 21.6976 19.6038C21.8441 19.4573 22.0428 19.375 22.25 19.375C22.4572 19.375 22.6559 19.4573 22.8024 19.6038C22.9489 19.7503 23.0312 19.9491 23.0312 20.1563V31.0938C23.0312 31.301 22.9489 31.4997 22.8024 31.6462C22.6559 31.7927 22.4572 31.875 22.25 31.875C22.0428 31.875 21.8441 31.7927 21.6976 31.6462C21.5511 31.4997 21.4688 31.301 21.4688 31.0938V20.1563ZM37.0938 11.5625H31.2344L30.7754 10.6494C30.6782 10.4542 30.5284 10.29 30.3429 10.1753C30.1575 10.0606 29.9437 9.99985 29.7256 10H24.1445C23.9269 9.99917 23.7135 10.0596 23.5287 10.1745C23.3439 10.2894 23.1952 10.454 23.0996 10.6494L22.6406 11.5625H16.7812C16.574 11.5625 16.3753 11.6448 16.2288 11.7913C16.0823 11.9378 16 12.1366 16 12.3438V13.9063C16 14.1135 16.0823 14.3122 16.2288 14.4587C16.3753 14.6052 16.574 14.6875 16.7812 14.6875H37.0938C37.301 14.6875 37.4997 14.6052 37.6462 14.4587C37.7927 14.3122 37.875 14.1135 37.875 13.9063V12.3438C37.875 12.1366 37.7927 11.9378 37.6462 11.7913C37.4997 11.6448 37.301 11.5625 37.0938 11.5625Z" fill="#EC1B1B"/>
</svg>
</button>
</div>

    </div>

</div>
<div className={index%2==0?'d-flex line':'d-none'}></div>

    </div>
   
   )
})}



  <Box sx={{display:"flex",justifyContent:"end",mt:1}}>
    <Pagination count={NbPages} page={Current} onChange={HandlleChange}  className=''/>
  </Box>

  {/* <Box sx={{display:"flex",justifyContent:"end",mt:1}}>
  <TablePagination
  component="div"
  count={NbPages}
  page={Current}
  onPageChange={HandlleChange}
/>
  </Box>  */}
  
                      

    </section>

  </>
)


  
    
}
