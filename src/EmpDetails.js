import {React, useEffect,useState } from 'react'
import {Link, useParams } from 'react-router-dom'
const EmpDetails = () => {
    const[EmpData,changeEmpData] = useState({});
    const{empid}= useParams();

    useEffect(()=>{
      fetch("http://localhost:5001/employee/"+empid).then((resp)=>{
        return resp.json();
    }).then((res)=>{
      changeEmpData(res);
    }).catch((err)=>{
        console.log(err.message);
    })
    },[]);
  
  return (
    <div>
      <div className='card' style={{textAlign:'left'}}>
        <div className='card-title'>
          <h2>Employee Create</h2>
        </div>
        <div className='card-body'>
          
        </div>
      </div>
   {EmpData &&
<div>
<h1>my name is : {EmpData.name} ({EmpData.id})</h1>
<h3>Contact Details</h3>
<h5>Email is : {EmpData.email}</h5>
<h5>Phone number is : {EmpData.phone}</h5>
<Link className='btn btn-danger' to="/">Back</Link>
  </div>    
   }
    </div>
  )
}

export default EmpDetails