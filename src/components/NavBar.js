import React from 'react'
import { Link } from 'react-router-dom'
import imgcart from '../images/trolley.png'
import searchbar from '../images/loupe.png'
import '../App.css'

function NavBar(props) {
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">My Space</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" aria-current="page" to='/'>Home</Link>
        <Link className="nav-link" to='/electronics'>Electronics</Link>
        <Link className="nav-link" to='/jewelery'>Jewelery</Link> 
        <Link className="nav-link" to="/men's clothing">Men's Clothing</Link>
        <Link className="nav-link" to="/women's clothing">Women's Clothing</Link>
        
      </div>
      <div className='d-flex justify-content-center text-center navbar-nav'>
     <Link  className="nav-link mx-2" to="/signin">SignIn</Link>
      <Link to="/search"><img className="cart-img mx-2" src={searchbar} alt="cart" /></Link>
      <Link className="mx-3"to="/cart"><img src={imgcart} alt="cart" className='cart-img'/></Link>
      
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
