import React, { useEffect, useRef, useState } from 'react'
import PropTypes from "prop-types";
import Item from './Item'
import '../App.css'
function ItemView(props) {
    const sampleproducts =[]
const [products,setProducts]=useState(sampleproducts)
const ref=useRef(null);
const [selectedProduct, setSelectedProduct] = useState({});
const [cartItems,setCartItems] =useState([])

const updateproducts = async ()=>{
    props.setProgress(0);
    let url=`https://fakestoreapi.com/products${props.category}`
    props.setProgress(20);
    props.setProgress(40);
    try {
      let data = await fetch(url);
      props.setProgress(60);
      let parsedData = await data.json();
      props.setProgress(80);
      setProducts(parsedData);
      props.setProgress(100);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}
useEffect(() => {
    //  document.title=`${cap}`
   updateproducts();
   console.log(products);
     // eslint-disable-next-line
   },[]);
   useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, [cartItems]);

  const store = () => {
    const items = JSON.stringify({
      'id':selectedProduct.id,
      'date':new Date().toLocaleString(),
      'quantity':quantity,
      'product':selectedProduct
    });
    localStorage.setItem("cartItems",...cartItems,items);
    ref.current.click();
    setQuantity(0)
  }

   const openModel = (index) => {
    setSelectedProduct(products[index]);
    ref.current.click();
  };
  const [quantity, setQuantity] = useState(1)
    
        const handleIncrement = () => {
          setQuantity(quantity + 1);
        };
      
        const handleDecrement = () => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
          }
        };
  return (
    <>
    <h1 style={{textAlign:"center", position:"sticky"}}>{props.categoryName}</h1>
      <Item products={products} setId={props.setId} openModel={openModel}/>

      <button ref ={ref} type="button" className="btn btn-primary btn-lg d-none" data-bs-toggle="modal" data-bs-target="#modalId"> Launch </button>

      <div className="modal fade" id="modalId" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="modalTitleId"> Add To Cart </h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={() => ref.current.click()}></button>
      </div>
      <div className='d-flex justify-content-center'>
        <img className="card-img-top py-5" src={selectedProduct.image} alt="..." />
      </div>
      <h3 className='px-5'>{selectedProduct.title}</h3>
      <div className='d-flex justify-content-around my-3'>
        <h4>Quantity</h4>
        <div className="quantity-control d-flex text justify-content-center ">
          <button onClick={handleDecrement}>-</button>
          <h4 className='mx-3'>{quantity}</h4>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={() => ref.current.click()}> Close </button>
        <button type="button" className="btn btn-primary" onClick={()=>store()}>Add To Cart</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
ItemView.defaultProps={
  category:"",
  categoryName:""
}
ItemView.propTypes={
  category: PropTypes.string,
  categoryName:PropTypes.string
}

export default ItemView
