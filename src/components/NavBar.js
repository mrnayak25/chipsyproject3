import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">My Space</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" aria-current="page" to='/'>Home</Link>
        <Link className="nav-link" to='/electronics'>Electronics</Link>
        <Link className="nav-link" to='/jewelery'>Jewelery</Link> 
        <Link className="nav-link" to='/mensclothing'>Men's Clothing</Link>
        <Link className="nav-link" to='/womensclothing'>Women's Clothing</Link>
      </div>
    </div>
    <form className="d-flex mt-3 mx-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
  </div>
</nav>
    </div>
  )
}

export default NavBar
