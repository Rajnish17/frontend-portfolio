import React from 'react'
import "./css/contact.css"

const Contact = () => {
  return (

<div className='container_form'>
<div className='container_data'>
    <h3 className="heading">Contact Us</h3>
<form>
  <div className="form-group">
    <label htmlFor="f-name">Full NAME</label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter Name"
    />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
      type="email"
      className="form-control"
      placeholder="Enter email"
    />
  </div>

  <div className="form-group">
    <label htmlFor="contact no">Contact no</label>
    <input
      type="number"
      className="form-control"
      placeholder="Enter Contact no"
    />
  </div>

  <div className="form-group">
    <label htmlFor="address">Address</label>
    <textarea
      type="text"
      className="form-control"

      placeholder="Enter Your Address"
    />
  </div>
  <div className="form-group form-check">
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>


</div>

    </div>
  )
}

export default Contact