import React, { useEffect, useState } from 'react'
import CartItems from './CartItems';

function Cart() {
const [items,setItems] =useState([])
const [grandTotal,setGrandTotal]=useState(0)
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
  }

  const deleteCart = (index) => {
    console.log("deleting index :"+index)
    const newItems = items.filter((item, i) => i !== index);
    localStorage.setItem("acartItems", JSON.stringify(newItems));
    setItems(newItems);
  }
  return (
    <div>
      <h1 className='mx-5'>Your Cart</h1>
      {items.map((item,index)=>{
        return(
          <div key={index}>
        <CartItems key={index} item={item} index={index} deleteCart={deleteCart} updateCart={updateCart} />
        </div>
      )})}
      
    </div>
  )
}

export default Cart

