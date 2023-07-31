import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function AddRoom() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        roomId: "",
        roomType: "",
        roomRent: "",
        roomAvailable: ""
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

    const { roomId, roomType, roomRent } = user

    const onInputChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })

    };

    const onSubmit = async (e) => {
        if (!roomId) {
            document.getElementById("text").innerHTML = "ID can't be empty";
        } else {
            e.preventDefault();
            await axios.post("http://16.171.135.69:8888/room/add", user);
            navigate("/room/viewall")
        }
    };

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4"><u>Register Room</u></h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Id" className="form-label">
                                <b>ID</b>
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter ID"
                                name="roomId"
                                value={roomId}
                                onChange={(e) => onInputChange(e)}
                                id="id"
                            />
                        </div>
                        <p className='text-danger' id="text"></p>
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">
                                <b> Type</b>
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter Type"
                                name="roomType"
                                value={roomType}
                                onChange={(e) => onInputChange(e)}
                                id="type"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rent" className="form-label">
                                <b> Rent</b>
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter Rent"
                                name="roomRent"
                                value={roomRent}
                                onChange={(e) => onInputChange(e)}
                                id="rent"
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
                                onChange={(e) => onInputChange(e)}
                            />
                            <label htmlFor="true">Yes</label>
                            <input
                                type="radio"
                                id="false"
                                name="roomAvailable"
                                value="false"
                                onChange={(e) => onInputChange(e)}
                            />
                            <label htmlFor="false">No</label><br />

                        </div>
                        <button type="submit" className="btn btn-outline-primary" >Submit</button>
                        <Link to="/room/viewall" className="btn btn-outline-danger mx-2">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
