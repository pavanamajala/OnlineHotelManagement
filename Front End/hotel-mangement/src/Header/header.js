import React from 'react'
// import logo from '../Images/logo.png'
import './header.scss'

export default function Header() {
  return (

    <nav className="navbar navbar-dark pavhead">
      <div className="container-md">
        <a className="navbar-brand text-left text-dark" href="/">Home</a>
        <div className="navbar-brand text-centre">
          <b className='text-dark'>Online Hotel Management</b>
        </div>
        <div className='navbar-brand text-right operations-header'>
          <div className='pavresume text-dark'>Operations</div>
          <div className='operations'>
            <div style={{ display: 'grid' }}>
              <a href='/reservation/viewall'>Reservation</a>
              <a href='/guest/viewall'>Guest</a>
              <a href='/room/viewall'>Room</a>
              <a href='/user/employee/viewall'>Employee</a>
              <a href='/inventory/viewall'>Inventory</a>
            </div>
            <div style={{ display: 'grid' }}>
              <a href='/receptionist'>Owner</a>
              <a href='/manager'>Manager</a>
              <a href='/receptionist'>Receptionist</a>
            </div>
          </div>
        </div>
        <div className='navbar-brand text-right '>
          <a className='pavresume text-dark' href="/about">About</a>
        </div>
        <div className='navbar-brand text-right '>
          <a className='pavresume text-dark' href="/contact">Contact</a>
        </div>
        <div className='navbar-brand text-right '>
          <a className='pavresume text-dark' href="/login">Login</a>
        </div>
      </div>
      {/* <div>
          <img className='headlogo' src={logo} alt=''></img>
        </div> */}
    </nav>

  )
}
