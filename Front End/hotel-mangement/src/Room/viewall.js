import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function ViewALLRoom(){

    const [users, setUsers] = useState([]);

    // const{roomId}=useParams()
  
    useEffect(()=>{
        loadUsers();
    }, []);
  
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8888/room/viewall");
        setUsers(result.data);
    }
  
    const deleteUser=async (roomId)=>{
        await axios.delete(`http://localhost:8888/room/delete/${roomId}`)
        loadUsers()
    }

    return (

      <div className="">
           
     <div className="container">
      <div className="py-4">

      <nav className="navbar   ">
      <div className="container-fluid">
          <h2><u>Room Details</u></h2>
        
        <a href="./add" className="btn btn-warning" >
          Add Room
        </a>
        
      </div>
    </nav>
        
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">ID</th>
              <th scope="col"> Type</th>
              <th scope="col"> Rent</th>
              <th scope="col"> Availability</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
               
               <tr>
               <th scope="row"key={index}>{index+1}</th>
               <td>{user.roomId}</td>
               <td>{user.roomType}</td>
               <td>{user.roomRent}</td>
               <td>{user.roomAvailable}</td>
               <td>
                   <Link className="btn btn-primary mx-2"
                   to={`/room/view/${user.roomId}`}>View</Link>
                   <Link  className="btn btn-outline-primary mx-2"
                   to={`/room/update/${user.roomId}`} >Edit</Link>
                   <button className="btn btn-danger mx-2"
                   onClick={()=>deleteUser(user.roomId)}
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

export default ViewALLRoom;