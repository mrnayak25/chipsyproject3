import React, { useEffect, useState } from "react";
import Item from "./Item";
import placeholderImage from '../images/no_data.jpg'

function Search(props) {
  const [products, setProducts] = useState([]);

  const updateproducts = async () => {
    props.setProgress(0);
    let url = `https://fakestoreapi.com/products`;
    props.setProgress(20);
    props.setProgress(40);
    try {
      let data = await fetch(url);
      props.setProgress(60);
      let parsedData = await data.json();
      props.setProgress(80);
      const searchedProducts = parsedData.filter(
        (product) =>
          product.title.toLowerCase().search(props.searchQuery.toLowerCase()) >=
          0
      );
      setProducts(searchedProducts);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    updateproducts();
    console.log(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.searchQuery]);
  return (
    <div>
    <h1 className="mx-5">Results For: "{props.searchQuery}"</h1>
    {products.length > 0 ? (
      <Item products={products} setId={props.setId} />
    ) : (
      <img className="img-fluid rounded mx-auto" src={placeholderImage} alt="Placeholder" />
    )}
  </div>
  );
}

export default Search;
