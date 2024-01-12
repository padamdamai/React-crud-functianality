import {React,useEffect,useState} from 'react'
import './EmployeeList.css';
import { Link, useNavigate } from "react-router-dom";
const EmployeeList = () => {
    const[empdata,empdatachange]=useState(null);

    const nevigate = useNavigate();
    const showDetail=(id)=>{
        nevigate("/employee/details/"+id);
    }

    const removeId = (id)=>{
        if(window.confirm("Do you want to remove ?")){
            fetch("http://localhost:5001/employee/"+id,{
                method : 'DELETE',
              }).then((rep)=>{
                alert("Deleted successfully");
                window.location.reload();
              }).catch((err)=>{
               console.log( err.message)
              })
        }
    }

    const changeEdit = (id)=>{
        nevigate("/employee/edit/"+id)
        
    }

useEffect(()=>{
    fetch("http://localhost:5001/employee").then((resp)=>{
        return resp.json();
    }).then((res)=>{
        empdatachange(res);
    }).catch((err)=>{
        console.log(err.message);
    }) 
})
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Employee Listing</h2>
                </div>
                <div className='card-body'>
                    <div className='divBtn'>
                        <Link to="employee/create" className='btn btn-success'>Add (+)</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action  </td>
                            </tr>
                        </thead>
                        <tbody>
                            { empdata &&
                                empdata.map(item=>(
                                    <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <a onClick={()=>{changeEdit(item.id)}} className='btn btn-success'>Edit</a>
                                        <a onClick={()=>{removeId(item.id)}}   className='btn btn-danger'>Remove</a>
                                        <a onClick={()=>{showDetail(item.id)}} className='btn btn-success'>Details</a>
                                    </td>
                                    
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList