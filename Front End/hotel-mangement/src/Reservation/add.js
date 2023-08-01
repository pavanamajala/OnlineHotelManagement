import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function AddReservation() {

    let navigate=useNavigate();

    const [user, setUser]=useState({
        reservationId:"",
        roomId: "",
        guestId:"",
        checkInDate:"",
        checkOutDate:"",
        noOfGuest:"",
        totalPrice:""
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

     const{reservationId, roomId, guestId, checkInDate, checkOutDate, noOfGuest, totalPrice}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };

    const onSubmit=async (e)=> {
        if(!reservationId){
            document.getElementById("text").innerHTML = "ID can't be empty";
        } else{
        e.preventDefault();
        const res=await axios.post("http://16.171.133.10:8888/reservation/add", user);
        if(res.data === 'noroom'){
            alert("You entered room is already booked! Please Select any other available room")
        } else if(res.data === 'noguest'){
            alert("No guest is present with that given Guest Id")
        }else {
        alert(res.data)
        
        navigate("/reservation/viewall")
        }
        }
    };
  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4"><u>Register Reservation</u></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="../room/viewall" className="btn btn-success text-centre float-right" >
          View Rooms
        </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="../guest/viewall" className="btn btn-success float-centre" >
          View Guests
        </a><br></br><br></br>

          <form onSubmit={(e)=>onSubmit(e)}>
          
                    <div className="mb-3">
                        <label htmlFor="Id" className="form-label">
                            <b>Reservation ID</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter Reservation ID"
                            name="reservationId"
                            value={reservationId}
                            onChange={(e)=>onInputChange(e)}
                            id="reserve-id"
                        />
                    </div>
                    <p className='text-danger' id="text"></p>
                    <div className="mb-3">
                        <label htmlFor="Id" className="form-label">
                            <b>Room ID</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter Room ID"
                            name="roomId"
                            value={roomId}
                            onChange={(e)=>onInputChange(e)}
                            id="room-id"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Id" className="form-label">
                            <b>Guest ID</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter Guest ID"
                            name="guestId"
                            value={guestId}
                            onChange={(e)=>onInputChange(e)}
                            id="guest-id"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="checkIn" className="form-label">
                            <b> check In Date</b>
                        </label>
                        <input
                            type={"date"}
                            className="form-control"
                            placeholder="Enter Check In Date"
                            name="checkInDate"
                            value={checkInDate}
                            onChange={(e)=>onInputChange(e)}
                            id="checkIn"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="checkOut" className="form-label">
                            <b> check Out Date</b>
                        </label>
                        <input
                            type={"date"}
                            className="form-control"
                            placeholder="Enter Check Out Date"
                            name="checkOutDate"
                            value={checkOutDate}
                            onChange={(e)=>onInputChange(e)}
                            id="checkIn"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="num" className="form-label">
                            <b>No Of Guests</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter Number of Guests"
                            name="noOfGuest"
                            value={noOfGuest}
                            onChange={(e)=>onInputChange(e)}
                            id="num"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            <b>Total Price</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter total price"
                            name="totalPrice"
                            value={totalPrice}
                            onChange={(e)=>onInputChange(e)}
                            id="price"
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary" >Submit</button>
                    <Link to="/reservation/viewall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}



// import axios from 'axios';
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';

// export default function AddReservation() {

    // let navigate=useNavigate();

    // const [user, setUser]=useState({
    //     reservationId:"",
    //     roomId: "",
    //     guestId:""
    // });

    // // function validateform(){  
    // //     var id=document.getElementById("id"); 
    // //     let text;
    // //       if(id==null){
    // //         alert("id can't be null")
    // //       } else{
    // //         onSubmit();
    // //         // {(e)=>onSubmit(e)}
    // //       }
    // //  }  

    //  const{reservationId, roomId, guestId}=user

    // const onInputChange=(e)=>{

    //     setUser({ ...user, [e.target.name]: e.target.value})

    // };

    // const onSubmit=async (e)=> {
    //     if(!roomId){
    //         document.getElementById("text").innerHTML = "ID can't be empty";
    //     } else{
    //         console.log(user)
    //     e.preventDefault();
    //     const res=await axios.post("http://16.171.133.10:8888/reservation/add", user);
    //     console.log(res)
    //     navigate("/reservation/viewall")
    //     }
    // };

//   return (

//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4"><u>Register Room</u></h2>

//           <form onSubmit={(e)=>onSubmit(e)}>
//                 <div className="mb-3">
//                         <label htmlFor="Id" className="form-label">
//                             <b>ID</b>
//                         </label>
//                         <input
//                             type={"number"}
//                             className="form-control"
//                             placeholder="Enter ID"
//                             name="roomId"
//                             value={reservationId}
//                             onChange={(e)=>onInputChange(e)}
//                             id="id"
//                         />
//                     </div>
//                     <p className='text-danger' id="text"></p>
//                     <div className="mb-3">
//                         <label htmlFor="type" className="form-label">
//                             <b> Type</b>
//                         </label>
//                         <input
//                             type={"text"}
//                             className="form-control"
//                             placeholder="Enter Type"
//                             name="roomType"
//                             value={roomId}
//                             onChange={(e)=>onInputChange(e)}
//                             id="type"
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="rent" className="form-label">
//                             <b> Rent</b>
//                         </label>
//                         <input
//                             type={"number"}
//                             className="form-control"
//                             placeholder="Enter Rent"
//                             name="roomRent"
//                             value={guestId}
//                             onChange={(e)=>onInputChange(e)}
//                             id="rent"
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-outline-primary" >Submit</button>
//                     <Link to="/reservation/viewall" className="btn btn-outline-danger mx-2">Cancel</Link>
//                  </form>
//         </div>
//       </div>
//     </div>
//   )
// }
