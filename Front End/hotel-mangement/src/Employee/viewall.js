import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/auth";

function ViewAllEmployee(){

  const [users, setUsers] = useState([]);

  // const{employeeId}=useParams()

  useEffect(()=>{
      loadUsers();
  }, []);

  const loadUsers=async()=>{
      const result=await axios.get("http://localhost:8888/user/employee/viewall",{headers:Auth()});
      setUsers(result.data);
  }

  const deleteUser=async (employeeId)=>{
      await axios.delete(`http://localhost:8888/user/employee/delete/${employeeId}`,{headers:Auth()})
      loadUsers()
  }


    return (

      <div className="">
           
     <div className="container">
      <div className="py-4">

      <nav className="navbar   ">
      <div className="container-fluid">
          <h2><u>Employee Details</u></h2>
        
        <a href="./add" className="btn btn-warning" >
          Add Employee
        </a>
        
      </div>
    </nav>
        
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">ID</th>
              <th scope="col"> Name</th>
              <th scope="col"> Salary</th>
              <th scope="col"> Email</th>
              <th scope="col"> Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
               
               <tr>
               <th scope="row"key={index}>{index+1}</th>
               <td>{user.employeeId}</td>
               <td>{user.employeeName}</td>
               <td>{user.employeeSalary}</td>
               <td>{user.employeeEmail}</td>
               <td>{user.employeeType}</td>
               <td>
               <Link className="btn btn-primary mx-2"
                   to={`/user/employee/view/${user.employeeId}`}>View</Link>
                   <Link  className="btn btn-outline-primary mx-2"
                   to={`/user/employee/update/${user.employeeId}`} >Edit</Link>
                   <button className="btn btn-danger mx-2"
                   onClick={()=>deleteUser(user.employeeId)}
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

export default ViewAllEmployee;





// import axios from "axios";
// import React, {useEffect, useState} from "react";
// import { Link, useParams } from "react-router-dom";

// export default function ViewAllEmployee(){

//   const [users, setUsers] = useState([]);

//   const{employeeId}=useParams()

//   useEffect(()=>{
//       loadUsers();
//   }, []);

//   const loadUsers=async()=>{
//       const result=await axios.get("http://localhost:8083/user/employee/viewall");
//       setUsers(result.data);
//   }

//   const deleteUser=async (employeeId)=>{
//       await axios.delete(`http://localhost:8083/employee/delete/${employeeId}`)
//       loadUsers()
//   }


//     return (

//       <div className="">
           
//      <div className="container">
//       <div className="py-4">

//       <nav className="navbar   ">
//       <div className="container-fluid">
//           <h2><u>Employee Details</u></h2>
        
//         <a href="./add" className="btn btn-warning" >
//           Add Employee
//         </a>
        
//       </div>
//     </nav>
        
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">Sl.No</th>
//               <th scope="col">ID</th>
//               <th scope="col"> Name</th>
//               <th scope="col"> Salary</th>
//               <th scope="col"> Email</th>
//               <th scope="col"> Type</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
               
//                <tr>
//                <th scope="row"key={index}>{index+1}</th>
//                <td>{user.employeeId}</td>
//                <td>{user.employeeName}</td>
//                <td>{user.employeeSalary}</td>
//                <td>{user.employeeEmail}</td>
//                <td>{user.employeeType}</td>
//                <td>
//                    <Link className="btn btn-primary mx-2"
//                    to={`/user/employee/view/${user.employeeId}`}>View</Link>
//                    <Link  className="btn btn-outline-primary mx-2"
//                    to={`/user/employee/update/${user.employeeId}`} >Edit</Link>
//                    <button className="btn btn-danger mx-2"
//                    onClick={()=>deleteUser(user.employeeId)}
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

