import React from 'react'
import '../App.css';
function Item(props) {
  return (
    <div className="row mx-3">
    {props.products.map((element) => {
      return ( 
        <div className="col-md-3 my-3" key={element.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top"src={element.image} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{element.title ? element.title.slice(0, 40) : ""}...</h5>
              <p className="card-text">{element.description? element.description.slice(0, 90): ""}...</p>
              <h2 className='card-text'>${element.price}</h2>
              <div style={{display:"flex",justifyContent:'space-between'}}>
              <a href="/" className="btn btn-primary">Buy Now</a>
              <a href="/" className="btn btn-warning ">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default Item
