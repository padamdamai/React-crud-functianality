import {React,useEffect,useState} from 'react'
import {Link, useParams,useNavigate } from 'react-router-dom';


const EmpEdit = () => {



  const{empid}= useParams();

  const[id,EditId] = useState("");
  const[name,EditName] = useState("");
  const[phone,EditPhone] = useState("");
  const[email,EditEmail] = useState("");
  const[active,EditActive] = useState(true);
  const[validation,EditValidation] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    const empdata = {name,email,phone,active};

    fetch("http://localhost:5001/employee/"+empid,{
      method : 'PUT',
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

  useEffect(()=>{
    fetch("http://localhost:5001/employee/"+empid).then((resp)=>{
      return resp.json();
  }).then((res)=>{
      EditName(res.name)
      EditEmail(res.email)
      EditPhone(res.phone)
      EditActive(res.active)

  }).catch((err)=>{
      console.log(err.message);
  })
  },[]);

  


  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{textAlign:"center" ,color:"lightBlue",marginBottom:"2rem"}}>Employee Edit</h2>
<div className="form-group ">
    <label htmlFor="Name">Enter Name</label>
    <input type="text"  required value={name} onMouseDown={(e)=>EditValidation(true)}  onChange={(e)=>EditName(e.target.value)} className="form-control" id="name" aria-describedby="emailHelp" placeholder="name"/>
    {name.length == 0 && validation && <span className='text-danger'>Enter your name</span>}
  </div>

  <div className="form-group">  
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" value={email} required onChange={(e)=>EditEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
  </div>
  <div className="form-group">
    <label htmlFor="phoneNumber">Phone Number</label>
    <input type="number" required value={phone} onChange={(e)=>EditPhone(e.target.value)} className="form-control" id="pnoneNumber" placeholder="Phone_no"/>
  </div>
  <br/>
  <div className="form-group">
  <input className="form-check-input" checked={active} onChange={(e)=>EditActive(e.target.checked)} type="checkbox" value="" id="flexCheckDefault"/>
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

export default EmpEdit