import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewRoom() {

  const [user, setUser] = useState({
   roomId:"",
   roomType:"",
   roomRent:"",
   roomAvailable:""
  });

  const { roomId } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8888/room/view/${roomId}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Room Details</u></h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b> ID: </b>&ensp;
                  {user.roomId}
                </li>
                <li className="list-group-item">
                  <b> Type:</b>&ensp;
                  {user.roomType}
                </li>
                <li className="list-group-item">
                  <b>Rent:</b>&ensp;
                  {user.roomRent}
                </li>
                <li className="list-group-item">
                  <b>Availability:</b>&ensp;
                  {user.roomAvailable}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/room/viewall"}>
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}