import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import Item from './Item'

function ItemView(props) {
    const sampleproducts =[]
const [products,setProducts]=useState(sampleproducts)

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

  return (
    <>
    <h1 style={{textAlign:"center", position:"sticky"}}>{props.categoryName}</h1>
      <Item products={products} setId={props.setId}/>
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
