import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function ViewAllReservation(){

  const [users, setUsers] = useState([]);

  // const{reservationId}=useParams()

  useEffect(()=>{
      loadUsers();
  }, []);

  const loadUsers=async()=>{
      const result=await axios.get("http://16.171.133.10:8888/reservation/viewall");
      setUsers(result.data);
  }

  const deleteUser=async (reservationId)=>{
      const del=await axios.delete(`http://16.171.133.10:8888/reservation/delete/${reservationId}`)
      alert(del.data)
      loadUsers()
  }


    return (

      <div className="">
           
     <div className="container">
      <div className="py-4">

      <nav className="navbar   ">
      <div className="container-fluid">
          <h2><u>Reservation Details</u></h2>

        <a href="./add" className="btn btn-warning" >
          Add Reservation
        </a>
        
      </div>
    </nav>
        
        <table className="table border shadow">
          <thead>
          <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">Reservation ID</th>
              <th scope="col"> Room ID</th>
              <th scope="col"> Guest ID</th>
              <th scope="col"> Check In Date</th>
              <th scope="col">Check Out Date</th>
              <th scope="col">No Of Guests</th>
              <th scope="col">Total Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
               
               <tr>
               <th scope="row"key={index}>{index+1}</th>
               <td>{user.reservationId}</td>
               <td>{user.roomId}</td>
               <td>{user.guestId}</td>
               <td>{user.checkInDate}</td>
               <td>{user.checkOutDate}</td>
               <td>{user.noOfGuest}</td>
               <td>{user.totalPrice}</td>
               <td>
                   <Link className="btn btn-primary mx-2"
                   to={`/reservation/view/${user.reservationId}`}>View</Link>
                   <Link  className="btn btn-outline-primary mx-2"
                   to={`/reservation/update/${user.reservationId}`} >Edit</Link>
                   <button className="btn btn-danger mx-2"
                   onClick={()=>deleteUser(user.reservationId)}
                   >Delete</button>
               </td>
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  </div>
  </div>

    );
}

export default ViewAllReservation;




// import axios from "axios";
// import React, {useEffect, useState} from "react";
// import { Link, useParams } from "react-router-dom";

// function ViewAllReservation(){

//   const [users, setUsers] = useState([]);

//   const{reservationId}=useParams()

//   useEffect(()=>{
//       loadUsers();
//   }, []);

//   const loadUsers=async()=>{
//       const result=await axios.get("http://localhost:8085/reservation/viewall");
//       setUsers(result.data);
//   }

//   const deleteUser=async (reservationId)=>{
//       await axios.delete(`http://localhost:8085/reservation/delete/${reservationId}`)
//       loadUsers()
//   }


//     return (

//       <div className="">
           
//      <div className="container">
//       <div className="py-4">

//       <nav className="navbar   ">
//       <div className="container-fluid">
//           <h2><u>Reservation Details</u></h2>
        
//         <a href="./add" className="btn btn-warning" >
//           Add Reservation
//         </a>
        
//       </div>
//     </nav>
        
//         <table className="table border shadow">
//           <thead>
            // <tr>
            //   <th scope="col">Sl.No</th>
            //   <th scope="col">Reservation ID</th>
            //   <th scope="col"> Room ID</th>
            //   <th scope="col"> Guest ID</th>
            //   <th scope="col"> Check In Date</th>
            //   <th scope="col">Check Out Date</th>
            //   <th scope="col">No Of Guests</th>
            //   <th scope="col">Total Price</th>
            //   <th scope="col">Action</th>
            // </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
               
              //  <tr>
              //  <th scope="row"key={index}>{index+1}</th>
              //  <td>{user.reservationId}</td>
              //  <td>{user.roomId}</td>
              //  <td>{user.guestId}</td>
              //  <td>{user.checkInDate}</td>
              //  <td>{user.checkOutDate}</td>
              //  <td>{user.noOfGuest}</td>
              //  <td>{user.totalPrice}</td>
              //  <td>
//                    <Link className="btn btn-primary mx-2"
//                    to={`/reservation/view/${user.reservationId}`}>View</Link>
//                    <Link  className="btn btn-outline-primary mx-2"
//                    to={`/reservation/update/${user.reservationId}`} >Edit</Link>
//                    <button className="btn btn-danger mx-2"
//                    onClick={()=>deleteUser(user.reservationId)}
//                    >Delete</button>
//                </td>
//                </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
    
//   </div>
//   </div>

//     );
// }

// export default ViewAllReservation;
