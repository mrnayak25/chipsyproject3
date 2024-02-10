import React, { useEffect, useRef, useState } from 'react'
import PropTypes from "prop-types";
import Item from './Item'
import '../App.css'
import '@fortawesome/fontawesome-free/css/all.css'
function ItemView(props) {
    const sampleproducts =[]
const [products,setProducts]=useState(sampleproducts)
const ref=useRef(null);
const [selectedProduct, setSelectedProduct] = useState({});
const [filteredData,setFilteredData] =useState(sampleproducts)
const [cartItems,setCartItems] =useState([])
const [priceFilter, setPriceFilter] = useState('');

const updateproducts = async () => {
  try {
    const url = `https://fakestoreapi.com/products${props.category}${priceFilter}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setProducts(parsedData);
    filter(parsedData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const filter = (data) => {
  if (priceFilter === "") {
    setFilteredData(data);
  } else if (priceFilter === "?price=10") {
    const filteredProducts = data.filter(item => item.price <= 20);
    setFilteredData(filteredProducts);
  } else if (priceFilter === "?price=20") {
    const filteredProducts = data.filter(item => item.price <= 50);
    setFilteredData(filteredProducts);
  } else if (priceFilter === "?price=30") {
    const filteredProducts = data.filter(item => item.price <= 75);
    setFilteredData(filteredProducts);
  } else if (priceFilter === "?price=50") {
    const filteredProducts = data.filter(item => item.price <= 100);
    setFilteredData(filteredProducts);
  } else if (priceFilter === "?price=40") {
    const filteredProducts = data.filter(item => item.price > 100);
    setFilteredData(filteredProducts);
  }
}

useEffect(() => {
  updateproducts();
}, [priceFilter]); // Call updateproducts whenever priceFilter changes

useEffect(() => {
  const storedCartItems = localStorage.getItem("acartItems");
  if (storedCartItems) {
    setCartItems(JSON.parse(storedCartItems));
  }
}, []);


  const store = () => {
    const items = {
      'id': selectedProduct.id,
      'date': new Date().toLocaleString(),
      'quantity': quantity,
      'product': selectedProduct
    };
    const storedCartItems = JSON.parse(localStorage.getItem("acartItems")) || [];
    const existingItemIndex = storedCartItems.findIndex(item => item.id === selectedProduct.id);

    if (existingItemIndex !== -1) {
      storedCartItems[existingItemIndex].quantity += quantity;
    } else {
      storedCartItems.push(items);
    }
    console.log(cartItems);
    localStorage.setItem("acartItems", JSON.stringify(storedCartItems));
    ref.current.click();
    setQuantity(1);
  };

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
        const handlePriceFilterChange = (event) => {
          setPriceFilter(event.target.value);
      };
  return (
    <>
    <h1 className='catogery-headder'>
        {props.categoryName}
        <select className="form-select" onChange={handlePriceFilterChange}>
          <option value="">All Prices</option>
          <option value="?price=10">$20 or less</option>
          <option value="?price=20">$50 or less</option>
          <option value="?price=30">$75 or less</option>
          <option value="?price=50">$100 or less</option>
          <option value="?price=40">Above $100</option>
        </select>
      </h1>
      <Item products={filteredData} setId={props.setId} openModel={openModel}/>

      <button ref ={ref} type="button" className="btn btn-primary btn-lg d-none" data-bs-toggle="modal" data-bs-target="#modalId"> Launch </button>

      <div className="modal fade" id="modalId" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="modalTitleId"> Add To Cart </h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={() => ref.current.click()}></button>
      </div>
      <div className='d-flex justify-content-center'>
        <img className="model-img" src={selectedProduct.image} alt="..." />
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
