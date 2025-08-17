import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/ProductCard.css"; // Assuming you have styles for the ProductCard

export default function ProductCard({ product }) {
  const { cart, addToCart, deleteFromCart } = useContext(CartContext);
  const inCart = cart.some((p) => p.id === product.id);

  return (
    <div className="group border rounded-xl p-4 bg-white shadow-sm flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg">
      {/* Image */}
      <div className="h-40 flex items-center justify-center mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-40 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-sm mb-1 truncate">{product.title}</h3>

      {/* Description: clamps via max-height, expands on hover (no plugin needed) */}
      <div className="relative text-xs text-gray-600 mb-2 overflow-hidden max-h-12 group-hover:max-h-40 transition-all duration-300 ease-in-out">
        {product.description}
      </div>

      {/* Price */}
      <p className="text-blue-600 font-bold mb-3">${product.price}</p>

      {/* Add / Remove */}
      {inCart ? (
        <button
          onClick={() => deleteFromCart(product.id)}
          className="mt-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
