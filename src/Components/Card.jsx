import React from 'react'
import "./css/card.css"

const Card = () => {
  return (
    <div className='card-header'>

        <h3 className='card-header-text'>Features</h3>
      <div className="card-group">

        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616_1280.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Visit Usa</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
            <button className='btn btn-primary'>Read more</button>
          </div>
        </div>


        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7r1MziMbC-zL-9LSJNbao_JidGr0-xDJYgFpVZlJtu5mLaW10KjKu2SyxSk0dFrnGVnA&usqp=CAU" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Visit Norway</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
            <button className='btn btn-primary'>Read more</button>

          </div>
        </div>


        <div className="card">
          <img src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2F1ZGklMjBhcmFiaWF8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Visit Saudi</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>
            <button className='btn btn-primary'>Read more</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card