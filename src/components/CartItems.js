import React, { useState } from 'react'

function CartItems(props) {
        const [quantity, setQuantity] = useState(props.item.quantity)
    
        const handleIncrement = () => {
          setQuantity(quantity + 1);
        };
      
        const handleDecrement = () => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
          }
        };
        const totalPrice = quantity * props.price;
        const product = props.item.product
  return (
    <div>
      <div className="product">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <div className="quantity-control">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <div className="price">
          Price: ${props.price.toFixed(2)}
        </div>
        <div className="total-price">
          Total: ${totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
    </div>
  )

}

export default CartItems
