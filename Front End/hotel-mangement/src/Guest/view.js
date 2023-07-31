import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Auth from "../Auth/auth";

export default function ViewGuest() {

  const [user, setUser] = useState({
   guestId:"",
   guestName:"",
   guestContact:"",
   guestEmail:"",
   guestGender:"",
   guestAddress:""
  });

  const { guestId } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://16.171.135.69:8888/guest/view/${guestId}`,{headers:Auth()});
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Guest Details</u></h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>ID: </b>&ensp;
                  {user.guestId}
                </li>
                <li className="list-group-item">
                  <b>Name: </b>&ensp;
                  {user.guestName}
                </li>
                <li className="list-group-item">
                  <b>Contact:</b>&ensp;
                  {user.guestContact}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>&ensp;
                  {user.guestEmail}
                </li>
                <li className="list-group-item">
                  <b>Gender:</b>&ensp;
                  {user.guestGender}
                </li>
                <li className="list-group-item">
                  <b>Address:</b>&ensp;
                  {user.guestAddress}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/guest/viewall"}>
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}