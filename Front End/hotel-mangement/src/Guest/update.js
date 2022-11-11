import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Auth from '../Auth/auth';

export default function UpdateGuest() {

    let navigate=useNavigate();

    const {guestId}=useParams()

    const [user, setUser]=useState({
        guestName:"",
        guestContact:"",
        guestEmail:"",
        guestGender:"",
        guestAddress:""
    });


    const{guestName,guestContact,guestEmail,guestGender,guestAddress}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };

    useEffect(()=>{
        loadUser()
    },[]);

    const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.put(`http://localhost:8888/guest/update/${guestId}`, user,{headers:Auth()});
        navigate("/guest/viewall")
    };

    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8888/guest/view/${guestId}`,{headers:Auth()});
        setUser(result.data);
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Update Guest</u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            <b> Name</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter name"
                            name="guestName"
                            value={guestName}
                            onChange={(e)=>onInputChange(e)}
                            id="name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Id" className="form-label">
                            <b> Contact</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter Contact"
                            name="guestContact"
                            value={guestContact}
                            onChange={(e)=>onInputChange(e)}
                            id="contact"
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
                            name="guestEmail"
                            value={guestEmail}
                            onChange={(e)=>onInputChange(e)}
                            id="email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">
                            <b> Gender</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Gender"
                            name="guestGender"
                            value={guestGender}
                            onChange={(e)=>onInputChange(e)}
                            id="gender"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            <b> Address</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Address"
                            name="guestAddress"
                            value={guestAddress}
                            onChange={(e)=>onInputChange(e)}
                            id="address"
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <Link to="/guest/viewall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}
