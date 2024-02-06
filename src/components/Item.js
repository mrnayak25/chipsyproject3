import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import cart from "../images/shopping-cart.png"
function Item(props) {
  return (
    <div className="row mx-3">
      {props.products.map((element) => {
        return (
          <div className="col-md-3 my-3" key={element.id}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-img-div">
            <Link to="/singleproduct" onClick={() => { props.setId(element.id); }}>
                <img className="card-img-top" src={element.image} alt="..." /></Link>
                </div>
                <div className="card-body">
                <Link to="/singleproduct" onClick={() => { props.setId(element.id); }}>
                  <h5 className="card-title">
                    {element.title ? element.title.slice(0, 40) : ""}...
                  </h5>
                  <p className="card-text">
                    {element.description
                      ? element.description.slice(0, 90)
                      : ""}
                    ...
                  </p>
                  <h2 className="card-text">${element.price}</h2>
                  </Link>
                </div>
                <div className="button-div">
                <button href="/" className="btn btn-primary"> Buy Now </button>
                <img src={cart} alt="cart"/>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Item;
