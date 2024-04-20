import React, { useContext, useState } from 'react';
import { Itemcontext } from './Shopcontext';
import { Link, useLocation } from 'react-router-dom';
import './App.css';
import Badge from 'react-bootstrap/Badge';
const Navbar = () => {
  const location = useLocation();
  const {cartitem} = useContext(Itemcontext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="#">
          Foods
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: '1200px' }}>
          <ul className="navbar-nav">
            {/* Conditionally render navigation links */}
            {(location.pathname === '/' || location.pathname === '/register'|| location.pathname === '/login') && (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Signup
                  </Link>
                </li>
          
              </>
            )}

            {/* Conditionally render different links for '/shop' and '/cart' */}
            {(location.pathname === '/shop' || location.pathname === '/cart') && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Logout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    Cart
                    <Badge>{cartitem.length>0?(cartitem.length):('')}</Badge>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
