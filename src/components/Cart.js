import React, { useEffect, useState } from 'react'

function Cart() {
  const [selectedProduct, setSelectedProduct] = useState({});
const [cartItems,setCartItems] =useState([])
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, [cartItems]);
  return (
    <div>
      {cartItems.map((item,index)=>{
        return(
        <cartItems key={index} item={item}/>
      )})}
      
    </div>
  )
}

export default Cart

