import {React,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const EmpCreate = () => {

  const[id,changeId] = useState("");
  const[name,changeName] = useState("");
  const[phone,changePhone] = useState("");
  const[email,changeEmail] = useState("");
  const[active,changeActive] = useState(true);
  const[validation,changeValidation] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    const empdata = {name,email,phone,active};

    fetch("http://localhost:5001/employee",{
      method : 'POST',
      headers:{"content-type":"application/json"},
      body:JSON.stringify(empdata)
    }).then((rep)=>{
      alert("saved successfully");
      navigate('/');
      // console.log(rep)
    }).catch((err)=>{
     console.log( err.message)
    })
  }
  
  return (
<form onSubmit={handleSubmit}>
<div className="form-group ">
    <label htmlFor="Name">Enter Name</label>
    <input type="text"  required value={name} onMouseDown={(e)=>changeValidation(true)}  onChange={(e)=>changeName(e.target.value)} className="form-control" id="name" aria-describedby="emailHelp" placeholder="name"/>
    {name.length == 0 && validation && <span className='text-danger'>Enter your name</span>}
  </div>

  <div className="form-group">  
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" value={email} required onChange={(e)=>changeEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
  </div>
  <div className="form-group">
    <label htmlFor="phoneNumber">Phone Number</label>
    <input type="number" required value={phone} onChange={(e)=>changePhone(e.target.value)} className="form-control" id="pnoneNumber" placeholder="Phone_no"/>
  </div>
  <br/>
  <div className="form-group">
  <input className="form-check-input" checked={active} onChange={(e)=>changeActive(e.target.checked)} type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
  </div>
<br/>
  <button type="submit" className="btn btn-primary">Save</button>
  <Link to="/" className='btn btn-danger'>Back</Link>
</form>
  
    )
}

export default EmpCreate