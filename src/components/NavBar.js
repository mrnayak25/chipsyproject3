import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import imgcart from '../images/trolley.png'
import searchbar from '../images/loupe.png'
import '../App.css'
import { AuthContext } from '../context/AuthContext'
import 'bootstrap/dist/css/bootstrap.css';

function NavBar(props) {
  const [priceFilter, setPriceFilter] = useState('');
  const a = useContext(AuthContext)
  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
};

const signOut =()=>{
  const check = window.confirm("Are you sure you want to SignOut ?");
    if (check) {
      a.setLogedIn(false)
      a.setUser({})
      localStorage.setItem('user', JSON.stringify(null));
    }
  };

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
      {a.logedIn ? (
               <div className="dropdown">
               <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hello {a.user.firstName} {a.user.lastName}
               </button>
               <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                 <option className="dropdown-item" onClick={()=>{
                  signOut();
                 }}>SignOut</option>
                 
               </div>
             </div>
              ) : (
                <Link className="nav-link mx-2" to="/signup">SignUp</Link>
              )}
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
