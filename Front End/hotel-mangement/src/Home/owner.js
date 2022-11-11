import React from 'react'
import owner from "../Images/owner.png"

export default function Owner() {
  return (
    <div className="container ">
    <div className='pavhometxt'><img className='pavhomeimg' src={owner}></img></div>
    <div className="row pavhomelogin">
      <div className="col-md-4 offset-md-8 border rounded p-4 mt-5 shadow pavhombg">
        <h2 className='text-centre'>Hello Owner</h2><br></br>
              <a className="btn btn-warning btn-lg btn-block pavbut" href="/inventory/viewall">Inventory</a><br></br><br></br>
            <a className='btn btn-success btn-lg btn-block pavbut' href="/room/viewall">Room</a><br></br><br></br>
            <a className='btn btn-primary btn-lg btn-block pavbut' href="/guest/viewall">Guest</a><br></br> <br></br>
            <a className='btn btn-secondary btn-lg btn-block pavbut' href="/reservation/viewall">Reservation</a><br></br> <br></br>
            <a className='btn btn-info btn-lg btn-block pavbut' href="/user/employee/viewall">Employee</a>
        </div>
        </div>
    </div>
  )
}
