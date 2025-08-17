import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import '../styles/Navbar.css'; // Assuming you have styles for the Navbar

export default function Navbar() {
  const { totalQty } = useContext(CartContext);

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <Link to="/" className="logo">Spot Light 🛍️</Link>

        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

        <div className="nav-links">
          <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'active cart-link' : 'cart-link'}>
            Cart
            <span className="cart-badge">{totalQty}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
