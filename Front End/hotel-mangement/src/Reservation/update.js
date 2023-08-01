import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function UpdateReservation() {

    let navigate=useNavigate();

    const {reservationId}=useParams()

    const [user, setUser]=useState({
        roomId:"",
        guestId:"",
        checkInDate: "",
        checkOutDate:"",
        noOfGuest:"",
        totalPrice:""
    });


     const{roomId,guestId,checkInDate,checkOutDate,noOfGuest,totalPrice}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };

    useEffect(()=>{
        loadUser()
    },[]);

    const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.put(`http://13.49.68.81:8888/reservation/update/${reservationId}`, user);
        navigate("/reservation/viewall")
    };

    const loadUser=async()=>{
        const result = await axios.get(`http://13.49.68.81:8888/reservation/view/${reservationId}`);
        setUser(result.data);
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Update Reservation</u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="roomId" className="form-label">
                           <b> Room ID</b> 
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Room ID"
                            name="roomId"
                            value={roomId}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="guestId" className="form-label">
                            <b> Guest ID</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Guest ID"
                            name="guestId"
                            value={guestId}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cid" className="form-label">
                            <b> Check In Date</b>
                        </label>
                        <input
                            type={"date"}
                            className="form-control"
                            placeholder="Enter Check In Date"
                            name="checkInDate"
                            value={checkInDate}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cod" className="form-label">
                            <b> Check out Date</b>
                        </label>
                        <input
                            type={"date"}
                            className="form-control"
                            placeholder="Enter Check Out Date"
                            name="checkOutDate"
                            value={checkOutDate}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="no" className="form-label">
                            <b> No Of Guests</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter no of guests"
                            name="noOfGuest"
                            value={noOfGuest}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="total" className="form-label">
                            <b>Total Price</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter total price"
                            name="totalPrice"
                            value={totalPrice}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <Link to="/reservation/viewall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}
