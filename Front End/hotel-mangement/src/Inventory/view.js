import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Auth from "../Auth/auth";

export default function ViewInventory() {

  const [user, setUser] = useState({
   inventoryId:"",
   inventoryName:"",
   inventoryType:"",
   inventoryStock:""
  });

  const { inventoryId } = useParams();

  useEffect(() => {
    loadUser();
  },[]);

  const loadUser = async () => {
    const result = await axios.get(`http://13.49.68.81:8888/inventory/view/${inventoryId}`,{headers:Auth()});
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Inventory Details</u></h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>ID: </b>&ensp;
                  {user.inventoryId}
                </li>
                <li className="list-group-item">
                  <b>Name: </b>&ensp;
                  {user.inventoryName}
                </li>
                <li className="list-group-item">
                  <b>Type:</b>&ensp;
                  {user.inventoryType}
                </li>
                <li className="list-group-item">
                  <b>Stock:</b>&ensp;
                  {user.inventoryStock}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/inventory/viewall"}>
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}