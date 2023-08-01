
import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Auth from "../Auth/auth";

export default function ViewEmployee() {

  const [user, setUser] = useState({
    employeeId:"",
    employeeName:"",
    employeeSalary:"",
    employeeEmail:"",
   employeeType:""
  });

  const { employeeId } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://13.49.68.81:8888/user/employee/view/${employeeId}`,{headers:Auth()});
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Employee Details</u></h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>ID: </b>&ensp;
                  {user.employeeId}
                </li>
                <li className="list-group-item">
                  <b>Name: </b>&ensp;
                  {user.employeeName}
                </li>
                <li className="list-group-item">
                  <b>Salary:</b>&ensp;
                  {user.employeeSalary}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>&ensp;
                  {user.employeeEmail}
                </li>
                <li className="list-group-item">
                  <b>Type:</b>&ensp;
                  {user.employeeType}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/user/employee/viewall"}>
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}