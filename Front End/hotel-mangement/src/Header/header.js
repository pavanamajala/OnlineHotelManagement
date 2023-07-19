import React from 'react'
// import logo from '../Images/logo.png'

export default function Header() {
  return (
    
    <nav className="navbar navbar-dark pavhead">
      <div className="container-md">
           <a className="navbar-brand text-left text-dark" href="/">Home</a>
        <div className="navbar-brand text-centre">
            <b className='text-dark'>E-BOOK MAKER APP</b>
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
