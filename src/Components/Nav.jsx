import React from 'react'
import "./css/nav.css"

const Nav = () => {
  return (
   <div className='nav-container'>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
      <img className='navbar-image'src="https://png.pngtree.com/template/20191030/ourmid/pngtree-travel-logo-airplane-design-airplane-tickets-travel-agencies-image_325199.jpg" alt="logo"/>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item-Navbar">
          <a className="nav-link " aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item-Navbar">
          <a className="nav-link" href="#">
            About us
          </a>
        </li>
        <li className="nav-item-Navbar">
          <a className="nav-link" href="#">
            Contact us
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>


   </div>
  )
}

export default Nav