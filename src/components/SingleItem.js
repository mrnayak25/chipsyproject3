import React, { useState } from "react";
import cart from "../images/shopping-cart.png"
import "../App.css";

function SingleItem(props) {
  const [product, setProduct] = useState({});
  const getProduct = async () => {
    props.setProgress(0);
    let url = `https://fakestoreapi.com/products/${props.id}`;
    props.setProgress(20);
    props.setProgress(40);
    try {
      let data = await fetch(url);
      props.setProgress(60);
      let parsedData = await data.json();
      props.setProgress(80);
      setProduct(parsedData);
      props.setProgress(100);
    } catch (error) {
      console.log(error);
    }
  };
  useState(() => {
    getProduct();
  }, [props.id]);
  return (
    <div className="d-flex ">
      <div className="main-img">
        <img className="img-fluid mx-auto my-3" src={product.image} alt="Product" />
      </div>
      <div className="text-center pt-5 mx-5">
        <h5 className="fs-1 my-5 fw-bolder">{product.title}</h5>
        <p className="fs-4 mx-2 my-2 ">{product.description}</p>
        <p className="fs-1 mx-5 my-5 fw-medium">Price: ${product.price}</p>
        <div className="mb-4">
          <button className="btn btn-success mx-3 fs-4">Buy Now</button>
          <button type="button" className="btn btn-outline-secondary waves-effect fs-4"><img className="cart-img" src={cart} alt="cart"/>  Add To Cart</button>   
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
