import React from 'react'
import recep from "../Images/receptionist.png"

export default function Receptionist() {
  return (
    <div className="container ">
    <div className='pavhometxt'><img className='pavhomeimg' src={recep}></img></div>
    <div className="row pavhomelogin">
      <div className="col-md-4 offset-md-8 border rounded p-4 mt-5 shadow pavhombg">
        <h2 className='text-centre'>Hello Receptionist</h2><br></br>
            <a className='btn btn-primary btn-lg btn-block pavbut' href="/guest/viewall">Guest</a><br></br> <br></br>
            <a className='btn btn-secondary btn-lg btn-block pavbut' href="/reservation/viewall">Reservation</a><br></br> <br></br>
        </div>
        </div>
    </div>
  )
}
