import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewReservation() {

  const [user, setUser] = useState({
    reservationId: "",
    roomId:"",
    guestId:"",
    checkInDate: "",
    checkOutDate:"",
    noOfGuest:"",
    totalPrice:""
  });

  const { reservationId } = useParams();

  useEffect(() => {
    loadUser();
  },[]);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8888/reservation/view/${reservationId}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Reservation Details</u></h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>Reservation ID: </b>&ensp;
                  {user.reservationId}
                </li>
                <li className="list-group-item">
                  <b>Room ID: </b>&ensp;
                  {user.roomId}
                </li>
                <li className="list-group-item">
                  <b>Guest ID:</b>&ensp;
                  {user.guestId}
                </li>
                <li className="list-group-item">
                  <b>Check In Date:</b>&ensp;
                  {user.checkInDate}
                </li>
                <li className="list-group-item">
                  <b>Check Out Date:</b>&ensp;
                  {user.checkOutDate}
                </li>
                <li className="list-group-item">
                  <b>No of Guests:</b>&ensp;
                  {user.noOfGuest}
                </li>
                <li className="list-group-item">
                  <b>Total Cost:</b>&ensp;
                  {user.totalPrice}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/reservation/viewall"}>
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}