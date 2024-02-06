import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
  const onchange = (e) => {
    props.setSearchQuery(e.target.value);
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
        <Link className="nav-link" to="/cart">Cart</Link>
      </div>
      <div className='d-flex justify-content-center text-center navbar-nav'>
     <Link  className="nav-link mx-5" to="/signin">SignIn</Link>
    <form className="d-flex mt-3 mx-3" role="search">
          <input className="form-control me-2" type="search"  value={props.searchQuery} placeholder="Search" aria-label="Search"  onChange={onchange}/>
          <Link to="/search"><button className="btn btn-outline-success" type="submit">Search</button></Link>
        </form>
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
