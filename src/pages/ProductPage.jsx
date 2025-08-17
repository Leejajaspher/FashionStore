import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import '../styles/ProductsPage.css'; // Assuming you have styles for the ProductsPage

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="products-page">
      <h1>Products</h1>

      {loading && (
        <div className="products-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="product-skeleton">
              <div className="img"></div>
              <div className="line short"></div>
              <div className="line long"></div>
              <div className="btn"></div>
            </div>
          ))}
        </div>
      )}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
