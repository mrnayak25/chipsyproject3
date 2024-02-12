import React, { useEffect, useState } from "react";

function OrderSummary() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("acartItems");
    if (storedCartItems) {
      setItems(JSON.parse(storedCartItems));
      console.log(items);
    }
  }, []);

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
                    <div lassName="card-body">
                      <h6 className="mx-2">{item.product.title}</h6>
                      <div className="d-flex mx-2">
                        <p className="card-text">Price: ${item.product.price}</p>
                        <p className="card-text mx-4">Quantity: {item.quantity}</p>
                        <p className="card-text">Total: ${item.price * item.quantity}</p>
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
