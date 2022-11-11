import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Auth from '../Auth/auth';

export default function AddGuest() {

    let navigate=useNavigate();

    const [user, setUser]=useState({
        guestId:"",
        guestName:"",
        guestContact:"",
        guestEmail:"",
        guestGender:"",
        guestAddress:""
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

     const{guestId,guestName,guestContact,guestEmail,guestGender,guestAddress}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    }

    const onSubmit=async (e)=> {
        console.log(user.guestId)
        if(!guestId){
            document.getElementById("text").innerHTML = "ID can't be empty";
        } else{
        e.preventDefault();
        await axios.post("http://localhost:8888/guest/add", user, {headers:Auth()});
        navigate("/guest/viewall")
        }
    };

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Register guest</u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                        <label htmlFor="Id" className="form-label">
                            <b> ID</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter ID"
                            name="guestId"
                            value={guestId}
                            onChange={(e)=>onInputChange(e)}
                            id="id"
                        />
                        <p className='text-danger' id="text"></p>
                    </div>
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
                    <button type="submit" className="btn btn-outline-primary" >Submit</button>
                    <Link to="/guest/viewall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}
