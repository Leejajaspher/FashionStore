import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css'; // Assuming you have styles for the CartPage

export default function CartPage() {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = total * 0.1;
  const finalPrice = total - discount;

  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <h1>Your Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/" className="continue-btn">← Continue Shopping</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>${item.price.toFixed(2)} each</p>
            </div>

            <div className="quantity-controls">
              <button onClick={() => removeFromCart(item.id)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>

            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            <button className="remove-btn" onClick={() => deleteFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Discount</span>
          <span className="discount">-${discount.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Final Price</span>
          <span>${finalPrice.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
}
