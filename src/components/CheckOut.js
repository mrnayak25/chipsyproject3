import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import OrderSummary from './OrderSummary';
import useRazorpay from "react-razorpay";

function CheckOut() {
const getuser =useContext(AuthContext)
const[totalAmount,setTotalAmount] =useState(0)
const [formData, setFormData] = useState({
  "email": getuser.user.email,
 "name":getuser.user.firstName+" "+getuser.user.lastName,
 "address":getuser.user.street+","+getuser.user.street +","+getuser.user. zipcode,
  "phone":getuser.user.phone,
})

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
   document.body.appendChild(script);
 });
};

useEffect(() => {
  loadScript("https://checkout.razorpay.com/v1/checkout.js");
});


const options = {
  key: "rzp_test_wQXytoNhWUC7jV",
  currency: "INR",
  amount: totalAmount,
  name: "Learning To Code Online",
  description: "Test Wallet Transaction",
  image: "http://localhost:1337/logo.png",
  order_id: 234556,
  handler: function (response) {
    alert(response.razorpay_payment_id);
    alert(response.razorpay_order_id);
    alert(response.razorpay_signature);
  },
  prefill: {
    name: "Anirudh Jwala",
    email: "anirudh@gmail.com",
    contact: "9999999999",
  },
};
const display =()=>{
const paymentObject = new window.Razorpay(options);
paymentObject.open();
}

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return (
    <div>
        <div className="checkout-container">
      <div className="checkout-form-container">
        <h2>Checkout</h2>
        <form className="checkout-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
      <label htmlFor="address">Address:</label>
      <textarea id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
      <button onClick={()=>{display();}}>Place Order</button>
    </form>
      </div>
      <OrderSummary/>
    </div>
    </div>
  )
}

export default CheckOut
