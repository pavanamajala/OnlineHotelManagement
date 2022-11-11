import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import Auth from "../Auth/auth";

function ViewAllGuest(){

    const [users, setUsers] = useState([]);

    const{guestId}=useParams()

    useEffect(()=>{
        loadUsers();
    }, []);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8888/guest/viewall",{headers:Auth()});
        setUsers(result.data);
    }

    const deleteUser=async (guestId)=>{
        await axios.delete(`http://localhost:8888/guest/delete/${guestId}`)
        loadUsers();
    }

    return (

      <div className="">
           
     <div className="container">
      <div className="py-4">

      <nav className="navbar   ">
      <div className="container-fluid">
          <h2><u>Guest Details</u></h2>
        
        <a href="./add" className="btn btn-warning" >
          Add Guest
        </a>
        
      </div>
    </nav>
        
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">ID</th>
              <th scope="col"> Name</th>
              <th scope="col"> Contact</th>
              <th scope="col"> Email</th>
              <th scope="col"> Gender</th>
              <th scope="col"> Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
               
               <tr>
               <th scope="row"key={index}>{index+1}</th>
               <td>{user.guestId}</td>
               <td>{user.guestName}</td>
               <td>{user.guestContact}</td>
               <td>{user.guestEmail}</td>
               <td>{user.guestGender}</td>
               <td>{user.guestAddress}</td>
               <td>
                   <Link className="btn btn-primary mx-2"
                   to={`/guest/view/${user.guestId}`}>View</Link>
                   <Link  className="btn btn-outline-primary mx-2"
                   to={`/guest/update/${user.guestId}`} >Edit</Link>
                   <button className="btn btn-danger mx-2"
                   onClick={()=>deleteUser(user.guestId)}
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

export default ViewAllGuest