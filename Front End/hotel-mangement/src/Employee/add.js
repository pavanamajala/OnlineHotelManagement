import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Auth from '../Auth/auth';

export default function AddEmployee() {

    let navigate=useNavigate();

    const [user, setUser]=useState({
        employeeId:"",
        employeeName:"",
        employeeSalary:"",
        employeeEmail:"",
       employeeType:""
    });

    // function validateform(){  
    //     var id=document.getElementById("id"); 
    //     let text;
    //       if(id==null){
    //         alert("id can't be null")
    //       } else{
    //         onSubmit();
    //         // {(e)=>onSubmit(e)}
    //       }
    //  }  

     const{employeeId,employeeName,employeeSalary,employeeEmail,employeeType}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };

    const onSubmit=async (e)=> {
        if(!employeeId){
            document.getElementById("text").innerHTML = "ID can't be empty";
        } else{
        e.preventDefault();
        await axios.post("http://16.171.133.10:8888/user/employee/add", user, {headers:Auth()});
        navigate("/user/employee/viewall")
        }
    };

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Register employee</u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                        <label htmlFor="Id" className="form-label">
                            <b> ID</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter ID"
                            name="employeeId"
                            value={employeeId}
                            onChange={(e)=>onInputChange(e)}
                            id="id"
                        />
                    </div>
                    <p className='text-danger' id="text"></p>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            <b> Name</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter name"
                            name="employeeName"
                            value={employeeName}
                            onChange={(e)=>onInputChange(e)}
                            id="name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label">
                            <b> Salary</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter Salary"
                            name="employeeSalary"
                            value={employeeSalary}
                            onChange={(e)=>onInputChange(e)}
                            id="salary"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            <b> Email</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Email"
                            name="employeeEmail"
                            value={employeeEmail}
                            onChange={(e)=>onInputChange(e)}
                            id="email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">
                            <b> Type</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Type"
                            name="employeeType"
                            value={employeeType}
                            onChange={(e)=>onInputChange(e)}
                            id="type"
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary" >Submit</button>
                    <Link to="/user/employee/viewall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}
