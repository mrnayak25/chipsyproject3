import React, { useEffect, useState } from 'react'
import ItemView from './ItemView'
import '../App.css'
import { Link } from 'react-router-dom';
function Home(props) {
    const [uniqueProducts, setUniqueProducts] = useState([]);

    const updateProducts = async () => {
        props.setProgress(0);
        let url = `https://fakestoreapi.com/products`;
        props.setProgress(20);
        props.setProgress(40);
        try {
            let data = await fetch(url);
            props.setProgress(60);
            let parsedData = await data.json();
            props.setProgress(80);

            // Filter unique items based on category
            const uniqueProductsByCategory = {};
            parsedData.forEach(product => {
                if (!uniqueProductsByCategory[product.category]) {
                    uniqueProductsByCategory[product.category] = product;
                }
            });

            const uniqueProductsArray = Object.values(uniqueProductsByCategory);
            setUniqueProducts(uniqueProductsArray);

            props.setProgress(100);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        updateProducts();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    {uniqueProducts.map((product, index) => (
                        <li key={index} data-bs-target="#carouselId" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></li>
                    ))}
                </ol>
                <div className="carousel-inner" role="listbox">
                    {uniqueProducts.map((product, index) => (
                        <div className={"carousel-item" + (index === 0 ? " active" : "")} key={index}>
                            <div className='carousel-div'>
                            <div className='carousel-img-div'>
                                <div className='card'>
                            <img src={product.image} className="carousel-image"alt={product.title} />
                            </div>
                            </div>
                            <div className='carousel-txt-div'>
                                <h2>{product.title}</h2>
                                <Link to={`/${product.category}`} className='btn btn-info'>Explore</Link>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId"  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
                <ItemView setProgress={props.setProgress} category=" " />
          
        </div>
  )
}

export default Home
