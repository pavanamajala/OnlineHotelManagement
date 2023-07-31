import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/auth";

function ViewAllInventory() {

  const [users, setUsers] = useState([]);

  // const { inventoryId } = useParams()

  useEffect(() => {
    loadUsers();
  },[]);

  const loadUsers = async () => {
    const result = await axios.get("http://16.171.135.69:8888/inventory/viewall");
    setUsers(result.data);
  }

  const deleteUser = async (inventoryId) => {
    await axios.delete(`http://16.171.135.69:8888/inventory/delete/${inventoryId}`, { headers: Auth() })
    loadUsers()
  }


  return (

    <div className="">

      <div className="container">
        <div className="py-4">

          <nav className="navbar   ">
            <div className="container-fluid">
              <h2><u>Inventory Details</u></h2>

              <a href="./add" className="btn btn-warning" >
                Add Inventory
              </a>

            </div>
          </nav>

          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Sl.No</th>
                <th scope="col">ID</th>
                <th scope="col"> Name</th>
                <th scope="col"> Type</th>
                <th scope="col"> Stock</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (

                <tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{user.inventoryId}</td>
                  <td>{user.inventoryName}</td>
                  <td>{user.inventoryType}</td>
                  <td>{user.inventoryStock}</td>
                  <td>
                    <Link className="btn btn-primary mx-2"
                      to={`/inventory/view/${user.inventoryId}`}>View</Link>
                    <Link className="btn btn-outline-primary mx-2"
                      to={`/inventory/update/${user.inventoryId}`} >Edit</Link>
                    <button className="btn btn-danger mx-2"
                      onClick={() => deleteUser(user.inventoryId)}
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

export default ViewAllInventory;

