import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function UpdateRoom() {

    let navigate=useNavigate();

    const {roomId}=useParams()

    const [user, setUser]=useState({
        roomType:"",
        roomRent:"",
        roomAvailable: ""
    });


     const{roomType,roomRent}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };

    useEffect(()=>{
        loadUser()
    },[]);

    const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.put(`http://localhost:8888/room/update/${roomId}`, user);
        navigate("/room/viewall")
    };

    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8888/room/view/${roomId}`);
        setUser(result.data);
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Update Room</u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                           <b> Type</b> 
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Type"
                            name="roomType"
                            value={roomType}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            <b> Rent</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter Rent"
                            name="roomType"
                            value={roomRent}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            <b> Availability</b>
                        </label><br></br>
                        {/* <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Availability"
                            name="roomAvailable"
                            value={roomAvailable}
                            onChange={(e)=>onInputChange(e)}
                        /> */}
                        <input 
                            type="radio" 
                            id="true" 
                            name="roomAvailable" 
                            value="true"
                            onChange={(e)=>onInputChange(e)}
                            />
                          <label htmlFor="html">Yes</label>
                          <input 
                            type="radio" 
                            id="false" 
                            name="roomAvailable" 
                            value="false"
                            onChange={(e)=>onInputChange(e)}
                            />
                          <label htmlFor="css">NO</label><br/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <Link to="/room/viewall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}
