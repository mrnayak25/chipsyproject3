import React, { useEffect, useState } from "react";

function OrderSummary(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("acartItems");
    if (storedCartItems) {
      setItems(JSON.parse(storedCartItems));
    }
  }, []);

  const calculateTotalAmount = () => {
    let total = 0;
    items.forEach((item) => {
      total += calculateTotal(item.product.price, item.quantity);
    });
    return total;
  };

  const calculateTotal = (price, quantity) => {
    const totalPrice =parseFloat(String(price).replace("$", "")) * quantity;
    return totalPrice;
  };

  useEffect(() => {
    props.setTotalAmount(calculateTotalAmount());
  }, [items]); 

  return (
    <div className="order-summary-container">
      <div className="order-summary">
        <h3>Order Summary</h3>
        {items.length > 0 && (
          <ul>
            {items.map((item, index) => (
              <div key={index} className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-2">
                    <img src={item.product.image} className="img-fluid " alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6 className="mx-2">{item.product.title}</h6>
                      <div className="d-flex mx-2">
                        <p className="card-text">Price: ${item.product.price}</p>
                        <p className="card-text mx-4">Quantity: {item.quantity}</p>
                        <p className="card-text">Total: ${calculateTotal(item.product.price , item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        )}
        {items.length === 0 && <p>No items in the order.</p>}
      </div>
      
    </div>
  );
}

export default OrderSummary;
