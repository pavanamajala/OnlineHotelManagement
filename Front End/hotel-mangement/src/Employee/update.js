import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Auth from '../Auth/auth';

export default function UpdateEmployee() {

    let navigate=useNavigate();

    const {employeeId}=useParams()

    const [user, setUser]=useState({
        employeeName:"",
        employeeSalary:"",
        employeeEmail:"",
       employeeType:""
    });


     const{employeeName,employeeSalary,employeeEmail,employeeType}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };

    useEffect(()=>{
        loadUser()
    },[]);

    const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.put(`http://16.171.135.69:8888/user/employee/update/${employeeId}`, user, {headers:Auth()});
        navigate("/user/employee/viewall")
    };

    const loadUser=async()=>{
        const result=await axios.get(`http://16.171.135.69:8888/user/employee/view/${employeeId}`, {headers:Auth()});
        setUser(result.data);
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Update Employee</u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
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
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <Link to="/user/employee/viewall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}
