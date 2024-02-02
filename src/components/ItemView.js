import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import Item from './Item'

function ItemView(props) {
    const sampleproducts =[{
        'id':1,
        'title': 'test product',
        'price': 13.5,
        'description': 'lorem ipsum set',
        'image': 'https://i.pravatar.cc',
        'category': 'electronic'
},
{
    'id':2,
    'title': 'test product2',
    'price': 15.5,
    'description': 'lorem ipsum set',
    'image': 'https://i.pravatar.cc',
    'category': 'electronic'
}
]
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
      <Item products={products}/>
    </>
  )
}
ItemView.defaultProps={
  category:""
}
ItemView.propTypes={
  category: PropTypes.string
}

export default ItemView
