import React, { useEffect, useState } from "react";
import "../App.css";

function CartItems(props) {
  const [quantity, setQuantity] = useState(props.item.quantity);
  const product = props.item.product;

  const handleIncrement = (itemQuantity) => {
    setQuantity(quantity + 1);
    props.updateCart(product, itemQuantity + 1);
  };

  const handleDecrement = (itemQuantity) => {
    if (quantity > 1) {
      setQuantity(quantity- 1);
      props.updateCart(product, itemQuantity - 1);
    }
  };

  const [total, setTotal] = useState(0);
  useEffect(() => {
    const price = parseFloat(String(product.price).replace("$", ""));
    setTotal(price * quantity);
  }, [product.price, quantity]);

  return (
    <div>
      <div className="product">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h3>{product.title}</h3>
          <div className="quantity-control">
            <button onClick={()=>{handleDecrement(quantity)}}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>{handleIncrement(quantity)}}>+</button>
          </div>
          <div className="price">Price: ${product.price.toFixed(2)}</div>
          <div className="total-price">Total: ${total.toFixed(2)}</div>
        </div>
        <div className="buttons">
          <button
            className="trash"
            onClick={() => {
              props.deleteCart(props.index);
            }}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
