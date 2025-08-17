import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // Assuming you have styles for the HomePage
import ProductsPage from './ProductPage';
export default function HomePage() {
  return (
    <>
      <section className="home-page">
        <div className="overlay">
          <h1>Spot Light</h1>
          <input type="text" placeholder="Search products..." className="search-box" />
          <Link to="/" className="product-btn">View Products</Link>
     </div>
    </section>
    <ProductsPage/>
    </>
  );
}
