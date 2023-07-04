import React from 'react'
import image1 from "../image/image1.jpg"
import image2 from "../image/image2.jpg"
import image3 from "../image/image3.jpg"


const Hero = () => {
  return (
    <div>
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1}className="d-block w-100"height={"700px"} alt="image1" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Peaceful Places</h5>
        <p>Travel Without Limits.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100"height={"700px"} alt="image2" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Mountains</h5>
        <p>Travel Without Limits.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100"height={"700px"} alt="image3" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Cities</h5>
        <p>Travel Without Limits.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>





    </div>
  )
}

export default Hero