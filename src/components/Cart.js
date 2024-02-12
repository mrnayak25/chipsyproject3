import React, { useContext, useEffect, useState } from "react";
import CartItems from "./CartItems";
import "../App.css";
import placeholderImage from "../images/no_data.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Cart() {
  const [items, setItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const getUser = useContext(AuthContext);
  useEffect(() => {
    const storedCartItems = localStorage.getItem("acartItems");
    if (storedCartItems) {
      setItems(JSON.parse(storedCartItems));
    }
    // eslint-disable-next-line
  }, []);

  const updateCart = (index, quantity) => {
    const newItems = [...items];
    newItems[index].quantity = quantity;
    localStorage.setItem("acartItems", JSON.stringify(newItems));
    setItems(newItems);
    console.log("updating index :" + index + "" + quantity);
    return newItems;
  };

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    setGrandTotal(total.toFixed(2));
  }, [items]);

  const deleteCart = (index) => {
    const check = window.confirm("Are you sure you want to delete this item?");
    if (check) {
      console.log("deleting index :" + index);
      const newItems = items.filter((item, i) => i !== index);
      localStorage.setItem("acartItems", JSON.stringify(newItems));
      setItems(newItems);
    }
  };
  return (
    <div>
      <h1 className="mx-5">Your Cart</h1>
      {items.length > 0 ? (
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <CartItems key={index} item={item} index={index} deleteCart={deleteCart} updateCart={updateCart} />
            </div>
          ))}
          <div className="sticky">
            <div className="cartBottom">
              <div className="d-flex">
                <h1>Grand Total: </h1>
                <h1>${grandTotal}</h1>
              </div>
              <div>
                {getUser.logedIn ? (
                  <Link to="/cart/checkout">
                    <button className="btn btn-warning">Place Order</button>
                  </Link>
                ) : (
                  <Link to="/signup">
                    <button className="btn btn-warning">Sign Up</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <img className="img-fluid rounded mx-auto" src={placeholderImage} alt="Placeholder" />
      )}
    </div>
  );
}

export default Cart;
