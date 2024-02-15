import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import OrderSummary from "./OrderSummary";
import '../App.css'

function CheckOut() {
  const getuser = useContext(AuthContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [formData, setFormData] = useState({
    email: getuser.user.email,
    name: getuser.user.firstName + " " + getuser.user.lastName,
    address: getuser.user.street + "," + getuser.user.street + "," + getuser.user.zipcode,
    phone: getuser.user.phone,
  });

  const displayRazorpay = (amount)=>{
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_YCsMZnFVUYsSjM",
        key_secret:"6InftqEninCAQt8ZzAsdGs5B",
        amount: amount *100,
        currency:"INR",
        name:"My Space",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:formData.name,
          email:formData.email,
          contact:formData.phone,
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:" #ff5e00"
        }
      };
      const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="checkout-container">
        <div className="checkout-form-container">
          <h2>Checkout</h2>
          <div className="checkout-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
            <h5>Total Amount :{totalAmount}</h5>
            <button className="btn btn-danger"
              onClick={() => {
                displayRazorpay(totalAmount);
              }}>
              Place Order
            </button>
          </div>
        </div>
        <OrderSummary setTotalAmount={setTotalAmount} totalAmount={totalAmount}/>
      </div>
    </div>
  );
}

export default CheckOut;
