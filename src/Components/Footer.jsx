import React from 'react'
import "./css/footer.css"

const Footer = () => {
  return (

    <div className="footer">
    <div className="container">
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                About us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                About
              </a>
            </li>
          </ul>
        </div>


        <div className="col-md-6 offset-md-4 mb-4">
          <form className='footer-form'>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>


      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p className='copyright-content'>© 2022 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#twitter" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#instagram" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#facebook" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
  
  </div>
  
  )
}

export default Footer